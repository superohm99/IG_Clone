package story

import (
	"igclone/models"

	"github.com/gin-gonic/gin"
)

type StoryResponse struct {
	Id    uint
	Image string
	Like  models.Like
	Reply []models.Reply
}

type StoryService interface {
	GetStories(string) ([]StoryResponse, error)
	AddStory(c *gin.Context) (bool, error)
}
