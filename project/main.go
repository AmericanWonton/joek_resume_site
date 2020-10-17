package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"text/template"

	"github.com/gorilla/mux"
)

var port string //Port String

/* TEMPLATE DEFINITION BEGINNING */
var template1 *template.Template

func init() {
	//Initialize Port
	port = os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Printf("Defaulting to port %s \n", port)
	}
	//Initialize template
	template1 = template.Must(template.ParseGlob("./static/templates/*"))
	//Initalize Emails with Credentials
	intializecreds()
}

//Handles the Index page
func index(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("Serving the index page.\n")

	err1 := template1.ExecuteTemplate(w, "index.gohtml", nil)
	HandleError(w, err1)
}

//Handles the contact page
func contact(w http.ResponseWriter, r *http.Request) {

}

//Handles the gamedesign page
func gamedesign(w http.ResponseWriter, r *http.Request) {

}

//Handles the level design page
func leveldesign(w http.ResponseWriter, r *http.Request) {

}

//Handles the softwaredesign page
func softwaredesign(w http.ResponseWriter, r *http.Request) {

}

//Handles the test page
func test(w http.ResponseWriter, r *http.Request) {

}

//Handles the writing page
func writing(w http.ResponseWriter, r *http.Request) {

}

// Handle Errors passing templates
func HandleError(w http.ResponseWriter, err error) {
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		log.Fatalln(err)
	}
}

func handleRequests() {
	fmt.Printf("DEBUG: Handling Request...\n")

	myRouter := mux.NewRouter().StrictSlash(true)
	myRouter.Handle("/favicon.ico", http.NotFoundHandler()) //For missing FavIcon
	/* Handle passed templates */
	myRouter.HandleFunc("/", index)
	/*
		myRouter.HandleFunc("/", index)
		myRouter.HandleFunc("/", index)
		myRouter.HandleFunc("/", index)
		myRouter.HandleFunc("/", index)
		myRouter.HandleFunc("/", index)
		myRouter.HandleFunc("/", index)
		myRouter.HandleFunc("/", index)
	*/
	/* HANDLE EMAIL SENDING */
	myRouter.HandleFunc("/emailSubmit", emailSubmit).Methods("POST")

	log.Printf("listenting on port %s\n", port)
	if err := http.ListenAndServe(":"+port, myRouter); err != nil {
		log.Fatal(err)
	}

	//Serve our static files
	myRouter.Handle("/", http.FileServer(http.Dir("./static")))
	myRouter.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))
	log.Fatal(http.ListenAndServe(":"+port, myRouter))
}

func main() {
	handleRequests()
}
