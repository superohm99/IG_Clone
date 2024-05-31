package models

import "gorm.io/gorm"

type Comment struct {
	gorm.Model
	Id       uint `gorm:"primaryKey"`
	User     User
	Like     Like
	Reply    []Reply
	Content  string
	CreateAt string `gorm:"autoCreateTime"`
}
