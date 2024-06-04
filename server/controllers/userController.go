package controllers

import (
	"igclone/initializers"
	"igclone/models"

	"github.com/gin-gonic/gin"
)

func UsersCreate(ctx *gin.Context) error {
	var body struct {
		Name string
	}

	err := ctx.Bind(&body)
	if err != nil {
		return err
	}
	
	user := models.User{Name: body.Name}

	result := initializers.DB.Create(&user)
	if result.Error != nil {
		return result.Error
	}

	return nil
}
