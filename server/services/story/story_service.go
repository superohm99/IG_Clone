package story

import (
	"igclone/repository/story"

	"github.com/gin-gonic/gin"
)

type storyService struct {
	storyRepo story.StoryRepository
}

func NewStoryService(storyRepo story.StoryRepository) StoryService {
	return storyService{storyRepo: storyRepo}
}

func (s storyService) CreateStory(c *gin.Context) (bool, error) {
	return s.storyRepo.StoryCreate(c)
}

func (s storyService) GetStories() ([]StoryResponse, error) {
	stories, err := s.storyRepo.GetAll()
	if err != nil {
		return nil, err
	}

	storyResponses := []StoryResponse{}
	for _, story := range stories {
		storyResponses = append(storyResponses, StoryResponse{
			Id:    story.Id,
			Image: story.Image,
			Like:  story.Like,
			User:  story.User,
			Reply: story.Reply,
		})
	}

	return storyResponses, nil
}
