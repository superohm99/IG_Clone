package models

import "gorm.io/gorm"

type Userprofile struct {
	gorm.Model
	Id            uint `gorm:"primaryKey"`
	Phone         string
	Email         string
	Image         string
	Description   string
	Closed_friend []*User `gorm:"foreignKey:Id"`
}
