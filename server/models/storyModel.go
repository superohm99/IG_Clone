package models

import "gorm.io/gorm"

type Story struct {
	gorm.Model
	Id           uint `gorm:"primaryKey"`
	Image        string
	Like         Like
	User         User
	Reply        []Reply
	IsPrivate    bool
	CreateAt     string `gorm:"autoCreateTime"`
	IsDeleted    bool
}