#!/bin/bash

#This writes any output into a logfile in this same directory
function logger ()
{
    #Check to see if logger file has been created for today
    if [ -f "$FULLFILEPATH" ]; then
        #File exists, we can write here
        echo "File exists"
    else
        #File does NOT exist, create it
        echo "File does not exist, creating it rn..."
        sudo touch $FULLFILEPATH
    fi

    echo -e "$ADATE -- $AMESSAGE\n" >> $FULLFILEPATH
    
    return 0
}

#Get Current Date as a format for files
date=$(date '+%Y-%m-%d')
ADATE=$date
FULLFILENAME="startupLogger-$ADATE.log"
FULLFILEPATH="/root/startUpCronJob/logging/$FULLFILENAME"

#Call logger to create the file if it dosen't exist
AMESSAGE="We are starting the startupscript for today: $ADATE"
logger $AMESSAGE $FULLFILEPATH $ADATE

echo $ADATE | tee -a $FULLFILEPATH
echo $FULLFILENAME | tee -a $FULLFILEPATH
echo $FULLFILEPATH | tee -a $FULLFILEPATH

AW_DOCKER_UNAME="americanwonton"
AW_DOCKER_PWORD="peanutdoggydoo111"

#Update some stuff
sudo apt update -y && sudo apt upgrade -y | tee -a $FULLFILEPATH
sudo apt-get update -y && sudo apt-get upgrade -y | tee -a $FULLFILEPATH
sudo apt autoremove -y | tee -a $FULLFILEPATH

#See if docker containers are running; if they are, stop and delete them
sudo docker kill resume-proj | tee -a $FULLFILEPATH
#sudo docker kill $(docker ps -q) >> FULLFILEPATH 2>&1
sudo docker rm -f $(docker ps -a -q) | tee -a $FULLFILEPATH
sudo docker rmi $(docker images -q) -f | tee -a $FULLFILEPATH

#Use Docker Credentials
sudo docker login --username $AW_DOCKER_UNAME --password $AW_DOCKER_PWORD | tee -a $FULLFILEPATH
#Pull all relevant docker images
sudo docker pull americanwonton/resumeproj:latest | tee -a $FULLFILEPATH

#Run docker containers with their unique envioronment listings
#Careful sleep
sleep 5
#Run the Resume Docker Container
sudo docker run --env-file /root/startUpCronJob/env-creds.list \
--name resume-proj \
-d -p 3000:80 americanwonton/resumeproj \
| tee -a $FULLFILEPATH
#Careful sleep
sleep 3 | tee -a $FULLFILEPATH