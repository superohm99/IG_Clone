package user

import (
	"igclone/data/request"
	"igclone/data/response"
	"igclone/models"
)

// type Result struct {
// 	Id      uint
// 	Name    string
// 	Friends []*models.User
// }

type UserService interface {
	CreateUser(user request.CreateUserRequest) (*response.UserResponse, error)
	GetUserByUsername(username string) (*response.UserResponse, *string, error)
	GetUserById(userID uint) (*models.User, error)
	GetUserResponseById(userID uint) (*response.UserResponse, error)
	UpdateUser(userID uint, fields request.UpdateUserDTO) error
	DeleteUser(userID uint) error

	// Getusers() ([]UserResponse, error)
	// CreateUser(c *gin.Context) (bool, error)
	// ProfileEdit(c *gin.Context) (bool, error)
	// AddFollow(c *gin.Context) (bool, error)
	// GetClosedFriend(userid string) (Result, error)
	// SignUp(c *gin.Context) (bool, error)
	// SignIn(c *gin.Context) (bool, error)
	// SignOut(c *gin.Context) (bool, error)
}
