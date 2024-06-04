package initializers

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectToDB() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .")
	}

	dbUsername := os.Getenv("DB_USERNAME")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbName := os.Getenv("DB_NAME")

	dsn := fmt.Sprintf("%v:%v@tcp(%v:%v)/%s?parseTime=true", dbUsername, dbPassword, dbHost, dbPort, dbName)

	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{
		DryRun: false,
	})
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to database")

}
