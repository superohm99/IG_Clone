package models

import "gorm.io/gorm"

type Post struct {
	gorm.Model
	Id        uint `gorm:"primaryKey"`
	Image     string
	Title     string
	Like      Like      `gorm:"foreignKey:Id"`
	Comment   []Comment `gorm:"foreignKey:Id"`
	User      User      `gorm:"foreignKey:Id"`
	IsArchive bool
}
