package main

import (
	"igclone/models"
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .")
	}

	dbUsername := os.Getenv("DB_USERNAME")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbName := os.Getenv("DB_NAME")

	dsn := dbUsername + ":" + dbPassword + "@tcp(" + dbHost + ":" + dbPort + ")/" + dbName + "?parseTime=true"

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	db.AutoMigrate(&models.User{})
	db.AutoMigrate(&models.UserProfile{})
	// db.AutoMigrate(&models.Post{})
	// db.AutoMigrate(&models.Chat{})
	// db.AutoMigrate(&models.Comment{})
	// db.AutoMigrate(&models.Like{})
	// db.AutoMigrate(&models.Follow{})
	// db.AutoMigrate(&models.Reply{})
	// db.AutoMigrate(&models.Story{})
	// db.AutoMigrate(&models.Note{})
	// db.AutoMigrate(&models.Message{})
	// db.AutoMigrate(&models.Reel{})

	// db.Migrator().DropTable(&models.User{})
	// db.Migrator().DropTable(&models.UserProfile{})
	// return
}
