package user

import (
	"igclone/models"

	"github.com/gin-gonic/gin"
)

type UserResponse struct {
	Id       uint   `json:"id"`
	Name     string `json:"name"`
	Avatar   string `json:"avatar"`
	IsActive bool   `json:"isactive"`
}
type Result struct {
	Id      uint
	Name    string
	Friends []*models.User
}

type UserService interface {
	Getusers() ([]UserResponse, error)
	CreateUser(c *gin.Context) (bool, error)
	ProfileEdit(c *gin.Context) (bool, error)
	AddFollow(c *gin.Context) (bool, error)
	GetClosedFriend(userid string) (Result, error)
	SignUp(c *gin.Context) (bool, error)
	SignIn(c *gin.Context) (bool, error)
	SignOut(c *gin.Context) (bool, error)
}
