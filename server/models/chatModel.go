package models

import "gorm.io/gorm"

type Chat struct {
	gorm.Model
	Id uint `gorm:"primaryKey"`
	Messages []Message `gorm:"foreignKey:ChatID"`
	Members []User `gorm:"many2many:chat_members;"`
}