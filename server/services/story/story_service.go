package story

import (
	"igclone/repository/story"
	"log"

	"github.com/gin-gonic/gin"
)

type storyService struct {
	storyRepo story.StoryRepository
}

func NewStoryService(storyRepo story.StoryRepository) StoryService {
	return storyService{storyRepo: storyRepo}
}

func (s storyService) GetStories(id string) ([]StoryResponse, error) {
	stories, err := s.storyRepo.GetByUserId(id)

	if err != nil {
		log.Println(err)
		return nil, err
	}

	var storyResponses []StoryResponse
	for _, story := range stories {
		storyResponses = append(storyResponses, StoryResponse{
			Id:    story.Id,
			Image: story.Image,
			User:  story.User,
		})
	}

	return storyResponses, nil
}

func (s storyService) AddStory(c *gin.Context) (bool, error) {
	_, err := s.storyRepo.StoryCreate(c)

	if err != nil {
		log.Println(err)
		return false, err
	}

	return true, nil
}
