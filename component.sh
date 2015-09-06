#!/usr/bin/env bash

mkdir src/components/$1
touch src/components/$1/$1.{ts,html,scss}
echo "export class $2 {}" > src/components/$1/$1.ts
echo "<template></template>" > src/components/$1/$1.html