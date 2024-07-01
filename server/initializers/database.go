package initializers

import (
	"context"
	"fmt"
	"os"
	"time"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type sqlLogger struct {
	logger.Interface
}

func (s sqlLogger) Trace(ctx context.Context, begin time.Time, fc func() (sql string, rowsAffected int64), err error) {
	sql, _ := fc()
	fmt.Printf("%v\n=======================\n", sql)
}

func ConnectToDB() *gorm.DB {
	err := godotenv.Load()
	if err != nil {
		panic(err)
	}

	dbUsername := os.Getenv("DB_USERNAME")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbName := os.Getenv("DB_NAME")

	dsn := fmt.Sprintf("%v:%v@tcp(%v:%v)/%s?parseTime=true", dbUsername, dbPassword, dbHost, dbPort, dbName)

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		Logger : &sqlLogger{},
		DryRun: false,
	})
	if err != nil {
		panic(err)
	}

	fmt.Println("Connected to database")

	return db
}
