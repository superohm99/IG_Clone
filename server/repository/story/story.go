package story

import (
	"igclone/models"

	"github.com/gin-gonic/gin"
)

type StoryRepository interface {
	GetAll() ([]models.Story, error)
	GetOnlyFollowing(c *gin.Context) ([]models.Story, error)
	GetByUserId(string) ([]models.Story, error)
	StoryCreate(c *gin.Context) (bool, error)
}
