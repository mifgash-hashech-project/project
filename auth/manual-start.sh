#!/usr/bin/env bash

PORT=3003
MONGODB_HOST=mongo
MONGODB_PORT=27017
MONGODB_COLLECTION=users
JWT_SECRET="ThisIsMySecret123!"


node ./src/index.js