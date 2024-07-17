<p align="center">
<a href="https://lab900.com" target="_blank">
    <img src="https://lab900.github.io/angular-library-ui/assets/images/logo-duo-dark.svg" width="100">
</a>
<h1>Lab900 - Angular UI library</h1>

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

</p>

A set of Angular 11+ form components built on top of [Angular Material](https://material.angular.io/). \
View the [showcase](https://lab900.github.io/angular-library-ui/) for guides & examples

## Getting started

- [UI library](https://lab900.github.io/angular-library-ui/getting-started)

## Run the project locally

```bash
$ npm i
$ npm run watch:ui # in a separate terminal
$ npm run start
```

## Releasing a new version

1. Bump the lib version
2. Tag the commit with the version number
3. Push the tag to the repository
4. The deployment will be triggered automatically

```bash
$ cd lib/ui
$ npm version YOUR_VERSION
$ cd ../../
$ git tag YOUR_VERSION
$ git push origin YOUR_VERSION
```

