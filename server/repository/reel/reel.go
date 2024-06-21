package reel

import (
	"igclone/models"

	"github.com/gin-gonic/gin"
)

type ReelRepository interface {
	GetAll() ([]models.Reel, error)
	GetOnlyFollowing(c *gin.Context) ([]models.Reel, error)
	GetByUserId(string) ([]models.Reel, error)
	ReelCreate(c *gin.Context) (bool, error)
	CommentCreate(c *gin.Context) (bool, error)
}
