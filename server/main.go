package main

import (
	controller_chat "igclone/controller/chat"
	controller_post "igclone/controller/post"
	controller_user "igclone/controller/user"
	"igclone/initializers"
	repository_chat "igclone/repository/chat"
	repository_post "igclone/repository/post"
	repository_user "igclone/repository/user"
	services_chat "igclone/services/chat"
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

	c_router := r.Group("api/c_router/")
	{
		ChatRepository := repository_chat.NewChatRepositoryDB(initializers.DB)
		ChatService := services_chat.NewChatService(ChatRepository)
		ChatController := controller_chat.NewChatController(ChatService)

		c_router.POST("/create_chat", func(c *gin.Context) {
			ChatController.ChatCreate(c)
		})

	}

	r.Run(":8000")
}
