package main

import (
	"fmt"
	"igclone/initializers"
	repository "igclone/repository/user"
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
			UserRepository := repository.NewUserRepositoryDB(initializers.DB)
			UserService := services.NewUserService(UserRepository)

			users, err := UserService.Getusers()
			if err != nil {
				panic(err)
			}
			fmt.Println(users)
		})
	}

	// a_router := r.Group("api/a_router/")
	// {
	// 	a_router.POST()
	// }

	r.Run(":8000")
}
