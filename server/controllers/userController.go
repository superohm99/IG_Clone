package controllers

import (
	"igclone/initializers"
	"igclone/models"

	"github.com/gin-gonic/gin"
)

func UsersCreate(c *gin.Context) bool {
	var body struct {
		Name string
	}

	c.Bind(&body)
	user := models.User{Name: body.Name}

	result := initializers.DB.Create(&user)

	if result.Error != nil {
		c.Status(400)
		return true
	}
	c.JSON(200, gin.H{
		"user": user.Name,
	})
	return true
}
