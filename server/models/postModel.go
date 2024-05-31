package models

import "gorm.io/gorm"

type Post struct {
	gorm.Model
	Id        uint `gorm:"primaryKey"`
	Image     string
	Title     string
	Like      Like
	Comment   []Comment
	User      User
	CreateAt  string `gorm:"autoCreateTime"`
	IsArchive bool
}
