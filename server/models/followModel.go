package models

import "gorm.io/gorm"

type Follow struct {
	gorm.Model
	Id        uint   `gorm:"primaryKey"`
	User      User   `gorm:"foreignKey:Id"`
	Following []User `gorm:"foreignKey:Id"`
	Follower  []User `gorm:"foreignKey:Id"`
}
