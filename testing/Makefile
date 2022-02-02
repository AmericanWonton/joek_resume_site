run:
	go run *.go
gobuildtest:
	GOOS=linux GOARCH=amd64 go build -o resumesite
dockerbuildtest:
	docker build -t resumeproj-test .
dockerbuildandpushtest:
	docker build -t resumeproj-test .
	docker tag resumeproj-test americanwonton/resumeproj-test
	docker push americanwonton/resumeproj-test
