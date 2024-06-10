package models

import "gorm.io/gorm"

type Message struct {
	gorm.Model
	Id      uint `gorm:"primaryKey"`
	Chat_Id uint
	Text    string
	User_Id uint
	// User   User `gorm:"foreignKey:Id"`
}
