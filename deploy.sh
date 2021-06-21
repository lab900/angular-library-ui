#!/bin/sh
cd lib/
npm version prerelease --preid alpha
cd ..
npm run build:ui:prod
cd dist/@lab900/ui
npm publish
