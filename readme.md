# Sample code of React with Clean architecture
This project is a sample code of one small idea to introduce a clean architecture to web services in a large sense, and a clean architecture to a project using React in a small sense.
With minimal library and service functions, we are concentrating on overall project composition.
   
if you leave an issue or a pull request, we will reflect the insufficient part or improvement. ☺️  
(+ i am not good at English.)

## Language
[🇰🇷](https://github.com/falsy/react-with-clean-architecture/blob/master/readme-ko.md) [🇺🇲](https://github.com/falsy/react-with-clean-architecture)


## Use Stack
Typescript, Webpack, React, React-Native, Recoil, Styled-Components

> (Previous single repo configuration)  
> https://github.com/falsy/react-with-clean-architecture/tree/v1.9.0

## Clean Architecture
![Alt Clean architecture](/_readme/clean-architecture.png)
As with various architectures, the primary purpose of a clean architecture is to separate concerns. Divide the hierarchy according to each interest, design domain-centric rather than detailed implementation, and make sure that the internal area does not depend on external elements such as the framework or database UI.  
  
* Distinguish between detailed implementation areas and domain areas.
* Architecture does not depend on the framework.
* The outer zone can depend on the inner zone, but the inner zone cannot depend on the outer zone.
* Both high-level and low-level modules rely on abstraction..

## Monorepo
![Alt Monorepo](/_readme/monorepo-v2.png)
The monorepo package consists of the above. The domain area, adapter area, and framework area are each configured as a package and designed to be more clearly distinguished. New services can be configured by adding packages from the framework area.

## Communitaction Flow
![Alt Communitaction Flow](/_readme/communication-flow-v8.png)
in simple diagram, it is as above.

### Session
After the user logs in, the issued authentication token is stored and used in the web storage. web storage is accessible globally, but the sample code follows the flow above and is controlled by 'Storage' in 'Infrastructures'. this is part of a detailed implementation that can change, and is positioned according to its role to improve maintenance.

### Board
Board posts and comments are fetched through http communication from 'Infrastructures', encapsulated as Board Root Entity including Comment Entity in 'Use Case' and delivered to 'Presenter', and 'Presenter' returns Entity data.  
in 'Components', 'Entity' data or 'View Model' encapsulated data is stored in the state management manager, and the view is redrawn according to the state change of the data.


## Inversion of Control
![Alt Communitaction Flow](/_readme/inversion-of-control-v2.png)
In the case of 'Repository', it is an adapter layer, so you should not know about 'Repository' in 'Use Case'. Therefore, in 'Use Case', it is implemented through the Repository Interface located in the domain layer, which is then operated through Dependency Injection.


## Directory Structure
```
/packages
├─ adapter
│  └─ src
│     ├─ infrastructures
│     ├─ presenters
│     └─ repositories
├─ domain
│  └─ src
│     ├─ aggregates
│     ├─ entities
│     ├─ useCases
│     │  └─ repository-interfaces
│     └─ dto
├─ mobile(React Native)
│  ├─ android
│  ├─ ios
│  └─ src
│     ├─ components
│     ├─ di
│     ├─ hooks
│     └─ vm
└─ web
   └─ src
      ├─ components
      ├─ di
      ├─ hooks
      └─ vm
```

* The package structure of the monorepo is based on the layers of the clean architecture.  
[ adapter / domain(useCases/entities) / mobile(react-native) / web ]
* The component's directory structure is freely structured in the form promised between services or members.

## Screenshots
![Alt Screenshot 1](/_readme/screenshot_1.jpg)
![Alt Screenshot 2](/_readme/screenshot_2.jpg)

## Settings
### Mobile(React Native)
#### Metro
>/packages/mobile/metro.config.js
```js
const path = require('path')

module.exports = {
  projectRoot: path.resolve(__dirname, "../../"),
  ...
}
```
### iOS
#### xcode 
```
open packages/mobile/ios/mobile.xcodeproj
```
>AppDelegate.m
```shell
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
```
Modify as below.
```shell
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"packages/mobile/index"];
```

### Android
>/packages/mobile/android/app/src/main/java/com/mobile/MainApplication.java
```shell
@Override
protected String getJSMainModuleName() {
  return "index";
}
```
Modify as below.
```shell
@Override
protected String getJSMainModuleName() {
  return "packages/mobile/index";
}
```
>/packages/mobile/android/app/build.gradle 
```js
project.ext.react = [
  enableHermes: true, // clean and rebuild if changing
];
```
Modify as below.
```js
project.ext.react = [
  enableHermes: true, // clean and rebuild if changing
  cliPath: "../../node_modules/react-native/local-cli/cli.js",
  entryFile: "packages/mobile/index.js",
];
```

## Run Projects
### 1. install
#### Install
```shell
$ yarn install
```

### 2. Mock Server
#### Start
```shell
$ yarn run mock-server
```

### 3. Web
#### Start
```shell
$ yarn run web
```

### 4-1. Mobile(iOS)
#### Install
```shell
# $ cd /packages/mobile/ios
$ pod install
# $ cd ../../../
```
#### Start
```shell
$ yarn run ios
```

### 4-2. Mobile(Android)
#### Start
```shell
$ yarn run android
```

## Version
v2.0.0 - [ChangeLog](https://github.com/falsy/react-with-clean-architecture/blob/master/changelog.md)