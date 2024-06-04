package models

import "gorm.io/gorm"

type Follow struct{
	gorm.Model
	Id		uint `gorm:"primaryKey"`
	User User
	Following []User
	Follower []User
}