package user

import (
	"igclone/models"
)

// type Result struct {
// 	ID   int
// 	Name string
// }

type UserRepository interface {
	CreateUser(user models.User) (*models.User, error)
	GetByUsername(username string) (*models.User, error)
	GetById(userID uint) (*models.User, error)
	UpdateUsers(userID uint, fields map[string]interface{}) error
	UpdateUserProfiles(userID uint, fields map[string]interface{}) error
	verifyUsername(username string) (bool, error)

	// GetAll() ([]models.User, error)
	// UserCreate(c *gin.Context) (bool, error)
	// GetAllClosedFriend(userid string) (models.User, []*models.User, error)
	// AddFollow(c *gin.Context) (bool, error)
	// ProfileCreate() (models.UserProfile, error)
	// ProfileEdit(c *gin.Context) (bool, error)
	// UserSignUp(c *gin.Context) (bool, error)
	// UserSignIn(c *gin.Context) (bool, error)
	// UserSignOut(c *gin.Context) (bool, error)
}
