package main

import (
	controller_chat "igclone/controller/chat"
	controller_post "igclone/controller/post"
	controller_story "igclone/controller/story"
	controller_user "igclone/controller/user"
	"igclone/initializers"
	"igclone/middleware"
	repository_chat "igclone/repository/chat"
	repository_post "igclone/repository/post"
	repository_story "igclone/repository/story"
	repository_user "igclone/repository/user"
	services_chat "igclone/services/chat"
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
		UserRepository := repository_user.NewUserRepositoryDB(initializers.DB)
		UserService := services_user.NewUserService(UserRepository)
		UserController := controller_user.NewUserController(UserService)

		u_router.GET("/users", func(c *gin.Context) {
			UserController.GetUsers()
		})

		u_router.POST("/create_user", func(c *gin.Context) {
			UserController.CreateUser(c)
		})

		u_router.POST("/edit_profile", func(c *gin.Context) {
			UserController.EditProfile(c)
		})

		u_router.POST("/add_follow", func(c *gin.Context) {
			UserController.AddFollow(c)
		})

		u_router.POST("/signup", func(c *gin.Context) {
			UserController.SignUp(c)
		})

		u_router.POST("/signin", func(c *gin.Context) {
			UserController.SignIn(c)
		})

		u_router.POST("/signout", func(c *gin.Context) {
			UserController.SignOut(c)
		})
	}

	p_router := r.Group("api/p_router/")
	{
		PostRepository := repository_post.NewPostRepositoryDB(initializers.DB)
		PostService := services_post.NewPostService(PostRepository)
		PostController := controller_post.NewPostController(PostService)

		p_router.POST("/create_post", func(c *gin.Context) {
			PostController.PostCreate(c)
		})

		p_router.GET("/posts", func(c *gin.Context) {
			PostController.Posts()
		})

		p_router.POST("/send_comment", func(c *gin.Context) {
			PostController.CommentCreate(c)
		})
	}

	s_router := r.Group("api/s_router/")
	{
		StoryRepository := repository_story.NewStoryRepositoryDB(initializers.DB)
		StoryService := services_story.NewStoryService(StoryRepository)
		StoryController := controller_story.NewStoryController(StoryService)

		s_router.POST("/story_create", middleware.RequireAuth, func(c *gin.Context) {
			StoryController.AddStory(c)
		})

		s_router.GET("/stories/:userId", middleware.RequireAuth, func(c *gin.Context) {
			userId := c.Param("userId")
			StoryController.Stories(userId)
		})
	}

	c_router := r.Group("api/c_router/")
	{
		ChatRepository := repository_chat.NewChatRepositoryDB(initializers.DB)
		ChatService := services_chat.NewChatService(ChatRepository)
		ChatController := controller_chat.NewChatController(ChatService)

		c_router.POST("/create_chat", func(c *gin.Context) {
			ChatController.ChatCreate(c)
		})

		c_router.POST("send_message", func(c *gin.Context) {
			ChatController.MessageCreate(c)
		})

		c_router.GET("get_message/:chatId", func(c *gin.Context) {
			chatId := c.Param("chatId")
			ChatController.GetMessage(chatId)
		})

	}

	r.Run(":8000")
}
