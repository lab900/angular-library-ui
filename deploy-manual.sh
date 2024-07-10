#!/bin/sh
# Only used for manual deploys
cd lib/ || exit
npm version prerelease --preid alpha
cd ..
npm run build:ui:prod
cd dist/@lab900/ui || exit
npm publish --ignore-scripts
