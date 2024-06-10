package chat

import (
	"github.com/gin-gonic/gin"
)

type ChatService interface {
	ChatCreate(c *gin.Context) (bool, error)
	MessageCreate(c *gin.Context) (bool, error)
}
