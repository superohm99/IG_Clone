package middleware

import (
	"net/http"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

// func RequireAuth(c *gin.Context) {
// 	// Get the cookie req
// 	tokenString, err := c.Cookie("Authorization")

// 	if err != nil {
// 		c.AbortWithStatus(http.StatusUnauthorized)
// 	}

// 	// Decode/Vaidate it

// 	// Parse takes the token string and a function for looking up the key. The latter is especially
// 	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
// 		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
// 			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
// 		}

// 		return []byte(os.Getenv("SECRET_KEY")), nil
// 	})

// 	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
// 		// Check the exp
// 		if float64(time.Now().Unix()) > claims["exp"].(float64) {
// 			c.AbortWithStatus(http.StatusUnauthorized)
// 		}

// 		// Find the user with token sub
// 		user := models.User{}
// 		if err := initializers.DB.Where("id = ?", claims["sub"]).First(&user).Error; err != nil {
// 			c.AbortWithStatus(http.StatusUnauthorized)
// 		}

// 		// log.Println(user)

// 		// Attach to req
// 		c.Set("user", user)

// 		// Continue
// 		c.Next()
// 	} else {
// 		c.AbortWithStatus(http.StatusUnauthorized)
// 	}
// }

func RequireAuth() gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Authorization header is required"})
			c.Abort()
			return
		}

		parts := strings.Split(authHeader, " ")
		if len(parts) != 2 || parts[0] != "Bearer" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Authorization header format must be Bearer {token}"})
			c.Abort()
			return
		}

		tokenString := parts[1]
		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			return []byte(os.Getenv("SECRET")), nil
		})

		if err != nil {
			c.JSON(http.StatusForbidden, gin.H{"error": "Forbidden"})
			c.Abort()
			return
		}

		claims, ok := token.Claims.(jwt.MapClaims)
		if !ok || !token.Valid {
			c.JSON(http.StatusForbidden, gin.H{"error": "Forbidden"})
			c.Abort()
			return
		}

		userID, ok := claims["sub"].(string)
		if !ok {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			c.Abort()
			return
		}

		c.Set("user_id", userID)
		c.Next()
	}
}
