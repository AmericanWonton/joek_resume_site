#!/bin/sh

echo "Performing Docker Build"
#Change directory to project path and run command to build
(cd .. && cd project && sudo make dockerbuildandpush)