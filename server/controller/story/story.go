package story

import (
	"igclone/services/story"

	"github.com/gin-gonic/gin"
)

type StoryController struct {
	StorySrv story.StoryService
}

func NewStoryController(StorySrv story.StoryService) StoryController {
	return StoryController{StorySrv: StorySrv}
}

func (s StoryController) Stories(id string) ([]story.StoryResponse, error) {
	return s.StorySrv.GetStories(id)
}

func (s StoryController) AddStory(c *gin.Context) (bool, error) {
	return s.StorySrv.AddStory(c)
}
