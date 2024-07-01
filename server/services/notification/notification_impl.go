package notisrv

import (
	"fmt"
	"igclone/data/request"
	"igclone/data/response"
	"igclone/errs"
	"igclone/logs"
	"igclone/models"
	notirepo "igclone/repository/notification"
	usersrv "igclone/services/user"
	"time"
)

type notificationServiceImpl struct {
	notiRepo notirepo.NotificationRepository
	userSrv  usersrv.UserService
}

func NewNotificationService(notiRepo notirepo.NotificationRepository, userSrv usersrv.UserService) NotificationService {
	return &notificationServiceImpl{notiRepo, userSrv}
}

func (n *notificationServiceImpl) GetNotifications(userID uint) ([]response.NotificationResponse, error) {
	notis, err := n.notiRepo.FindAll(userID)
	if err != nil {
		logs.Error(err)
		return nil, errs.NewNotFoundError("Notifications not found")
	}

	notiResponses := []response.NotificationResponse{}
	for _, noti := range notis {
		content, err := n.GetContent(noti.NotificationType.Name, noti.ContentID)
		if err != nil {
			logs.Error(err)
			return nil, err
		}
		notiResponse := response.NotificationResponse{
			ID:          noti.ID,
			CreatedAt:   noti.CreatedAt,
			FromUser:    noti.FromUser,
			ToUser:      noti.ToUser,
			ContentType: noti.NotificationType.Name,
			Content:     content,
		}
		notiResponses = append(notiResponses, notiResponse)
	}

	return notiResponses, nil
}

func (n *notificationServiceImpl) GetNotificationByID(ID uint) (*response.NotificationResponse, error) {
	noti, err := n.notiRepo.FindOne(ID)
	if err != nil {
		logs.Error(err)
		return nil, errs.NewNotFoundError("Notification not found")
	}

	// get content
	content, err := n.GetContent(noti.NotificationType.Name, noti.ContentID)
	if err != nil {
		logs.Error(err)
		return nil, err
	}

	notiResponse := &response.NotificationResponse{
		ID:          noti.ID,
		CreatedAt:   noti.CreatedAt,
		FromUser:    noti.FromUser,
		ToUser:      noti.ToUser,
		ContentType: noti.NotificationType.Name,
		Content:     content,
	}
	
	return notiResponse, nil
}

func (n *notificationServiceImpl) CreateNotification(createNoti request.CreateNotificationRequest) (*response.NotificationResponse, error) {
	toUser, err := n.userSrv.GetUserByUsername(createNoti.ToUsername)
	if err != nil {
		logs.Error(err)
		return nil, errs.NewNotFoundError("User not found")
	}

	notiType, err := n.notiRepo.FindTypeByContentType(createNoti.ContentType)
	if err != nil {
		logs.Error(err)
		return nil, errs.NewBadRequestError("Notification type not found")
	}

	noti := models.Notification{
		CreatedAt:          time.Now().Format("2006-01-02 15:04:05"),
		FromUserID:         createNoti.FromUserID,
		ToUserID:           toUser.ID,
		NotificationTypeID: notiType.ID,
		ContentID:          createNoti.ContentID,
	}
	createdNoti, err := n.notiRepo.Save(noti)
	if err != nil {
		logs.Error(err)
		return nil, errs.NewInternalServerError("Failed to create notification")
	}

	fromUser, err := n.userSrv.GetUserByID(createNoti.FromUserID)
	if err != nil {
		logs.Error(err)
		return nil, errs.NewNotFoundError("User not found")
	}

	content, err := n.GetContent(createNoti.ContentType, createNoti.ContentID)
	if err != nil {
		logs.Error(err)
		return nil, err
	}

	logs.Info(fmt.Sprintf("%v", content))

	notiResponse := &response.NotificationResponse{
		ID:          createdNoti.ID,
		CreatedAt:   createdNoti.CreatedAt,
		FromUser:    *fromUser,
		ToUser:      *toUser,
		ContentType: notiType.Name,
		Content:     content,
	}

	logs.Info(fmt.Sprintf("%v", notiResponse))

	return notiResponse, nil
}

func (n *notificationServiceImpl) GetContent(contentType string, contentID uint) (interface{}, error) {
	var content interface{}
	switch contentType {
	case "follows":
		follow, err := n.notiRepo.FindFollowContent(contentID)
		if err != nil {
			logs.Error(err)
			return nil, errs.NewInternalServerError("Failed to get notification content")
		}
		content = *follow
	case "test_posts":
		post, err := n.notiRepo.FindPostContent(contentID)
		if err != nil {
			logs.Error(err)
			return nil, errs.NewInternalServerError("Failed to get notification content")
		}
		content = *post
	case "test_stories":
		story, err := n.notiRepo.FindStoryContent(contentID)
		if err != nil {
			logs.Error(err)
			return nil, errs.NewInternalServerError("Failed to get notification content")
		}
		content = *story
	default:
		logs.Error(fmt.Sprintf("Notification type %v not found", contentType))
		return nil, errs.NewBadRequestError("Notification type not found")
	}
	return content, nil
}

func (n *notificationServiceImpl) DeleteNotification(contentTypeID uint, contentID uint) error {
	err := n.notiRepo.DeleteByContentID(contentTypeID, contentID)
	if err != nil {
		logs.Error(err)
		return errs.NewInternalServerError("Failed to delete notification")
	}
	return nil
}

func (n *notificationServiceImpl) EditContentType(contentTypeID uint, newContentTypeID uint, contentID uint) error {
	updatedNoti, err := n.notiRepo.EditContentType(contentTypeID, newContentTypeID, contentID)
	if err != nil {
		logs.Error(err)
		return errs.NewInternalServerError("Failed to edit notification content type")
	}
	logs.Info(fmt.Sprintf("Notification content type updated: %v", updatedNoti))
	return nil
}
