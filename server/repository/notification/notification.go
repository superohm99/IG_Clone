package notification_repository

import (
	"igclone/models"
)

type NotificationRepository interface {
	FindOne(ID uint) (*models.Notification, error)
	FindAll(userID uint) ([]models.Notification, error)
	Save(createNoti models.Notification) (*models.Notification, error)
	FindTypeByContentType(contentType string) (*models.NotificationType, error)
	FindFollowContent(contentID uint) (*models.Follow, error)
	FindPostContent(contentID uint) (*models.TestPost, error)
	FindStoryContent(contentID uint) (*models.TestStory, error)
	DeleteByContentID(contentTypeID uint, contentID uint) error
	EditContentType(contentTypeID uint, newContentTypeID uint, contentID uint) (*models.Notification, error)
}