# Sample code of React with Clean architecture
This project is a small idea sample code to introduce a Clean Architecture to a web service or to use a Redux Architecture and a Clean Architecture together.
   
if you leave an issue or a pull request, we will reflect the insufficient part or improvement. ☺️  
(+ i am not good at English.)

## Language
[🇰🇷](https://github.com/falsy/react-with-clean-architecture/blob/master/readme-ko.md) [🇺🇲](https://github.com/falsy/react-with-clean-architecture)


## Use Stack
Typescript, Webpack, React, React-Native, Recoil, Styled-Components

> (Recoil > Redux)  
> https://github.com/falsy/react-with-clean-architecture/tree/v1.8.1

## Clean Architecture
![Alt Clean architecture](/_readme/clean-architecture.png)
As with various architectures, the primary purpose of a clean architecture is to separate concerns. Divide the hierarchy according to each interest, design domain-centric rather than detailed implementation, and make sure that the internal area does not depend on external elements such as the framework or database UI.  
  
* Distinguish between detailed implementation areas and domain areas.
* Architecture does not depend on the framework.
* The outer zone can depend on the inner zone, but the inner zone cannot depend on the outer zone.
* Both high-level and low-level modules rely on abstraction..

## Communitaction Flow
![Alt Communitaction Flow](/_readme/communication-flow-v6.png)
in simple diagram, it is as above.

### Session
After the user logs in, the issued authentication token is stored and used in the web storage. web storage is accessible globally, but the sample code follows the flow above and is controlled by 'Storage' in 'Infrastructures'. this is part of a detailed implementation that can change, and is positioned according to its role to improve maintenance.

### Board
Board posts and comments are fetched through http communication from 'Infrastructures', encapsulated as Board Root Entity including Comment Entity in 'Use Case' and delivered to 'Presenter', and 'Presenter' returns 'Action' with Entity data.  
In 'View', the Action value is dispatched according to the flow of Redux architecture, and the Dispatcher updates the Store value to notify that it is changed. In View, the 'Entity' value of the Store is re-encapsulated as 'View Model' and is based on the 'View Model' value. Draw a view.


## Inversion of Control
![Alt Communitaction Flow](/_readme/inversion-of-control-v2.png)
In the case of 'Repository', it is an adapter layer, so you should not know about 'Repository' in 'Use Case'. Therefore, in 'Use Case', it is implemented through the Repository Interface located in the domain layer, which is then operated through Dependency Injection.


## Directory Structure
```
./src
├─ adapters
│  ├─ infrastructures
│  │  └─ interfaces
│  ├─ presenters
│  │  └─ interfaces
│  └─ repositories
├─ domains
│  ├─ aggregates
│  │  └─ interfaces
│  ├─ entities
│  │  └─ interfaces
│  ├─ useCases
│  │  ├─ interfaces
│  │  └─ repository-interfaces
│  └─ dto
└─ frameworks
   ├─ web
   │  ├─ di
   │  ├─ components
   │  ├─ hooks
   │  └─ vm
   └─ mobile(React Native)
      ├─ di
      ├─ components
      ├─ android
      ├─ ios
      ├─ hooks
      └─ vm
```

* The basic directory is organized based on layers of clean architecture.  
[ frameworks / adapters / domains(useCases / entities) ]
* The component's directory structure is freely structured in the form promised between services or members.

## Screenshots
![Alt Screenshot 1](/_readme/screenshot_1.jpg)
![Alt Screenshot 2](/_readme/screenshot_2.jpg)

## Alias
### Web
#### tsconfig.json
>/src/frameworks/web/tsconfing.json
```js
{
  "compilerOptions": {
    //...
    "baseUrl": ".",
    "paths": {
      "@adapters/*": ["../../adapters/*"],
      "@domains/*": ["../../domains/*"],
      "@frameworks/*": ["../../frameworks/*"],
      "@di": ["./di/index.ts"]
    }
  },
}
```

#### webpack.config.js
>/src/frameworks/web/webpack.config.js
```js
{
  //...
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: { 
      "@adapters": path.resolve(__dirname, "../../adapters/"),
      "@domains": path.resolve(__dirname, "../../domains/"),
      "@frameworks": path.resolve(__dirname, "../../frameworks/"),
      "@di": path.resolve(__dirname, "./di/index.ts")
    }
  },
}
```

### Mobile
#### tsconfig.json
>/src/frameworks/mobile/tsconfing.json
```js
{
  "compilerOptions": {
    //...
    "baseUrl": ".",
    "paths": {
      "@adapters/*": ["../../adapters/*"],
      "@domains/*": ["../../domains/*"],
      "@frameworks/*": ["../../frameworks/*"],
      "@di": ["./di/index.ts"]
    }
  },
}
```

#### metro.config.js
>/src/frameworks/mobile/metro.config.js
```js
const path = require('path')
const extraNodeModules = {
  '@adapters': path.resolve(__dirname + './../../adapters'),
  '@domains': path.resolve(__dirname + './../../domains'),
  '@frameworks': path.resolve(__dirname + './../../frameworks'),
}
const watchFolders = [
  path.resolve(__dirname + './../../adapters'),
  path.resolve(__dirname + './../../domains'),
  path.resolve(__dirname + './../../frameworks'),
]

module.exports = {
  //...
  resolver: {
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) =>
        name in target ? target[name] : path.join(process.cwd(), `node_modules/${name}`),
    }),
  },
  watchFolders,
}
```

## Run Project
### 1. Mock Server
#### Install
```shell
# $ cd /mock-server
$ npm install
```
#### Start
```shell
# $ cd /mock-server
$ npm start
```

### 2-1. Web
#### Install
```shell
# $ cd /src/frameworks/web
$ npm install
```
#### Start
```shell
# $ cd /src/frameworks/web
$ npm start
```

### 2-2. Mobile(ios)
#### Install
```shell
# $ cd /src/frameworks/mobile
$ npm install

# cocoapods install
$ gem install cocoapods

# $ cd /src/frameworks/mobile/ios
$ pod install
```
#### Start
```shell
# $ cd /src/frameworks/mobile
$ npx react-native run-ios
```

## Version
v1.9.0 - [ChangeLog](https://github.com/falsy/react-with-clean-architecture/blob/master/changelog.md)