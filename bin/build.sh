#!/usr/bin/env bash

json -I -f package.json -e "this.jspm.directories.baseURL='dist'"
json -I -f package.json -e "this.jspm.directories.packages='dist/vendor'"

jspm bundle aurelia-framework + aurelia-router + aurelia-bootstrapper dist/build.js

json -I -f package.json -e "this.jspm.directories.baseURL='src'"
json -I -f package.json -e "this.jspm.directories.packages='src/vendor'"