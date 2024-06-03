package main

import (
	"fmt"
	controllers "igclone/controllers/user"
	"igclone/initializers"
	services "igclone/services/user"

	"github.com/gin-gonic/gin"
)

func init() {
	initializers.ConnectToDB()
}

func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.GET("/user", func(c *gin.Context) {
		userRepository := controllers.NewUserRepositoryDB(initializers.DB)
		UserService := services.NewCustomerService(userRepository)

		users, err := UserService.Getusers()
		if err != nil {
			panic(err)
		}

		fmt.Println(users)
		fmt.Println("TEST")
	})

	r.Run(":8000")
}
