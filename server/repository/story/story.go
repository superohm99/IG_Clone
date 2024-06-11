package story

import (
	"igclone/models"

	"github.com/gin-gonic/gin"
)

type StoryRepository interface {
	GetByUserId(string) ([]models.Story, error)
	StoryCreate(c *gin.Context) (bool, error)
}
