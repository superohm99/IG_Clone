package models

import "gorm.io/gorm"

type Chat struct {
	gorm.Model
	Id       uint      `gorm:"primaryKey"`
	Messages []Message `gorm:"foreignKey:Id"`
	Members  []User    `gorm:"foreignKey:Id"`
}
