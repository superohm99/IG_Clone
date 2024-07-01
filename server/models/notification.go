package models

type Notification struct {
	ID                 uint
	CreatedAt          string
	FromUser           TempUser
	FromUserID         uint
	ToUser             TempUser
	ToUserID           uint
	NotificationTypeID uint
	NotificationType   NotificationType
	ContentID          uint
}