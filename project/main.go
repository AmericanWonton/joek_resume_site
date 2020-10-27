package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"text/template"
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
	OAuthGmailService() //Initialize Gmail Services
}

//Handles the Index page
func index(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("Serving the index page.\n")

	err1 := template1.ExecuteTemplate(w, "index.gohtml", "nil")
	HandleError(w, err1)
}

//Handles the contact page
func contact(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("Serving the contact page.\n")
	//Here is our ViewData struct
	type ViewData struct {
		Host string `json:"Host"`
	}
	vd := ViewData{
		Host: port,
	}

	err1 := template1.ExecuteTemplate(w, "contact.gohtml", vd)
	HandleError(w, err1)
}

//Handles the gamedesign page
func gamedesign(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("Serving the gamedesign page.\n")

	err1 := template1.ExecuteTemplate(w, "gamedesign.gohtml", "nil")
	HandleError(w, err1)
}

//Handles the level design page
func leveldesign(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("Serving the leveldesign page.\n")

	err1 := template1.ExecuteTemplate(w, "leveldesign.gohtml", "nil")
	HandleError(w, err1)
}

//Handles the softwaredesign page
func softwaredesign(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("Serving the softwaredesign page.\n")

	err1 := template1.ExecuteTemplate(w, "softwaredesign.gohtml", "nil")
	HandleError(w, err1)
}

//Handles the test page
func test(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("Serving the test page.\n")
	fmt.Printf("URL Path: %v\n", r.URL.Path)

	err1 := template1.ExecuteTemplate(w, "test.gohtml", "nil")
	HandleError(w, err1)
}

//Handles the writing page
func writing(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("Serving the writing page.\n")

	err1 := template1.ExecuteTemplate(w, "writing.gohtml", "nil")
	HandleError(w, err1)
}

// Handle Errors passing templates
func HandleError(w http.ResponseWriter, err error) {
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		log.Fatalln(err)
	}
}

func main() {
	//Test email send
	fmt.Printf("DEBUG: We should be on this port: %v\n", port)
	http.Handle("/favicon.ico", http.NotFoundHandler()) //For missing FavIcon
	/* Handle passed templates */
	http.HandleFunc("/", index)
	http.HandleFunc("/contact", contact)
	http.HandleFunc("/gamedesign", gamedesign)
	http.HandleFunc("/leveldesign", leveldesign)
	http.HandleFunc("/softwaredesign", softwaredesign)
	http.HandleFunc("/writing", writing)
	/* HANDLE EMAIL SENDING */
	http.HandleFunc("/emailSubmit", emailSubmit)
	//Handles our passed files
	muxFiles := http.NewServeMux()
	muxFiles.Handle("/", http.FileServer(http.Dir(".")))
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatal(err)
	}
}
