package user

import (
	"igclone/initializers"
	"igclone/models"

	"github.com/gin-gonic/gin"
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
