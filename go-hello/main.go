package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "<h1>Hello, World from Go!</h1>\n")
	})

	http.ListenAndServe(":"+os.Getenv("PORT"), nil)
}
