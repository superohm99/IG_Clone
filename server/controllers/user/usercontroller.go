package user

import (
	"igclone/models"

	"github.com/gin-gonic/gin"
)

type UserRepository interface {
	GetAll() ([]models.User, error)
	Create(c *gin.Context) (bool, error)
}

// func UsersCreate(c *gin.Context) {
// 	var body struct {
// 		Name string
// 	}

// 	c.Bind(&body)
// 	user := models.User{Name: body.Name}

// 	result := initializers.DB.Create(&user)

// 	if result.Error != nil {
// 		c.Status(400)
// 		return
// 	}
// 	c.JSON(200, gin.H{
// 		"user": user.Name,
// 	})

// 	return
// }
