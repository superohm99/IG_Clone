package post

import (
	"igclone/models"

	"github.com/gin-gonic/gin"
)

type PostService interface {
	GetAllPost() ([]models.Post, error)
	PostCreate(c *gin.Context) (bool, error)
}
