package models

import "gorm.io/gorm"

type Reply struct {
	gorm.Model
	Id       uint `gorm:"primaryKey"`
	Like     Like
	User     User
	Content  string
	CreateAt string `gorm:"autoCreateTime"`
}
