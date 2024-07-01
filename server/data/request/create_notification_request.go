package request

type CreateNotificationRequest struct {
	FromUserID  uint   `json:"fromUserID" validate:"required"`
	ToUsername  string `json:"toUsername" validate:"required"`
	ContentType string `json:"contentType" validate:"required"`
	ContentID   uint   `json:"contentID" validate:"required"`
}
