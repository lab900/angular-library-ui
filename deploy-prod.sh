#!/bin/sh
# Used in automatic deploy on main branch
cd lib || exit
cd ..
npm i -g @angular/cli
npm i
npm run build:ui:prod
cd dist/@lab900/ui || exit
npm config set -- '//registry.npmjs.org/:_authToken' "$1"
npm publish --ignore-scripts
