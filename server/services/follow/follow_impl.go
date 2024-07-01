package follow_service

import (
	"fmt"
	"igclone/data/request"
	"igclone/errs"
	"igclone/logs"
	"igclone/models"
	followrepo "igclone/repository/follow"
	notisrv "igclone/services/notification"
	usersrv "igclone/services/user"
)

type followServiceImpl struct {
	followRepo followrepo.FollowRepository
	userSrv    usersrv.UserService
	notiSrv    notisrv.NotificationService
}

func NewFollowService(followRepo followrepo.FollowRepository, userSrv usersrv.UserService, notiSrv notisrv.NotificationService) FollowService {
	return &followServiceImpl{followRepo, userSrv, notiSrv}
}

func (s *followServiceImpl) RequestToFollow(userID uint, followingUsername string) error {
	following, err := s.userSrv.GetUserByUsername(followingUsername)
	if err != nil {
		logs.Error(err)
		return errs.NewNotFoundError("Following user not found")
	}

	user, err := s.userSrv.GetUserByID(userID)
	if err != nil {
		logs.Error(err)
		return errs.NewNotFoundError("User not found")
	}

	if following.ID == user.ID {
		logs.Error("You can't follow yourself")
		return errs.NewBadRequestError("You can't follow yourself")
	}

	_, err = s.followRepo.GetFollow(following.ID, user.ID)
	if err == nil {
		logs.Error("You already send follow request")
		return errs.NewBadRequestError("You already send follow request")
	}

	followReq := &models.Follow{
		UserID:     following.ID,
		FollowerID: user.ID,
	}
	err = s.followRepo.SendFollow(followReq)
	if err != nil {
		logs.Error(err)
		return errs.NewInternalServerError("Failed to send follow request")
	}

	createNoti := request.CreateNotificationRequest{
		FromUserID: user.ID,
		ToUsername: followingUsername,
		ContentType: "REQUEST",
		ContentID: followReq.ID,
	}
	newNoti, err := s.notiSrv.CreateNotification(createNoti)
	if err != nil {
		logs.Error(err)
		return errs.NewInternalServerError("Failed to create notification")
	}
	logs.Info(fmt.Sprintf("New notification created: %v", newNoti))

	return nil
}

func (s *followServiceImpl) CancelRequestToFollow(userID uint, followingUsername string) error {
	user, err := s.userSrv.GetUserByID(userID)
	if err != nil {
		logs.Error(err)
		return errs.NewNotFoundError("User not found")
	}

	following, err := s.userSrv.GetUserByUsername(followingUsername)
	if err != nil {
		logs.Error(err)
		return errs.NewNotFoundError("Following user not found")
	}

	if following.ID == user.ID {
		logs.Error("You can't cancel follow request to yourself")
		return errs.NewBadRequestError("You can't cancel follow request to yourself")
	}

	follow, err := s.GetFollow(following.ID, user.ID)
	if err != nil {
		logs.Error(err)
		return errs.NewNotFoundError("follow request not found")
	}

	if follow.Status == "SUCCESS" {
		logs.Error("You follow this user")
		return errs.NewNotFoundError("follow request not found")
	}
	
	// delete notification -> 3: REQUEST
	err = s.notiSrv.DeleteNotification(3, follow.ID)
	if err != nil {
		logs.Error(err)
		return errs.NewUnexpectedError()
	}

	err = s.followRepo.Delete(following.ID, user.ID)
	if err != nil {
		logs.Error(err)
		return errs.NewUnexpectedError()
	}

	return nil
}

func (s *followServiceImpl) AcceptRequest(userID uint, followerUsername string) error {

	user, err := s.userSrv.GetUserByID(userID)
	if err != nil {
		logs.Error(err)
		return errs.NewNotFoundError("User not found")
	}

	follower, err := s.userSrv.GetUserByUsername(followerUsername)
	if err != nil {
		logs.Error(err)
		return errs.NewNotFoundError("follower not found")
	}

	if user.ID == follower.ID {
		logs.Error("You can't accept follow request from yourself")
		return errs.NewBadRequestError("You can't accept follow request from yourself")
	}

	follow, err := s.followRepo.GetFollow(user.ID, follower.ID)
	if err != nil {
		logs.Error(err)
		return errs.NewNotFoundError("follower not found")
	}

	if follow.Status == "SUCCESS" {
		logs.Error("request already accepted")
		return errs.NewNotFoundError("request already accepted")
	}

	err = s.followRepo.AcceptFollow(user.ID, follower.ID)
	if err != nil {
		logs.Error(err)
		return errs.NewUnexpectedError()
	}

	// edit notification from 3: REQUEST to 4: FOLLOW
	err = s.notiSrv.EditContentType(3, 4, follow.ID)
	if err != nil {
		logs.Error(err)
		return errs.NewUnexpectedError()
	}
	return nil
}

