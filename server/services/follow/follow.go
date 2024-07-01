package follow_service

import "igclone/models"

type FollowService interface {
	RequestToFollow(userID uint, followingUsername string) error
	CancelRequestToFollow(userID uint, followingUsername string) error
	AcceptRequest(userID uint, followerUsername string) error
	RejectRequest(userID uint, followerUsername string) error
	RemoveFollowing(userID uint, followingUsername string) error
	RemoveFollower(userID uint, followerUsername string) error
	GetFollowings(username string) ([]models.TempUser, error)
	GetFollowers(username string) ([]models.TempUser, error)
	GetRequest(userID uint) ([]models.TempUser, error)
	GetFollow(userID uint, followerID uint) (*models.Follow, error)
}