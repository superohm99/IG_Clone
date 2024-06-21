package reel

import (
	"igclone/repository/reel"
	"log"

	"github.com/gin-gonic/gin"
)

type reelService struct {
	reelRepo reel.ReelRepository
}

func NewReelService(reelRepo reel.ReelRepository) ReelService {
	return reelService{reelRepo: reelRepo}
}

func (s reelService) GetReels() ([]ReelResponse, error) {
	reels, err := s.reelRepo.GetAll()

	if err != nil {
		return nil, err
	}

	var reelResponses []ReelResponse
	for _, reel := range reels {
		reelResponse := ReelResponse{
			Id:      reel.Id,
			Video:   reel.Video,
			Title:   reel.Title,
			Like:    reel.Like,
			Comment: reel.Comment,
		}
		reelResponses = append(reelResponses, reelResponse)
	}

	log.Println(reelResponses)
	return reelResponses, nil
}

func (s reelService) GetFollowingReels(c *gin.Context) ([]ReelResponse, error) {
	reels, err := s.reelRepo.GetOnlyFollowing(c)

	if err != nil {
		return nil, err
	}

	var reelResponses []ReelResponse
	for _, reel := range reels {
		reelResponse := ReelResponse{
			Id:      reel.Id,
			Video:   reel.Video,
			Title:   reel.Title,
			Like:    reel.Like,
			Comment: reel.Comment,
		}
		reelResponses = append(reelResponses, reelResponse)
	}

	log.Println(reelResponses)
	return reelResponses, nil
}

func (s reelService) GetReelsByUserId(id string) ([]ReelResponse, error) {
	reels, err := s.reelRepo.GetByUserId(id)

	if err != nil {
		return nil, err
	}

	var reelResponses []ReelResponse
	for _, reel := range reels {
		reelResponse := ReelResponse{
			Id:      reel.Id,
			Video:   reel.Video,
			Title:   reel.Title,
			Like:    reel.Like,
			Comment: reel.Comment,
		}
		reelResponses = append(reelResponses, reelResponse)
	}

	log.Println(reelResponses)
	return reelResponses, nil
}

func (s reelService) AddReel(c *gin.Context) (bool, error) {
	status, err := s.reelRepo.ReelCreate(c)

	if err != nil {
		log.Println(err)
		return status, err
	}

	return status, nil
}

func (s reelService) AddComment(c *gin.Context) (bool, error) {
	status, err := s.reelRepo.CommentCreate(c)

	if err != nil {
		log.Println(err)
		return status, err
	}

	return status, nil
}
