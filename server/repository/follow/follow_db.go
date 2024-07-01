package followrepo

import (
	"gorm.io/gorm"
	"igclone/models"
)

type followRepositoryImpl struct {
	db *gorm.DB
}

func NewFollowRepository(db *gorm.DB) FollowRepository {
	return &followRepositoryImpl{db}
}

func (r *followRepositoryImpl) SendFollow(reqFollow *models.Follow) error {
	if err := r.db.Create(reqFollow).Error; err != nil {
		return err
	}
	return nil
}

func (r *followRepositoryImpl) Delete(nd_param uint, st_param uint) error {
	if err := r.db.Where("user_id = ? AND follower_id = ?", nd_param, st_param).Delete(&models.Follow{}).Error; err != nil {
		return err
	}
	return nil
}

func (r *followRepositoryImpl) AcceptFollow(userID uint, followerID uint) error {
	err := r.db.Model(&models.Follow{}).Where("user_id = ? AND follower_id = ?", userID, followerID).Update("status", "SUCCESS").Error
	if err != nil {
		return err
	}
	return nil
}

// หาคนที่เราติดตามทั้งหมด
func (r *followRepositoryImpl) FindFollowing(userID uint) ([]models.TempUser, error) {
	users := []models.TempUser{}
	err := r.db.Table("temp_users").Select("temp_users.*").Joins("JOIN follows ON temp_users.id = follows.user_id").Where("follows.follower_id = ? AND follows.status = ?", userID, "SUCCESS").Scan(&users).Error
	if err != nil {
		return nil, err
	}
	return users, nil
}

func (r *followRepositoryImpl) FindFollower(userID uint) ([]models.TempUser, error) {
	users := []models.TempUser{}
	err := r.db.Table("temp_users").Select("temp_users.*").Joins("JOIN follows ON temp_users.id = follows.follower_id").Where("follows.user_id = ? AND follows.status = ?", userID, "SUCCESS").Scan(&users).Error
	if err != nil {
		return nil, err
	}
	return users, nil
}

func (r *followRepositoryImpl) FindRequest(userID uint) ([]models.TempUser, error) {
	users := []models.TempUser{}
	err := r.db.Table("temp_users").Select("temp_users.*").Joins("JOIN follows ON temp_users.id = follows.follower_id").Where("follows.user_id = ? AND follows.status = ?", userID, "PENDING").Scan(&users).Error
	if err != nil {
		return nil, err
	}

	return users, nil
}

func (r *followRepositoryImpl) GetFollow(userID uint, followerID uint) (*models.Follow, error) {
	follow := &models.Follow{}
	if err := r.db.Where("user_id = ? AND follower_id = ?", userID, followerID).First(follow).Error; err != nil {
		return nil, err
	}
	return follow, nil
}
