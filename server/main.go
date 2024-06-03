package main

import (
	"fmt"
	controllers "igclone/controllers/user"
	"igclone/initializers"

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

	r.POST("/user", func(c *gin.Context) {
		userRepository := controllers.NewUserRepositoryDB(initializers.DB)

		_ = userRepository

		res, err := userRepository.Create(c)
		if err != nil {
			panic(err)
		}
		fmt.Println(res)
	})

	r.Run(":8000")
}