func (s *followServiceImpl) RejectRequest(userID uint, followerUsername string) error {
	user, err := s.userSrv.GetUserByID(userID)
	if err != nil {
		logs.Error(err)
		return errs.NewNotFoundError("User not found")
	}

	follower, err := s.userSrv.GetUserByUsername(followerUsername)
	if err != nil {
		logs.Error(err)
		return errs.NewNotFoundError("follower not found")
	}

	if user.ID == follower.ID {
		logs.Error("You can't reject follow request from yourself")
		return errs.NewBadRequestError("You can't reject follow request from yourself")
	}

	follow, err := s.followRepo.GetFollow(user.ID, follower.ID)
	if err != nil {
		logs.Error(err)
		return errs.NewNotFoundError("follower not found")
	}
	if follow.Status == "SUCCESS" {
		return errs.NewNotFoundError("follow request not found")
	}

	// delete notification -> 3: REQUEST
	err = s.notiSrv.DeleteNotification(3, follow.ID)
	if err != nil {
		logs.Error(err)
		return errs.NewUnexpectedError()
	}

	err = s.followRepo.Delete(user.ID, follower.ID)
	if err != nil {
		logs.Error(err)
		return errs.NewUnexpectedError()
	}
	return nil
}

func (s *followServiceImpl) RemoveFollowing(userID uint, followingUsername string) error {
	user, err := s.userSrv.GetUserByID(userID)
	if err != nil {
		logs.Error(err)
		return errs.NewNotFoundError("User not found")
	}

	following, err := s.userSrv.GetUserByUsername(followingUsername)
	if err != nil {
		logs.Error(err)
		return errs.NewNotFoundError("following not found")
	}

	if user.ID == following.ID {
		logs.Error("You can't remove following yourself")
		return errs.NewBadRequestError("You can't remove following yourself")
	}

	follow, err := s.followRepo.GetFollow(following.ID, user.ID)
	if err != nil {
		return errs.NewNotFoundError("following not found")
	}
	if follow.Status == "PENDING" {
		return errs.NewNotFoundError("following not found")
	}

	// delete notification -> 4: FOLLOW
	err = s.notiSrv.DeleteNotification(4, follow.ID)
	if err != nil {
		logs.Error(err)
		return errs.NewUnexpectedError()
	}

	err = s.followRepo.Delete(following.ID, user.ID)
	if err != nil {
		logs.Error(err)
		return errs.NewUnexpectedError()
	}

	return nil
}

func (s *followServiceImpl) RemoveFollower(userID uint, followerUsername string) error {
	user, err := s.userSrv.GetUserByID(userID)
	if err != nil {
		logs.Error(err)
		return errs.NewNotFoundError("User not found")
	}

	follower, err := s.userSrv.GetUserByUsername(followerUsername)
	if err != nil {
		logs.Error(err)
		return errs.NewNotFoundError("follower not found")
	}

	if user.ID == follower.ID {
		logs.Error("You can't remove follower yourself")
		return errs.NewBadRequestError("You can't remove follower yourself")
	}

	follow, err := s.followRepo.GetFollow(user.ID, follower.ID)
	if err != nil {
		logs.Error(err)
		return errs.NewUnexpectedError()
	}

	if follow.Status == "PENDING" {
		return errs.NewNotFoundError("follower not found")
	}

	// delete notification -> 4: FOLLOW
	err = s.notiSrv.DeleteNotification(4, follow.ID)
	if err != nil {
		logs.Error(err)
		return errs.NewUnexpectedError()
	}

	err = s.followRepo.Delete(user.ID, follower.ID)
	if err != nil {
		logs.Error(err)
		return errs.NewUnexpectedError()
	}
	return nil
}

func (s *followServiceImpl) GetFollowings(username string) ([]models.TempUser, error) {
	user, err := s.userSrv.GetUserByUsername(username)
	if err != nil {
		logs.Error(err)
		return nil, errs.NewNotFoundError("User not found")
	}

	followings, err := s.followRepo.FindFollowing(user.ID)
	if err != nil {
		logs.Error(err)
		return nil, errs.NewUnexpectedError()
	}

	return followings, nil
}

func (s *followServiceImpl) GetFollowers(username string) ([]models.TempUser, error) {
	user, err := s.userSrv.GetUserByUsername(username)
	if err != nil {
		logs.Error(err)
		return nil, errs.NewNotFoundError("User not found")
	}

	followers, err := s.followRepo.FindFollower(user.ID)
	if err != nil {
		logs.Error(err)
		return nil, errs.NewUnexpectedError()
	}

	return followers, nil
}

func (s *followServiceImpl) GetRequest(userID uint) ([]models.TempUser, error) {
	user, err := s.userSrv.GetUserByID(userID)
	if err != nil {
		logs.Error(err)
		return nil, errs.NewNotFoundError("User not found")
	}

	requests, err := s.followRepo.FindRequest(user.ID)
	if err != nil {
		logs.Error(err)
		return nil, errs.NewUnexpectedError()
	}

	return requests, nil
}

func (s *followServiceImpl) GetFollow(userID uint, followerID uint) (*models.Follow, error) {
	follow, err := s.followRepo.GetFollow(userID, followerID)
	if err != nil {
		logs.Error(err)
		return nil, errs.NewUnexpectedError()
	}

	return follow, nil
}
