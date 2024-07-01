package followrepo

import "igclone/models"

type FollowRepository interface {
	Delete(st_param uint, nd_param uint) error
	SendFollow(reqFollow *models.Follow) error
	AcceptFollow(userID uint, followerID uint) error
	FindFollowing(userID uint) ([]models.TempUser, error)
	FindFollower(userID uint) ([]models.TempUser, error)
	FindRequest(userID uint) ([]models.TempUser, error)
	GetFollow(userID uint, followerID uint) (*models.Follow, error)
}