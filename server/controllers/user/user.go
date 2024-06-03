package user

import (
	"igclone/models"

	"github.com/gin-gonic/gin"
)

type UserRepository interface {
	GetAll() ([]models.User, error)
	Create(c *gin.Context) (bool, error)
}
