package user

import (
	"igclone/models"

	"github.com/gin-gonic/gin"
)

type UserRepository interface {
	GetAll() ([]models.User, error)
	UserCreate(c *gin.Context) (bool, error)
	ProfileCreate() (models.Userprofile, error)

	UserSignUp(c *gin.Context) (bool, error)
	UserSignIn(c *gin.Context) (bool, error)
	UserSignOut(c *gin.Context) (bool, error)
}
