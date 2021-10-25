package main

import (
	"aghilpadash/toDoGo/database"
	"aghilpadash/toDoGo/models"
	"fmt"
	"github.com/gofiber/fiber/v2"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func helloAghil(c *fiber.Ctx) error {
	return c.SendString("سلام عقیل")
}

func initDatabase() {
	var err error
	dsn := "host=localhost user=postgres password=admin dbname=postgres port=5432"
	database.DBConn, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Faild to connect to database!")

	}
	fmt.Println("databse connect!")
	database.DBConn.AutoMigrate(&models.Todo{})
	fmt.Println("Migrated")
}
func setupRoutes(app *fiber.App) {
	app.Get("/todos", models.GetTodos)
	app.Post("/todos", models.CreateTodo)
}
func main() {
	app := fiber.New()
	initDatabase()
	app.Get("/", helloAghil)
	app.Get("todos/:id", models.GetTodosById)
	setupRoutes(app)
	app.Listen(":8000")
}
