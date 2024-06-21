package reel

import (
	"igclone/services/reel"

	"github.com/gin-gonic/gin"
)

type reelController struct {
	ReelSrv reel.ReelService
}

func NewReelController(ReelSrv reel.ReelService) reelController {
	return reelController{ReelSrv: ReelSrv}
}

func (s reelController) Reels() ([]reel.ReelResponse, error) {
	return s.ReelSrv.GetReels()
}

func (s reelController) FollowingReels(c *gin.Context) ([]reel.ReelResponse, error) {
	return s.ReelSrv.GetFollowingReels(c)
}

func (s reelController) ReelsByUserId(id string) ([]reel.ReelResponse, error) {
	return s.ReelSrv.GetReelsByUserId(id)
}

func (s reelController) AddReel(c *gin.Context) (bool, error) {
	return s.ReelSrv.AddReel(c)
}

func (s reelController) AddComment(c *gin.Context) (bool, error) {
	return s.ReelSrv.AddComment(c)
}
