run:
	go run *.go
gobuild:
	GOOS=linux GOARCH=amd64 go build -o resumesite
gcloudupdate:
	gcloud components update
gcloudconfig:
	gcloud config set project resume-site-37384
gclouddeploy:
	gcloud app deploy -y
gcloudbrowse:
	gcloud app browse
serverssh:
	ssh -i /d/goworkspace/src/resume_site_deployment/joek_resume_site/security/resumekeypair.pem ubuntu@ec2-3-128-190-13.us-east-2.compute.amazonaws.com
serversecurecopy:
	scp -i /d/goworkspace/src/resume_site_deployment/joek_resume_site/security/resumekeypair.pem resumesite ubuntu@ec2-3-128-190-13.us-east-2.compute.amazonaws.com:
dockerbuild:
	(cd .. && pwd && sudo docker build . -t resumeproj -f project)
dockerrun:
	docker run -it -p 80:80 resumeproj
dockerbuildandpush:
	docker build -t resumeproj .
	docker tag resumeproj americanwonton/resumeproj
	docker push americanwonton/resumeproj
dockerrun:
	docker run -it -p 80:80 resumeproj
dockerrundetached:
	docker run -d -p 80:80 resumeproj