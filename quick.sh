#!/usr/bin/env bash

mkdir src/app/root/$1
touch src/app/root/$1/$1.{ts,html,scss}
echo "export class $2 {}" > src/app/root/$1/$1.ts
echo "<template></template>" > src/app/root/$1/$1.html