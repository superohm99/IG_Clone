package main

import (
	"fmt"
	controller_post "igclone/controller/post"
	"igclone/initializers"
	repository_post "igclone/repository/post"
	repository_story "igclone/repository/story"
	repository_user "igclone/repository/user"
	services_post "igclone/services/post"
	services_story "igclone/services/story"
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
		PostRepository := repository_post.NewPostRepositoryDB(initializers.DB)
		PostService := services_post.NewPostService(PostRepository)
		PostController := controller_post.NewPostController(PostService)

		p_router.POST("/post_create", func(c *gin.Context) {
			PostController.PostCreate(c)
		})

		p_router.GET("/posts", func(c *gin.Context) {
			result, err := PostController.Posts()
			if err != nil {
				panic("error")
			}
			fmt.Println(result)
		})
	}

	s_router := r.Group("api/s_router/")
	{
		s_router.POST("/story_create", func(c *gin.Context) {
			StoryRepository := repository_story.NewStoryRepositoryDB(initializers.DB)
			StoryService := services_story.NewStoryService(StoryRepository)
			StoryService.AddStory(c)
		})

		s_router.GET("/stories/:userId", func(c *gin.Context) {
			userId := c.Param("userId")
			if userId == "" {
				c.JSON(400, gin.H{"error": "userId is required"})
				return
			}

			StoryRepository := repository_story.NewStoryRepositoryDB(initializers.DB)
			StoryService := services_story.NewStoryService(StoryRepository)

			stories, err := StoryService.GetStories(userId)
			if err != nil {
				panic(err)
			}

			c.JSON(200, gin.H{
				"stories": stories,
			})
		})
	}

	r.Run(":8000")
}
