#!/usr/bin/env sh


export APP_HOST=$1
export WEB_PORT=3000
export EMPLOYEES_PORT=3001
export EMPLOYEES_HOST=employees
export SCHEDULE_PORT=3002
export SCHEDULE_HOST=schedule
export AUTH_PORT=3003
export SHIFTS_PORT=3006
export USAGE_PORT=3007
export MONGODB_PORT=27017
export POSTGRES_HOST=postgres
export POSTGRES_USER=master
export POSTGRES_PASSWORD=password
export POSTGRES_DB=sheikh
export POSTGRES_PORT=5432
export MONGO_INITDB_ROOT_USERNAME=master
export MONGO_INITDB_ROOT_PASSWORD=password

docker-compose -f docker/docker-compose.yml up $2