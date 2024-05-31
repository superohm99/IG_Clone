package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Id              uint `gorm:"primaryKey"`
	Name            string
	Password        string
	Avatar          string
	IsActive        bool
	RefreshToken    string
	User_profile    []Userprofile
	IsPublicAccount bool
}
