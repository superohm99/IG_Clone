package models

import "gorm.io/gorm"

type Post struct {
	gorm.Model
	Id      uint `gorm:"primaryKey"`
	Image   string
	Title   string
	Like_Id uint

	Comment   []Comment `gorm:"foreignKey:Post_Id"`
	User_Id   uint
	IsArchive bool
}
