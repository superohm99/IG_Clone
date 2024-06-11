package models

import "gorm.io/gorm"

type Note struct {
	gorm.Model
	Id   uint `gorm:"primaryKey"`
	Text string
	// User User `gorm:"foreignKey:Id"`
}
