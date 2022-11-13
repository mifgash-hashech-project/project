#!/usr/bin/env sh

services="employees web"
for s in $services ; do
  (cd $s && npm i)
done;