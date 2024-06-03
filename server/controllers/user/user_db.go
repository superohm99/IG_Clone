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

func (r UserRepositoryDB) Create(c *gin.Context) (bool, error) {
	var body struct {
		Name string
	}

	c.Bind(&body)
	user := models.User{Name: body.Name}

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
	return nil, nil
}
