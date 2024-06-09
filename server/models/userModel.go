package models

type User struct {
	// gorm.Model
	Id              uint `gorm:"primaryKey"`
	Name            string
	Username        string
	Password        string
	Avatar          string
	IsActive        bool
	RefreshToken    string
	IsPublicAccount bool
	User_profileID  uint

	Likes         []Like  `gorm:"foreignKey:User_Id"`
	Closed_friend []*User `gorm:"many2many:user_friends"`
	Posts         []Post  `gorm:"foreignKey:User_Id"`
	Comment       Comment `gorm:"foreignKey:User_Id"`
	Reply         Reply   `gorm:"foreignKey:User_Id"`
}
