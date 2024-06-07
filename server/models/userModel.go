package models

type User struct {
	// gorm.Model
	Id              uint `gorm:"primaryKey"`
	Name            string
	Password        string
	Avatar          string
	IsActive        bool
	RefreshToken    string
	IsPublicAccount bool
	User_profileID  uint
	Closed_friend   []*User `gorm:"many2many:user_friends"`
}
