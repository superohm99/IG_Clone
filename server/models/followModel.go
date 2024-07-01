package models

type Follow struct {
	ID         uint
	UserID     uint
	FollowerID uint
	Status     string `gorm:"default:'PENDING'"`
	User       TempUser
	Follower   TempUser
}