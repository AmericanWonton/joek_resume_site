package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

var port string //Port String

func init() {
	//Initialize Port
	port = os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Printf("Defaulting to port %s \n", port)
	}
	//Initalize Emails with Credentials
	intializecreds()
}

func handleRequests() {
	fmt.Printf("DEBUG: Handling Request...\n")

	myRouter := mux.NewRouter().StrictSlash(true)
	myRouter.Handle("/favicon.ico", http.NotFoundHandler()) //For missing FavIcon
	/* HANDLE EMAIL SENDING */
	myRouter.HandleFunc("/emailSubmit", emailSubmit).Methods("POST")

	log.Printf("listenting on port %s\n", port)
	if err := http.ListenAndServe(":"+port, myRouter); err != nil {
		log.Fatal(err)
	}

	/* serve all files */
	http.Handle("/", http.FileServer(http.Dir(".")))
}

func main() {
	handleRequests()
}
