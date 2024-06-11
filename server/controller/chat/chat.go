package post

import (
	"igclone/services/chat"

	"github.com/gin-gonic/gin"
)

type ChatController struct {
	ChatSrv chat.ChatService
}

func NewChatController(ChatSrv chat.ChatService) ChatController {
	return ChatController{ChatSrv: ChatSrv}
}

func (p ChatController) ChatCreate(c *gin.Context) (bool, error) {
	return p.ChatSrv.ChatCreate(c)
}

func (p ChatController) MessageCreate(c *gin.Context) (bool, error) {
	return p.ChatSrv.MessageCreate(c)
}
