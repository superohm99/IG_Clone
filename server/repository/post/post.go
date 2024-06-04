package post

import (
	"igclone/models"

	"github.com/gin-gonic/gin"
)

type PostRepository interface {
	GetAll() ([]models.Post, error)
	PostCreate(c *gin.Context) (bool, error)
}
