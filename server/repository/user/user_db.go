package user

import (
	"igclone/initializers"
	"igclone/models"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type UserRepositoryDB struct {
	db *gorm.DB
}

func NewUserRepositoryDB(db *gorm.DB) UserRepositoryDB {
	return UserRepositoryDB{db: db}
}

func (r UserRepositoryDB) GetAllFollow(c *gin.Context) (models.User, []*models.User, error) {

	var user models.User

	userID := uint(1)

	result := initializers.DB.Preload("Closed_friend").Find(&user, userID)
	if result.Error != nil {
		return user, nil, result.Error
	}

	var friends []*models.User
	initializers.DB.Model(&user).Association("Closed_friend").Find(&friends)

	// for _, friend := range friends {
	// 	fmt.Println(friend.Id)
	// }

	return user, friends, nil
}

func (r UserRepositoryDB) AddFollow(c *gin.Context) (bool, error) {
	var body struct {
		UserId   uint
		FollowId uint
	}

	c.Bind(&body)
	user := &models.User{Id: body.UserId}
	result := initializers.DB.Model(user).Update("Closed_friend", append(user.Closed_friend, &models.User{Id: body.FollowId}))

	if result.Error != nil {
		c.Status(400)
		return false, c.Err()
	}

	c.JSON(200, gin.H{
		"Id": user.Id,
	})

	return true, nil
}

func (r UserRepositoryDB) ProfileCreate() (models.Userprofile, error) {
	def_profile := models.Userprofile{Phone: "--", Image: "--", Description: "--"}
	return def_profile, nil
}

func (r UserRepositoryDB) ProfileEdit(c *gin.Context) (bool, error) {
	var body struct {
		Phone       string
		Image       string
		Description string
		UserId      uint
	}

	c.Bind(&body)

	var user models.User
	var profile models.Userprofile
	initializers.DB.First(&user, body.UserId)
	initializers.DB.First(&profile, user.User_profileID)
	initializers.DB.Model(&profile).Updates(map[string]interface{}{"Phone": body.Phone, "Image": body.Image, "Description": body.Description})
	// profile := models.Userprofile{Phone: body.Phone, Image: body.Image, Description: body.Description}

	return true, nil
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
	// Get the req body
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
		User_profileID:  userProfile.Id,
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

func (r UserRepositoryDB) UserSignIn(c *gin.Context) (bool, error) {
	// Get the req body
	var body struct {
		Phone_or_Username_or_Email string
		Password                   string
	}

	if err := c.Bind(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"err": "Failed to read body",
		})

		return false, err
	}

	// Look up requested user by username
	user := models.User{}
	userProfile := models.Userprofile{}

	if err := r.db.Where("username = ?", body.Phone_or_Username_or_Email).First(&user).Error; err != nil {
		// If the username is not found, look up the user by phone or email
		if err := r.db.Where("phone = ? OR email = ?", body.Phone_or_Username_or_Email, body.Phone_or_Username_or_Email).First(&userProfile).Error; err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{
				"err": "User not found",
			})
			return false, err
		}

		if err := r.db.Where("user_profile_id = ?", userProfile.Id).First(&user).Error; err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{
				"err": "User not found",
			})
			return false, err
		}
	}

	// Compare sent in pass with saved user pass hash
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password))

	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{
			"err": "Invalid password",
		})
		return false, err
	}

	// Generate a jwt token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.Id,
		"exp": time.Now().Add(time.Hour * 24 * 30).Unix(),
	})

	// Sign and get the complete encoded token as a string using the secret key
	tokenString, err := token.SignedString([]byte(os.Getenv("SECRET_KEY")))

	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{
			"err": "Invalid to create token",
		})
		return false, err
	}

	// Send it back
	c.SetSameSite(http.SameSiteLaxMode)
	c.SetCookie("Authorization", tokenString, 60*60*24*30, "", "", false, true)
	c.JSON(http.StatusOK, gin.H{})

	return true, nil
}

func (r UserRepositoryDB) UserSignOut(c *gin.Context) (bool, error) {
	// Delete the cookie
	c.SetCookie("Authorization", "", -1, "", "", false, true)
	if err := c.Err(); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"err": "Failed to delete cookie",
		})

		return false, err
	}

	c.JSON(http.StatusOK, gin.H{})
	return true, nil
}
