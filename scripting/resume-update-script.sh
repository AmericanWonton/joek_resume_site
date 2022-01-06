#!/usr/bin/env bash

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

echo $ADATE
echo $FULLFILENAME
echo $FULLFILEPATH


#Call Logger for debug print to start out with
AMESSAGE="We are starting the startupscript for today: $ADATE"
logger $AMESSAGE $FULLFILEPATH $ADATE

#Update some stuff
sudo apt update -y && sudo apt upgrade -y >> $FULLFILEPATH 2>&1
sudo apt-get update -y && sudo apt-get upgrade -y >> $FULLFILEPATH 2>&1
sudo apt autoremove -y >> $FULLFILEPATH 2>&1

#See if docker containers are running; if they are, stop and delete them
sudo docker kill resume-proj >> $FULLFILEPATH 2>&1
#sudo docker kill $(docker ps -q) >> FULLFILEPATH 2>&1
sudo docker rm -f $(docker ps -a -q) >> $FULLFILEPATH 2>&1
sudo docker rmi $(docker images -q) -f >> $FULLFILEPATH 2>&1

#Use Docker Credentials
sudo docker login --username americanwonton --password peanutdoggydoo111
#Pull all relevant docker images
sudo docker pull americanwonton/resumeproj:latest

#Run docker containers with their unique envioronment listings
#Careful sleep
sleep 5
#Run the Resume Docker Container
sudo docker run --name resume-proj \
-d -p 3000:80 americanwonton/resumeproj \
>> $FULLFILEPATH 2>&1
#Careful sleep
sleep 3