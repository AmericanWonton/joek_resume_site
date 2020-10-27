package main

import (
	"bufio"
	"context"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
	"google.golang.org/api/gmail/v1"
	"google.golang.org/api/option"
)

var GmailService *gmail.Service //This gets initialized in init

var theClientID string
var theClientSecret string
var theAccessToken string
var theRefreshToken string

//Declare DataType from Ajax
type UserEmail struct {
	FName     string `json:"FName"`
	LName     string `json:"LName"`
	Email     string `json:"Email"`
	Subject   string `json:"Subject"`
	Message   string `json:"Message"`
	Website   string `json:"Website"`
	AreaCode  string `json:"AreaCode"`
	PhoneNum1 string `json:"PhoneNum1"`
	PhoneNum2 string `json:"PhoneNum2"`
	PhoneNum3 string `json:"PhoneNum3"`
}

//Used to handle emails submitted to us
func emailSubmit(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		fmt.Println("DEBUG: We are in emailSubmit.")
		//Collect JSON from Postman or wherever
		//Get the byte slice from the request body ajax
		bs, err := ioutil.ReadAll(r.Body)
		if err != nil {
			fmt.Println(err)
		}
		//Unmarshal Data
		var emailPosted UserEmail
		json.Unmarshal(bs, &emailPosted)
		//Get values
		goodEmail, theErr := signUpUserEmail(emailPosted)
		//Compile Response accordingly
		if goodEmail == true {
			type successMSG struct {
				Message     string `json:"Message"`
				SuccessNum  int    `json:"SuccessNum"`
				RedirectURL string `json:"RedirectURL"`
			}
			msgSuccess := successMSG{
				Message:     "Email Sent! I hope to get back to you soon!",
				SuccessNum:  0,
				RedirectURL: "http://" + "localhost:" + port,
			}

			theJSONMessage, err := json.Marshal(msgSuccess)
			if err != nil {
				fmt.Println(err)
			}
			fmt.Println("Email successfully submitted.")
			fmt.Fprint(w, string(theJSONMessage))
		} else {
			type successMSG struct {
				Message     string `json:"Message"`
				SuccessNum  int    `json:"SuccessNum"`
				RedirectURL string `json:"RedirectURL"`
			}
			msgSuccess := successMSG{
				Message:     "Email issue! Please review information sent\n" + theErr.Error(),
				SuccessNum:  1,
				RedirectURL: "http://" + "localhost:" + port,
			}

			theJSONMessage, err := json.Marshal(msgSuccess)
			if err != nil {
				fmt.Println(err)
			}
			fmt.Fprint(w, string(theJSONMessage))
		}
	}
}

//Used to handle emails submitted to us
/*
func emailSubmit() {
	if r.Method == http.MethodPost {
		//Collect JSON from Postman or wherever
		//Get the byte slice from the request body ajax
		bs, err := ioutil.ReadAll(r.Body)
		if err != nil {
			fmt.Println(err)
		}
		//Unmarshal Data
		var emailPosted UserEmail
		json.Unmarshal(bs, &emailPosted)
		//Get values
		goodEmail := signUpUserEmail(emailPosted)
		//Compile Response accordingly
		if goodEmail == true {
			type successMSG struct {
				Message     string `json:"Message"`
				SuccessNum  int    `json:"SuccessNum"`
				RedirectURL string `json:"RedirectURL"`
			}
			msgSuccess := successMSG{
				Message:     "Email Sent!",
				SuccessNum:  0,
				RedirectURL: "http://" + "localhost:" + port,
			}

			theJSONMessage, err := json.Marshal(msgSuccess)
			if err != nil {
				fmt.Println(err)
			}
			fmt.Println("Email successfully submitted.")
			fmt.Fprint(w, string(theJSONMessage))
		} else {
			type successMSG struct {
				Message     string `json:"Message"`
				SuccessNum  int    `json:"SuccessNum"`
				RedirectURL string `json:"RedirectURL"`
			}
			msgSuccess := successMSG{
				Message:     "Email issue! Please review information sent",
				SuccessNum:  1,
				RedirectURL: "http://" + "localhost:" + port,
			}

			theJSONMessage, err := json.Marshal(msgSuccess)
			if err != nil {
				fmt.Println(err)
			}
			fmt.Fprint(w, string(theJSONMessage))
		}
	}
	http.Redirect(w, r, "/", http.StatusSeeOther)
}
*/
//Initialized at begininning of program
func OAuthGmailService() {
	config := oauth2.Config{
		ClientID:     theClientID,
		ClientSecret: theClientSecret,
		Endpoint:     google.Endpoint,
		RedirectURL:  "http://" + "localhost:" + port,
	}

	token := oauth2.Token{
		AccessToken:  theAccessToken,
		RefreshToken: theRefreshToken,
		TokenType:    "Bearer",
		Expiry:       time.Now(),
	}

	var tokenSource = config.TokenSource(context.Background(), &token)

	srv, err := gmail.NewService(context.Background(), option.WithTokenSource(tokenSource))
	if err != nil {
		errMsg := "Unable to retrieve Gmail client: " + err.Error()
		fmt.Println(errMsg)
		log.Println(errMsg)
	}

	GmailService = srv
	if GmailService != nil {
		succMsg := "Email service is initialized"
		fmt.Println(succMsg)
		//log.Println(succMsg)
	}
}

//Attempts to send an email to User
func signUpUserEmail(theEmail UserEmail) (bool, error) {
	fmt.Println("DEBUG: Sending email in signUpUpserEmail")
	goodEmailSend := true
	theMessage := "Recieved a message from " + theEmail.FName + " " + theEmail.LName +
		" at " + theEmail.Email + ":\n\n" + theEmail.Message + "\n\n" +
		"Phone Num is: " + theEmail.AreaCode + "-" + theEmail.PhoneNum1 + "-" +
		theEmail.PhoneNum2 + "-" + theEmail.PhoneNum3 + "\n" +
		"Email: " + theEmail.Email
	theSubject := theEmail.Subject

	var message gmail.Message

	emailTo := "To: " + "jbkeller0303@gmail.com" + "\r\n"
	subject := "Subject: " + theSubject + "\n"
	mime := "MIME-version: 1.0;\nContent-Type: text/plain; charset=\"UTF-8\";\n\n"
	msg := []byte(emailTo + subject + mime + "\n" + theMessage)

	message.Raw = base64.URLEncoding.EncodeToString(msg)

	// Send the message
	fmt.Println("DEBUG: About to send this Gmail...")
	_, err := GmailService.Users.Messages.Send("me", &message).Do()
	if err != nil {
		errMsg := "Error sending this message to the User: " + err.Error()
		fmt.Println(errMsg)
		log.Println(errMsg)
		goodEmailSend = false
	}

	return goodEmailSend, err
}

func intializecreds() {
	currEnv, _ := os.Getwd()
	theFile := filepath.Join(currEnv, "static", "creds", "creds.txt")
	file, err := os.Open(theFile)

	if err != nil {
		fmt.Printf("Trouble opening file for Gmail Credentials: %v\n", err.Error())
	}

	scanner := bufio.NewScanner(file)

	scanner.Split(bufio.ScanLines)
	var text []string

	for scanner.Scan() {
		text = append(text, scanner.Text())
	}

	file.Close()

	theClientID = text[0]
	theClientSecret = text[1]
	theAccessToken = text[2]
	theRefreshToken = text[3]
	fmt.Println("DEBUG: Email Credentials Initialized")
}
