package main

import (
	"fmt"
	"log"
	"filepath"
	"os"
	"net/http"
	"text/template"

	"github.com/gorilla/mux"
)

var port string //Port String

/* TEMPLATE DEFINITION BEGINNING */
var template1 *template.Template

func init() {
	//Initialize Port
	port = "80"
	//Initialize template
	template1 = template.Must(template.ParseGlob("./static/templates/*"))
	//Initalize Emails with Credentials
	intializecreds()
	OAuthGmailService() //Initialize Gmail Services
}

func logWriter(logMessage string) {
	//Logging info

	wd, _ := os.Getwd()
	logDir := filepath.Join(wd, "logging", "resumeapp.txt")
	logFile, err := os.OpenFile(logDir, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0777)

	defer logFile.Close()

	if err != nil {
		fmt.Println("Failed opening log file")
	}

	log.SetOutput(logFile)

	log.Println(logMessage)
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

func handleRequests() {
	fmt.Printf("DEBUG: Handling Request...\n")

	myRouter := mux.NewRouter().StrictSlash(true)
	myRouter.Handle("/favicon.ico", http.NotFoundHandler()) //For missing FavIcon
	/* Handle passed templates */
	myRouter.HandleFunc("/test", test)
	myRouter.HandleFunc("/", index)
	myRouter.HandleFunc("/contact", contact)
	myRouter.HandleFunc("/gamedesign", gamedesign)
	myRouter.HandleFunc("/leveldesign", leveldesign)
	myRouter.HandleFunc("/softwaredesign", softwaredesign)
	myRouter.HandleFunc("/writing", writing)
	/* HANDLE EMAIL SENDING */
	myRouter.HandleFunc("/emailSubmit", emailSubmit).Methods("POST")

	log.Printf("listenting on port %s\n", port)

	//Serve our static files
	myRouter.Handle("/", http.FileServer(http.Dir("./static")))
	myRouter.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))
	log.Fatal(http.ListenAndServe(":"+port, myRouter))
}

func main() {
	handleRequests()
}

/* This gets our creds */
func intializecreds() {
	
	//Check to see if ENV Creds are available first
	_, ok := os.LookupEnv("AW_CLIENTID")
	if !ok {
		message := "This ENV Variable is not present: " + "AW_CLIENTID"
		panic(message)
	}

	_, ok2 := os.LookupEnv("AW_CLIENT_SECRET")
	if !ok2 {
		message := "This ENV Variable is not present: " + "AW_CLIENT_SECRET"
		panic(message)
	}

	_, ok3 := os.LookupEnv("AW_ACCESS_TOKEN")
	if !ok3 {
		message := "This ENV Variable is not present: " + "AW_ACCESS_TOKEN"
		panic(message)
	}

	_, ok4 := os.LookupEnv("AW_REFRESHTOKEN")
	if !ok4 {
		message := "This ENV Variable is not present: " + "AW_REFRESHTOKEN"
		panic(message)
	}

	theClientID = os.Getenv("AW_CLIENTID")
	theClientSecret = os.Getenv("AW_CLIENT_SECRET")
	theAccessToken = os.Getenv("AW_ACCESS_TOKEN")
	theRefreshToken = os.Getenv("AW_REFRESHTOKEN")
	fmt.Println("DEBUG: Email Credentials Initialized")
}