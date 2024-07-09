package user

import (
	"fmt"
	"igclone/models"

	"gorm.io/gorm"
)

type userRepositoryDB struct {
	db *gorm.DB
}

func NewUserRepositoryDB(db *gorm.DB) UserRepository {
	return &userRepositoryDB{db: db}
}

func (r *userRepositoryDB) CreateUser(user models.User) (*models.User, error) {
	// verify if the username is already taken
	status, err := r.verifyUsername(user.Username)
	if err != nil {
		return nil, err
	}

	if status {
		return nil, fmt.Errorf("username already taken")
	}

	result := r.db.Create(&user)
	if result.Error != nil {
		return nil, result.Error
	}

	return &user, nil
}

func (r *userRepositoryDB) GetByUsername(username string) (*models.User, error) {
	var user models.User
	if err := r.db.
		Preload("UserProfile").
		Joins("LEFT JOIN user_profiles ON user_profiles.user_id = users.id").
		Where("users.username = ? OR user_profiles.phone = ? OR user_profiles.email = ?", username, username, username).
		First(&user).Error; err != nil {
		return nil, err
	}

	return &user, nil
}

func (r *userRepositoryDB) GetById(userID uint) (*models.User, error) {
	var user models.User
	result := r.db.Where("id = ?", userID).Preload("UserProfile").First(&user)

	if result.Error != nil {
		return nil, result.Error
	}

	if user.ID == 0 {
		return nil, fmt.Errorf("user not found")
	}

	return &user, nil
}

func (r *userRepositoryDB) UpdateUsers(userId uint, fields map[string]interface{}) error {
	var user models.User
	result := r.db.Model(&user).Where("id = ?", userId).Updates(fields)

	if result.Error != nil {
		return result.Error
	}

	return nil
}

func (r *userRepositoryDB) UpdateUserProfiles(userId uint, fields map[string]interface{}) error {
	var userProfile models.UserProfile
	result := r.db.Model(&userProfile).Where("user_id = ?", userId).Updates(fields)

	if result.Error != nil {
		return result.Error
	}

	return nil
}

func (r *userRepositoryDB) DeleteUser(userId uint) error {
	var user models.User
	var userProfile models.UserProfile
	if err := r.db.Where("user_id = ?", userId).Delete(&userProfile).Error; err != nil {
		return err
	}

	if err := r.db.Where("id = ?", userId).Delete(&user).Error; err != nil {
		return err
	}

	return nil
}

func (r *userRepositoryDB) verifyUsername(username string) (bool, error) {
	var user models.User
	result := r.db.Where("username = ?", username).First(&user)

	if result.Error != nil {
		if result.Error == gorm.ErrRecordNotFound {
			return false, nil
		}
		return false, result.Error
	}

	return true, nil
}

// func (r UserRepositoryDB) GetAllClosedFriend(userid string) (models.User, []*models.User, error) {

// 	var user models.User

// 	// userID := uint(1)

// 	result := initializers.DB.Preload("Closed_friend").Find(&user, userid)
// 	if result.Error != nil {
// 		return user, nil, result.Error
// 	}

// 	var friends []*models.User
// 	initializers.DB.Model(&user).Association("Closed_friend").Find(&friends)

// 	// for _, friend := range friends {
// 	// 	fmt.Println(friend.Id)
// 	// }

// 	return user, friends, nil
// }

// func (r UserRepositoryDB) AddFollow(c *gin.Context) (bool, error) {
// 	var body struct {
// 		UserId   uint
// 		FollowId uint
// 	}

// 	c.Bind(&body)
// 	user := &models.User{Id: body.UserId}
// 	result := initializers.DB.Model(user).Update("Closed_friend", append(user.Closed_friend, &models.User{Id: body.FollowId}))

// 	if result.Error != nil {
// 		c.Status(400)
// 		return false, c.Err()
// 	}

// 	c.JSON(200, gin.H{
// 		"Id": user.Id,
// 	})

// 	return true, nil
// }

// func (r UserRepositoryDB) ProfileCreate() (models.Userprofile, error) {
// 	def_profile := models.Userprofile{Phone: "--", Image: "--", Description: "--"}
// 	return def_profile, nil
// }

// func (r UserRepositoryDB) ProfileEdit(c *gin.Context) (bool, error) {
// 	var body struct {
// 		Phone       string
// 		Image       string
// 		Description string
// 		UserId      uint
// 	}

// 	c.Bind(&body)

// 	var user models.User
// 	var profile models.Userprofile
// 	initializers.DB.First(&user, body.UserId)
// 	initializers.DB.First(&profile, user.User_profileID)
// 	initializers.DB.Model(&profile).Updates(map[string]interface{}{"Phone": body.Phone, "Image": body.Image, "Description": body.Description})
// 	// profile := models.Userprofile{Phone: body.Phone, Image: body.Image, Description: body.Description}

// 	return true, nil
// }

// func (r UserRepositoryDB) UserCreate(c *gin.Context) (bool, error) {
// 	var body struct {
// 		Name string
// 	}

// 	c.Bind(&body)
// 	def_profile, error := r.ProfileCreate()
// 	if error != nil {
// 		c.Status(400)
// 		return false, c.Err()
// 	}

// 	result_defprofile := initializers.DB.Create(&def_profile)
// 	if result_defprofile.Error != nil {
// 		c.Status(400)
// 		return false, c.Err()
// 	}

// 	user := models.User{Name: body.Name, User_profileID: def_profile.Id}

// 	result := initializers.DB.Create(&user)

// 	if result.Error != nil {
// 		c.Status(400)
// 		return false, c.Err()
// 	}
// 	c.JSON(200, gin.H{
// 		"user": user.Name,
// 	})
// 	return true, nil
// }

// func (r UserRepositoryDB) GetAll() ([]models.User, error) {
// 	users := []models.User{}

// 	result := r.db.Find(&users)
// 	if result.Error != nil {
// 		return nil, result.Error
// 	}

// 	return users, nil
// }
