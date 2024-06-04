package models

import "gorm.io/gorm"

type Reply struct {
	gorm.Model
	Id      uint `gorm:"primaryKey"`
	Like    Like `gorm:"foreignKey:Id"`
	User    User `gorm:"foreignKey:Id"`
	Content string
}
