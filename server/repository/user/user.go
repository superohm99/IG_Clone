package user

import (
	"igclone/models"

	"github.com/gin-gonic/gin"
)

type Result struct {
	ID   int
	Name string
}

type UserRepository interface {
	GetAll() ([]models.User, error)
	UserCreate(c *gin.Context) (bool, error)
	GetAllClosedFriend(userid string) (models.User, []*models.User, error)
	AddFollow(c *gin.Context) (bool, error)
	ProfileCreate() (models.Userprofile, error)
	ProfileEdit(c *gin.Context) (bool, error)
	UserSignUp(c *gin.Context) (bool, error)
	UserSignIn(c *gin.Context) (bool, error)
	UserSignOut(c *gin.Context) (bool, error)
}
