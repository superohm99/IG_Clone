package user_repository

import (
	"gorm.io/gorm"
	"igclone/models"
)

type userRepositoryImpl struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) UserRepository {
	return &userRepositoryImpl{db: db}
}

func (r *userRepositoryImpl) FindAll() ([]models.TempUser, error) {
	users := []models.TempUser{}
	if err := r.db.Find(&users).Error; err != nil {
		return nil, err
	}
	return users, nil
}

func (r *userRepositoryImpl) FindByID(userID uint) (*models.TempUser, error) {
	user := &models.TempUser{}
	if err := r.db.First(user, userID).Error; err != nil {
		return nil, err
	}
	return user, nil
}

func (r *userRepositoryImpl) FindByUsername(username string) (*models.TempUser, error) {
	user := &models.TempUser{}
	if err := r.db.Where("username = ?", username).First(user).Error; err != nil {
		return nil, err
	}
	return user, nil
}

func (r *userRepositoryImpl) Save(user models.TempUser) (*models.TempUser, error) {
	err := r.db.Save(&user).Error
	if err != nil {
		return nil, err
	}
	return &user, nil
}
