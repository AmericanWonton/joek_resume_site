# Start from the latest golang base image
FROM golang:alpine AS builder
#Need to be root User to do some this stuff
USER root
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
#RUN apk add bash
#RUN apk add util-linux pciutils usbutils coreutils binutils findutils grep
#RUN apk add bash bash-doc bash-completion
#RUN apk add build-base gcc abuild binutils binutils-doc gcc-doc
#install sudo for script use
RUN apk add sudo
#This is for debugging and stuff
RUN apk add nano
#MakeDirectory(Make sure appropriate secret files are here too)
RUN mkdir /app
ADD . /app
WORKDIR /app
#Add in env Variables from our test file
#RUN sudo ./env-variable-add.sh
#RUN export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
#TEST
#RUN export -p
#Run Tests
RUN CGO_ENABLED=0 GOOS=linux go test -v
#Build Project
RUN CGO_ENABLED=0 GOOS=linux go build -o main ./...

#Make the Scratch Production Image
FROM alpine:latest AS production
#Copy the contents of the builder stage into this app directory
COPY --from=builder /app .
#Expose port 80
EXPOSE 80
#Run the executable,(which is whatever name you gave it in the previous step)
#CMD ["./main"]