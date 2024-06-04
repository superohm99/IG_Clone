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
	u_router := r.Group("api/u_router/")
	{
		u_router.GET("/users", func(c *gin.Context) {
			UserRepository := controllers.NewUserRepositoryDB(initializers.DB)
			UserService := services.NewCustomerService(UserRepository)

			users, err := UserService.Getusers()
			if err != nil {
				panic(err)
			}
			fmt.Println(users)
		})

	}

	r.Run(":8000")
}
