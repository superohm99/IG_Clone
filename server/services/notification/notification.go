package notisrv

import (
	"igclone/data/request"
	"igclone/data/response"
)

type NotificationService interface {
	GetNotifications(userID uint) ([]response.NotificationResponse, error)
	GetNotificationByID(ID uint) (*response.NotificationResponse, error)
	CreateNotification(createNoti request.CreateNotificationRequest) (*response.NotificationResponse, error)
	GetContent(contentType string, contentID uint) (interface{}, error)
	DeleteNotification(contentTypeID uint, contentID uint) error
	EditContentType(contentTypeID uint, newContentTypeID uint, contentID uint) error
}
