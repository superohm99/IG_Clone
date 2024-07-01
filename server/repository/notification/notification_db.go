package notification_repository

import (
	"igclone/models"
	"gorm.io/gorm"
)

type notificationRepositoryImpl struct {
	db *gorm.DB
}

func NewNotificationRepository(db *gorm.DB) NotificationRepository {
	return &notificationRepositoryImpl{db}
}

func (r *notificationRepositoryImpl) FindOne(ID uint) (*models.Notification, error) {
	noti := &models.Notification{}
	err := r.db.Preload("FromUser").Preload("ToUser").Preload("NotificationType").Where("id = ?", ID).Find(noti).Error
	if err != nil {
		return nil, err
	}
	return noti, nil
}

func (r *notificationRepositoryImpl) FindAll(userID uint) ([]models.Notification, error) {
	notis := []models.Notification{}
	err := r.db.Preload("FromUser").Preload("ToUser").Preload("NotificationType").Where("to_user_id = ?", userID).Find(&notis).Error
	if err != nil {
		return nil, err
	}
	return notis, nil
}

func (r *notificationRepositoryImpl) Save(createNoti models.Notification) (*models.Notification, error) {
	if err := r.db.Create(&createNoti).Error; err != nil {
		return nil, err
	}
	return &createNoti, nil
}

func (r *notificationRepositoryImpl) FindTypeByContentType(contentType string) (*models.NotificationType, error) {
	notiType := &models.NotificationType{}
	err := r.db.Where("type = ?", contentType).Find(notiType).Error
	if err != nil {
		return nil, err
	}
	return notiType, nil
}

func (r *notificationRepositoryImpl) FindFollowContent(contentID uint) (*models.Follow, error) {
	follow := &models.Follow{}
	err := r.db.Preload("User").Preload("Follower").Where("id = ?", contentID).Find(follow).Error
	if err != nil {
		return nil, err
	}
	return follow, nil
}

func (r *notificationRepositoryImpl) FindPostContent(contentID uint) (*models.TestPost, error) {
	post := &models.TestPost{}
	err := r.db.Preload("User").Where("id = ?", contentID).Find(post).Error
	if err != nil {
		return nil, err
	}
	return post, nil
}

func (r *notificationRepositoryImpl) FindStoryContent(contentID uint) (*models.TestStory, error) {
	story := &models.TestStory{}
	err := r.db.Preload("User").Where("id = ?", contentID).Find(story).Error
	if err != nil {
		return nil, err
	}
	return story, nil
}

func (r *notificationRepositoryImpl) DeleteByContentID(contentTypeID uint, contentID uint) error {
	err := r.db.Where("content_type_id = ? AND content_id = ?", contentTypeID, contentID).Delete(&models.Notification{}).Error
	if err != nil {
		return err
	}
	return nil
}

func (r *notificationRepositoryImpl) EditContentType(contentTypeID uint, newContentTypeID uint, contentID uint) (*models.Notification, error) {
	editNoti := &models.Notification{}
	err := r.db.Model(editNoti).Where("content_type_id = ? AND content_id = ?", contentTypeID, contentID).Update("content_type_id", newContentTypeID).Error
	if err != nil {
		return nil, err
	}
	return editNoti, nil
}
