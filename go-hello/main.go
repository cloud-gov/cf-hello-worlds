package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "<h1>Hello World from Go,</h1>\n<p>You've requested: %s</p>\n", r.URL.Path)
	})

	http.ListenAndServe(":8080", nil)
}
