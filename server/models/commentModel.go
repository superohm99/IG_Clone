package models

type Comment struct {
	Id      uint    `gorm:"primaryKey"`
	Reply   []Reply `gorm:"foreignKey:CommentId"`
	User_Id uint
	Post_Id uint `gorm:"default:null"`
	Reel_Id uint `gorm:"default:null"`
	Content string
}
