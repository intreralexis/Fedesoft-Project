# IONIC FORMULARY

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

HU 01 is a hybrid aplication, Bank-Formulary,using Ionic Framework v4.

  - Ionic Framework v4
  - Angular/Cli 7

### Tech

This repository uses a number of open source projects to work properly:

* [Angular v7] - HTML enhanced for web apps!
* [Ionic v4] - Ionic Framework

And this test is open source with a [public repository][dill]
 on GitHub.

### Installation

this formulary requires [Node.js](https://nodejs.org/) v10.15.3 to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd componentes
$ npm install -d
$ npm install ionic@4.12.0
$ npm install cordova
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

#### Building for source
For production release:
```sh
$ ionic cordova platform add android
```
```sh
$ ionic cordova build android --debug
```
```sh
$ ionic cordova run android --emulator
```

