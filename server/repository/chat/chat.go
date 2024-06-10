package chat

import (
	"github.com/gin-gonic/gin"
)

type ChatRepository interface {
	// GetAll() ([]models.Post, error)
	ChatCreate(c *gin.Context) (bool, error)
	MessageCreate(c *gin.Context) (bool, error)
}
