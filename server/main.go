package main

import (
	"fmt"
	"igclone/initializers"
	"igclone/models"
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
		p_router.POST("/post_create", func(c *gin.Context) {
			PostRepository := repository_post.NewPostRepositoryDB(initializers.DB)
			PostService := services_post.NewPostService(PostRepository)
			PostService.PostCreate(c)
		})
	}

	s_router := r.Group("api/s_router/")
	{
		s_router.POST("/story_create", func(c *gin.Context) {
			initializers.DB.AutoMigrate(&models.Story{})
			StoryRepository := repository_story.NewStoryRepositoryDB(initializers.DB)
			StoryService := services_story.NewStoryService(StoryRepository)
			StoryService.CreateStory(c)
		})

		s_router.GET("/stories", func(c *gin.Context) {
			StoryRepository := repository_story.NewStoryRepositoryDB(initializers.DB)
			StoryService := services_story.NewStoryService(StoryRepository)

			stories, err := StoryService.GetStories()
			if err != nil {
				panic(err)
			}
			fmt.Println(stories)
		})
	}

	r.Run(":8000")
}
