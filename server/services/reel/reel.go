package reel

import (
	"igclone/models"

	"github.com/gin-gonic/gin"
)

type ReelResponse struct {
	Id      uint
	Video   string
	Title   string
	Like    models.Like
	Comment []models.Comment
}

type ReelService interface {
	GetReels() ([]ReelResponse, error)
	GetFollowingReels(c *gin.Context) ([]ReelResponse, error)
	GetReelsByUserId(id string) ([]ReelResponse, error)
	AddReel(c *gin.Context) (bool, error)
	AddComment(c *gin.Context) (bool, error)
}
