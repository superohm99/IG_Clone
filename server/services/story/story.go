package story

import (
	"igclone/models"

	"github.com/gin-gonic/gin"
)

type StoryResponse struct {
	Id    uint           `json:"id"`
	Image string         `json:"image"`
	Like  models.Like    `json:"like"`
	User  models.User    `json:"user"`
	Reply []models.Reply `json:"reply"`
}

type StoryService interface {
	GetStories() ([]StoryResponse, error)
	CreateStory(c *gin.Context) (bool, error)
}
