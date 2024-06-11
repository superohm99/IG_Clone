package chat

import (
	"igclone/models"

	"github.com/gin-gonic/gin"
)

type ChatService interface {
	ChatCreate(c *gin.Context) (bool, error)
	MessageCreate(c *gin.Context) (bool, error)
	GetMessage(ChatId string) ([]models.Message, error)
}
