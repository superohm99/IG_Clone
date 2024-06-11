package post

import (
	"igclone/models"
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

func (p ChatController) GetMessage(chatid string) ([]models.Message, error) {
	return p.ChatSrv.GetMessage(chatid)
}
