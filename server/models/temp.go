package models

type TestPost struct {
	ID        uint
	CreatedAt string
	Content   string
	User      TempUser
	UserID    uint
}

type TestStory struct {
	ID        uint
	CreatedAt string
	Content   string
	User      TempUser
	UserID    uint
}