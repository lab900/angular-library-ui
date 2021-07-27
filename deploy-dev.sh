#!/bin/sh
# Used in automatic deploy on dev branch
cd lib || exit
npm version "$2"-alpha."$3"
cd ..
npm i -g @angular/cli
npm i
npm run build:ui:prod
cd dist/@lab900/ui || exit
npm config set -- '//registry.npmjs.org/:_authToken' "$1"
npm publish
