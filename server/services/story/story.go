package story

import (
	"igclone/models"

	"github.com/gin-gonic/gin"
)

type StoryResponse struct {
	Id    uint        `json:"id"`
	Image string      `json:"image"`
	User  models.User `json:"user"`
}

type StoryService interface {
	GetStories(string) ([]StoryResponse, error)
	AddStory(c *gin.Context) (bool, error)
}
