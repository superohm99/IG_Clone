package main

import (
	"fmt"
	"igclone/initializers"
	repository_post "igclone/repository/post"
	repository_user "igclone/repository/user"
	services_post "igclone/services/post"
	services_user "igclone/services/user"

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
			UserRepository := repository_user.NewUserRepositoryDB(initializers.DB)
			UserService := services_user.NewUserService(UserRepository)

			users, err := UserService.Getusers()
			if err != nil {
				panic(err)
			}
			fmt.Println(users)
		})
	}

	p_router := r.Group("api/p_router/")
	{
		p_router.POST("/post_create", func(c *gin.Context) {
			PostRepository := repository_post.NewPostRepositoryDB(initializers.DB)
			PostService := services_post.NewPostService(PostRepository)
			PostService.PostCreate(c)
		})

	}

	r.Run(":8000")
}
