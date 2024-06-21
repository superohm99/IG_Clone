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

func (s storyService) GetStories() ([]StoryResponse, error) {
	stories, err := s.storyRepo.GetAll()

	if err != nil {
		log.Println(err)
		return nil, err
	}

	var storyResponses []StoryResponse
	for _, story := range stories {
		storyResponses = append(storyResponses, StoryResponse{
			Id:    story.Id,
			Image: story.Image,
			Like:  story.Like,
			Reply: story.Reply,
		})
	}

	log.Println(storyResponses)
	return storyResponses, nil
}

func (s storyService) GetFollowingStories(c *gin.Context) ([]StoryResponse, error) {
	stories, err := s.storyRepo.GetOnlyFollowing(c)

	if err != nil {
		log.Println(err)
		return nil, err
	}

	var storyResponses []StoryResponse
	for _, story := range stories {
		storyResponses = append(storyResponses, StoryResponse{
			Id:    story.Id,
			Image: story.Image,
			Like:  story.Like,
			Reply: story.Reply,
		})
	}

	log.Println(storyResponses)
	return storyResponses, nil
}

func (s storyService) GetStoriesByUserId(id string) ([]StoryResponse, error) {
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
			Like:  story.Like,
			Reply: story.Reply,
		})
	}

	log.Println(storyResponses)

	return storyResponses, nil
}

func (s storyService) AddStory(c *gin.Context) (bool, error) {
	status, err := s.storyRepo.StoryCreate(c)

	if err != nil {
		log.Println(err)
		return status, err
	}

	return status, nil
}
