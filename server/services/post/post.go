package post

import (
	"github.com/gin-gonic/gin"
)

type PostResponse struct {
	Id       uint   `json:"id"`
	Image    string `json:"image"`
	Title    string `json:"avatar"`
	IsActive bool   `json:"isactive"`
}

type PostService interface {
	GetAllPost() ([]PostResponse, error)
	PostCreate(c *gin.Context) (bool, error)
	CommentCreate(c *gin.Context) (bool, error)
	ReplyCreate(c *gin.Context) (bool, error)
}
