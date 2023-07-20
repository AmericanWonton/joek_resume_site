# Start from the latest golang base image
FROM golang:alpine AS builder

# Add Maintainer Info
LABEL maintainer="Joseph Keller <jbkeller@gmail.com>"
#Add environment variables for use
ENV AW_CLIENTID=$AW_CLIENTID
ENV AW_CLIENT_SECRET=$AW_CLIENT_SECRET
ENV AW_ACCESS_TOKEN=$AW_ACCESS_TOKEN
ENV AW_REFRESHTOKEN=$AW_REFRESHTOKEN
#This will keep directory and systems updated
RUN apk update
RUN apk upgrade
#install sudo for script/debug usage
RUN apk add sudo
#This is for debugging and stuff
RUN apk add nano
#MakeDirectory
RUN mkdir /app
ADD . /app
WORKDIR /app
#Build App
RUN CGO_ENABLED=0 GOOS=linux go build -o main ./...

#Make the Scratch Production Image
FROM alpine:latest AS production
#Copy the contents of the builder stage into this app directory
COPY --from=builder /app .
#Expose port 80
EXPOSE 8080
#Run the executable,(which is whatever name you gave it in the previous step)
CMD ["./main"]