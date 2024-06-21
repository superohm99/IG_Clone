package models

type Like struct {
	Id       uint `gorm:"primaryKey"`
	Post_Id  uint
	Reply_Id uint
	Story_Id uint
	Reel_Id  uint
	User_Id  uint
	// User    User
}
