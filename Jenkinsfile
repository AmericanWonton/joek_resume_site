def gv //Need this to declare our groovy script into a variable under 'init'
def dockerapp //Needed for our docker build

pipeline {
    //agent any //Run this on ANY Jenkins Server
    agent any
    tools {
        //Docker Tooling
        'org.jenkinsci.plugins.docker.commons.tools.DockerTool' '18.09'
    }
    //This is used to define environmental variables; they can be used in any stage!
    environment {
        NEW_VERSION = '1.1' //Test variable, you would get this from your code usually
        /* The 'credentails' method finds credentials stored in jenkins to pass in this file.
        It's in the 'credentials binding' plug-in you need installed. It takes the ID you made as refference.
        This is just one way of doing it...you can also use the 'withCredentials()' wrapper,
        (see the deploy section)  */
        DOCKER_CREDENTIALS = credentials('dockerLogin')
        GIT_LOGIN = credentials('gitLogin')
        SERVER_SSH_CREDS = credentials('basic-SSH')
        //Used for app creds
        AW_CLIENTID = credentials('AW_CLIENTID')
        AW_CLIENT_SECRET = credentials('AW_CLIENT_SECRET')
        AW_ACCESS_TOKEN = credentials('AW_ACCESS_TOKEN')
        AW_REFRESHTOKEN = credentials('AW_REFRESHTOKEN')
        //Used for Resume SSH
        RESUME_IP_ADDRESS = credentials('resume-server-ip-address')
        RESUME_SERVER_PRIVATE = credentials('private-resume-key')
        RESUME_SECRET_FILE = credentials('resume_secret_file')
        RESUME_ENV_FILE = credentials('resume_env_file')
        //RESUME_PEM = credentials('resume-private-key')
        GO111MODULE = 'on' //Used from Go Plugin; kind of messing up go modules
        CGO_ENABLED=0
        // Ensure the desired Go version is installed
        def root = tool type: 'go', name: 'Go-Installation-1.16.12'
    }

    //Used to deploy application with certain paramters given
    parameters{
        string(name: 'TEST_PARAMETER', defaultValue: '', description: "This is for running this application with THIS parameter")
        choice(name: "TEST_CHOICE_PARAMETER", choices: ['choice1', 'choice2'], description: 'This is an example choice parameter ')
        /* Use these variables for expediancy running these jobs */
        booleanParam(name: 'executeTests', defaultValue: false, description: 'Test description')
        booleanParam(name: 'runinit', defaultValue: true, description: 'Run initialization')
        booleanParam(name: 'runBuild', defaultValue: false, description: 'Run build')
        booleanParam(name: 'runDeploy', defaultValue: false, description: 'Run Deploy')
        booleanParam(name: 'runGroovy', defaultValue: true, description: 'Run Groovy')
    }

    //Things to execute in Jenkins
    stages{
        stage("init"){
            when {
                expression {
                    params.runinit
                }
            }
            steps{
                echo 'Params have been initialized...'
                echo 'Begining Dev Deployment...'
                /* This is how we load our groovy scripts into Jenkins */
                script {
                    gv = load "./jenkinsscripts/script.groovy"
                }
            }
        }
        stage ("whatBranch"){
            when {
                branch "dev"
            }
            steps {
                echo 'You are in dev'
            }
        }
        stage ("whatBranch2"){
            when {
                branch "master"
            }
            steps{
                echo 'You are in master'
            }
        }
        stage("test"){
            /* This is an example when clause; this works when the expressions defined inside are true */
            when {
                expression {
                    params.executeTests
                }
            }
            steps{
                echo "Golang App starting Testing"
                script {
                    withEnv(["GOROOT=${root}", "PATH+GO=${root}/bin"]) {
                        sh 'go version'
                        //sh 'go env'
                        dir('testing'){
                            def exists = fileExists 'go.mod'

                            if (exists) {
                                echo 'Deleting existing go.mod file'
                                sh 'rm -f go.mod'
                                //sh 'go mod init'
                                sh 'go mod init github.com/AmericanWonton/joek_resume_site'
                                sh 'go mod tidy'
                                sh 'go mod vendor'
                                sh 'go build'
                            } else {
                                echo 'Creating new go.mod file'
                                //sh 'go mod init'
                                sh 'go mod init github.com/AmericanWonton/joek_resume_site'
                                sh 'go mod tidy'
                                sh 'go mod vendor'
                                sh 'go build'
                            }
                        }
                        dir('testing'){
                            //This is binary testing
                            sh 'go test -v'
                            echo 'Binary testing complete. Now running in Docker container'
                            //This is docker testing
                            //Login into my docker account, pass creds
                            sh('sudo docker login --username $DOCKER_CREDENTIALS_USR --password $DOCKER_CREDENTIALS_PSW')
                            sh ('sudo make dockerbuildandpushtest')
                            echo 'Docker testing complete'
                        }
                    }
                }
            }
            post{
                always{
                    echo "Finished testing golang app"
                }
                success{
                    echo "Golang App Tested Successfully"
                }
                failure {
                    echo "Golang App Failed testing"
                }
            }
        }
        stage("build"){
            when {
                expression {
                    params.runBuild
                }
            }
            steps{
                echo "building the golang applicaiton"
                /* USE DOUBLE QUOTES SO IT'S COMPATIBLE WITH GROOVY! */
                script {
                    withEnv(["GOROOT=${root}", "PATH+GO=${root}/bin"]){
                        dir ('project') {
                            echo 'building go project...'
                            sh 'make gobuild'
                            echo 'go project built successfully. Building with Docker...'
                            sh 'sudo make dockerbuild'
                            echo 'Successfully built dockerbuild'
                        }
                    }
                }
            }
            post{
                always{
                    echo "Finished building golang application in docker"
                }
                success{
                    echo "Golang app built successfully"
                }
                failure{
                    echo "Golang app build un-successfully"
                }
            }
        }
        stage("deploy"){
            /* This would be a good place to pass credentials to a server, for building on a dev machine, 
            or SSH into a dev machine */
            when {
                expression {
                    params.runDeploy
                }
            }
            steps{
                echo "Deploying Golang App"
                echo "Deploying vesrion ${params.TEST_PARAMETER}"
                //Start by building and pushing to DockerHub
                script {
                    withEnv(["GOROOT=${root}", "PATH+GO=${root}/bin"]){
                        dir ('project') {
                            //Login into my docker account, pass creds
                            sh('sudo docker login --username $DOCKER_CREDENTIALS_USR --password $DOCKER_CREDENTIALS_PSW')
                            //Build and push built image to Dockerhub
                            sh 'sudo make dockerbuildandpush'
                            echo 'Successfully built dockerbuild'
                        }
                    }
                }
            }
            post{
                always{
                    echo "Finished Deploying Golang App"
                }
                success{
                    echo "Golang App Succeeded deploying...updating Resume Server with new Docker container"
                    script {
                        echo 'Attempting to run our script on server...'
                        //Add env file
                        sh 'sudo scp -i $RESUME_SECRET_FILE_PSW $RESUME_ENV_FILE_PSW root@$RESUME_IP_ADDRESS_PSW:~/startUpCronJob'
                        //Give env file the appropriate permissions
                        sh 'sudo ssh -t -i $RESUME_SECRET_FILE_PSW root@$RESUME_IP_ADDRESS_PSW \'sudo chmod 777 ~/startUpCronJob/env-creds.list\''
                        //Run Script
                        sh 'sudo ssh -t -i $RESUME_SECRET_FILE_PSW root@$RESUME_IP_ADDRESS_PSW \'~/startUpCronJob/resume-update-script.sh\''
                    }
                }
                failure{
                    echo "Golang App failed deploying"
                }
            }
        }
        stage("groovy-test"){
            options {
                timeout(time: 30, unit: 'SECONDS') //Timeout for this stage
            }
            when {
                expression {
                    params.runGroovy
                }
            }
            steps{
                /* Example using scripts within Jenkins */
                script {
                    //gv.exampleBuildApp() //Print Line
                    gv.examplePingServer() //Ping server
                }
            }

            post{
                always{
                    echo "Finished Testing Groovy Stuff"
                }
                success{
                    echo "Succeeded Testing Groovy Stuff"
                }
                failure{
                    echo "Failed Testing Groovy Stuff"
                }
            }
        }
    }
    //Things to do AFTER Jenkins builds
    post{
        always{
            echo "========always========"
            /* Cleanup Project */
            cleanWs(cleanWhenNotBuilt: false,
                    deleteDirs: true,
                    disableDeferredWipeout: true,
                    notFailBuild: true)
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}