package models

import "gorm.io/gorm"

type Message struct {
	gorm.Model
	Id		uint `gorm:"primaryKey"`
	Text	string 
	CreatedAt	string `gorm:"autoCreateTime"`
	UserID	uint
	User	User `gorm:"foreignKey:UserID"`
}