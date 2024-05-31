package models

import "gorm.io/gorm"

type Like struct {
	gorm.Model
	Id   uint `gorm:"primaryKey"`
	User []User
}
