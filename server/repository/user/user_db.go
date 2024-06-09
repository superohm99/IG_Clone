package user

import (
	"igclone/initializers"
	"igclone/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type UserRepositoryDB struct {
	db *gorm.DB
}

func NewUserRepositoryDB(db *gorm.DB) UserRepositoryDB {
	return UserRepositoryDB{db: db}
}

func (r UserRepositoryDB) ProfileCreate() (models.Userprofile, error) {
	def_profile := models.Userprofile{Phone: "--", Image: "--", Description: "--"}
	return def_profile, nil
}

func (r UserRepositoryDB) UserCreate(c *gin.Context) (bool, error) {
	var body struct {
		Name string
	}

	c.Bind(&body)
	def_profile, error := r.ProfileCreate()
	if error != nil {
		c.Status(400)
		return false, c.Err()
	}

	result_defprofile := initializers.DB.Create(&def_profile)
	if result_defprofile.Error != nil {
		c.Status(400)
		return false, c.Err()
	}

	user := models.User{Name: body.Name, User_profileID: def_profile.Id}

	result := initializers.DB.Create(&user)

	if result.Error != nil {
		c.Status(400)
		return false, c.Err()
	}
	c.JSON(200, gin.H{
		"user": user.Name,
	})
	return true, nil
}

func (r UserRepositoryDB) GetAll() ([]models.User, error) {
	users := []models.User{}

	result := r.db.Find(&users)
	if result.Error != nil {
		return nil, result.Error
	}

	return users, nil
}

func (r UserRepositoryDB) UserSignUp(c *gin.Context) (bool, error) {
	// Get the email/pass off req body
	var body struct {
		Username        string `binding:"required"`
		Password        string `binding:"required"`
		IsPublicAccount bool
		Phone           string
		Email           string
	}

	if err := c.Bind(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to read body",
		})

		return false, err
	}

	// Hash the password
	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 10)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to hash password",
		})

		return false, err
	}

	// Begin a transaction
	tx := r.db.Begin()
	if tx.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to initiate transaction",
		})
		return false, tx.Error
	}

	// Create a new userProfile
	userProfile := models.Userprofile{Phone: body.Phone, Email: body.Email}

	// Attempt to create the userProfile within the transaction
	if err := tx.Create(&userProfile).Error; err != nil {
		tx.Rollback()
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to create user profile",
		})
		return false, err
	}

	// Create a new user and associate it with the userProfile
	user := models.User{
		Username:        body.Username,
		Password:        string(hash),
		User_profile:    userProfile,
		IsPublicAccount: body.IsPublicAccount,
		IsActive:        true,
	}

	// Attempt to create the user within the transaction
	if err := tx.Create(&user).Error; err != nil {
		tx.Rollback()
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to create user",
		})
		return false, err
	}

	// Commit the transaction
	if err := tx.Commit().Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to commit transaction",
		})
		return false, err
	}

	// Respond
	c.JSON(http.StatusOK, gin.H{"user": user})
	return true, nil
}
