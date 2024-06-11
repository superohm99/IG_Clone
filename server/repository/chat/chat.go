package chat

import (
	"igclone/models"

	"github.com/gin-gonic/gin"
)

type ChatRepository interface {
	// GetAll() ([]models.Post, error)
	ChatCreate(c *gin.Context) (bool, error)
	GetMessageFilter(ChatId string) ([]models.Message, error)
	MessageCreate(c *gin.Context) (bool, error)
}
