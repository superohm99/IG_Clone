package models

type TempUser struct {
	ID       uint   `json:"id"`
	Username string `gorm:"uniqueIndex;size:50;not null" json:"username"`
	Name     string `gorm:"size:50" json:"name"`
	IsActive bool   `gorm:"default:true" json:"isActive"`
}