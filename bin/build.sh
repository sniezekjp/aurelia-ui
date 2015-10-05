#!/usr/bin/env bash

./node_modules/.bin/json -I -f package.json -e "this.jspm.directories.baseURL='dist'"
./node_modules/.bin/json -I -f package.json -e "this.jspm.directories.packages='dist/vendor'"

./node_modules/.bin/jspm bundle aurelia-framework + aurelia-router + aurelia-bootstrapper dist/build.js

./node_modules/.bin/json -I -f package.json -e "this.jspm.directories.baseURL='src'"
./node_modules/.bin/json -I -f package.json -e "this.jspm.directories.packages='src/vendor'"