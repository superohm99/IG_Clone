package models

type User struct {
	// gorm.Model
	ID              uint
	Username        string
	Password        string
	IsActive        bool    `gorm:"default:true"`
	Token           *string `gorm:"default:null"`
	IsPublicAccount bool    `gorm:"default:false"`

	UserProfile UserProfile
}
