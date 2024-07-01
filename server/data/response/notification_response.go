package response

import "igclone/models"

type NotificationResponse struct {
	ID          uint            `json:"id"`
	CreatedAt   string          `json:"createdAt"`
	FromUser    models.TempUser `json:"fromUser"`
	ToUser      models.TempUser `json:"toUser"`
	ContentType string          `json:"contentType"`
	Content     interface{}     `json:"content"`
}
