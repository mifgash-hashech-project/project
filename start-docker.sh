#!/usr/bin/env sh


export APP_HOST=$1
export WEB_PORT=3000
export EMPLOYEES_PORT=3001
export SCHEDULE_PORT=3002
export AUTH_PORT=3003
export MONGODB_PORT=27017

docker-compose -f docker/docker-compose.yml up $2