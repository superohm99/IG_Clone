package models

import "gorm.io/gorm"

type Message struct {
	gorm.Model
	Id     uint `gorm:"primaryKey"`
	ChatId uint
	Text   string
	UserId uint
}
