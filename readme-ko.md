# Sample code of React with Clean architecture
이 프로젝트는 크게는 웹 서비스에 클린 아키텍처를 도입하는, 그리고 작게는 리액트를 사용하는 프로젝트에 클린 아키텍처를 도입하기 위한, 하나의 작은 아이디어의 샘플 코드입니다. 
최소한의 라이브러리와 서비스 기능으로, 전체적인 프로젝트 구성에 집중하고 있습니다. 
  
부족한 부분이나 개선사항은 Issue 또는 Pull Request 남겨주시면 함께 반영하도록 하겠습니다. ☺️

## Language
[🇰🇷](https://github.com/falsy/react-with-clean-architecture/blob/master/readme-ko.md) [🇺🇲](https://github.com/falsy/react-with-clean-architecture)

## Use Stack
Typescript, Webpack, React, React-Native, Recoil, Styled-Components

> (이전의 싱글 레포 구성)  
> https://github.com/falsy/react-with-clean-architecture/tree/v1.9.0

## Clean Architecture
![Alt Clean architecture](/_readme/clean-architecture.png)
다양한 아키텍처들이 그러하듯 클린 아키텍처가 갖는 기본의 목적 역시 관심사를 분리하는 것입니다. 각각의 관심사에 따라 계층을 나누고, 세부 구현이 아닌 도메인 중심으로 설계하며, 내부 영역이 프레임워크나 데이터베이스 UI 등의 외부 요소에 의존하지 않도록 합니다.   
  
* 세부 구현 영역과 도메인 영역을 구분합니다.
* 아키텍처는 프레임워크에 의존하지 않습니다.
* 외부 영역은 내부 영역에 의존할 수 있지만, 내부 영역은 외부 영역에 의존할 수 없습니다.
* 고수준, 저수준 모듈 모두 추상화에 의존합니다.

## Monorepo
![Alt Monorepo](/_readme/monorepo-v2.png)
모노레포의 패키지는 위와 같이 구성되어 있습니다. 도메인 영역과 어댑터 영역, 그리고 프레임워크 영역을 각각 패키지로 구성하여 보다 명확하게 구분되도록 설계하였습니다. 새로운 서비스는 프레임워크 영역의 패키지를 추가하여 구성할 수 있습니다.

## Communitaction Flow
![Alt Communitaction Flow](/_readme/communication-flow-v8.png)
간단하게 다이어그램으로 표현하면 위와 같습니다.

### Session
사용자 로그인 후 발급된 인증 토큰을 웹 스토리지에 저장하여 사용합니다. 웹 스토리지는 전역에서 접근할 수 있지만, 샘플 코드는 위 흐름대로 진행하여 'Infrastructures'의 'Storege'에서 제어합니다. 이는 변할 수 있는 세부 구현의 부분이며, 그 역할에 맞게 위치하여 유지보수에 용의하게 합니다.

### Board
'Infrastructures'에서 http 통신을 통해 게시판 글과 댓글을 가져와 'Use Case'에서 Comment Entity를 포함한 Board Root Entity로 캡슐화하여 'Presenter'로 전달하며 'Presenter'는 Entity 데이터를 'Components'로 전달합니다.  
'Components'에서는 상태 관리 매니저에 'Entity' 데이터 또는 'View Model'로 캡슐화 한 데이터를 기억하고, 데이터의 상태 변화에 따라 View를 다시 그립니다.

## Inversion of Control
![Alt Communitaction Flow](/_readme/inversion-of-control-v2.png)
'Repository'의 경우 Adapter 레이어에 해당하기 때문에 'Use Case'에서는 'Repository'에 대해서 알아서는 안됩니다. 그렇기 때문에 'Use Case'에서는 Domain 레이어에서 Repository Interface를 가지고 구현하며, 이는 이후에 Dependency Injection를 통해 동작합니다.


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

* 모노레포의 패키지 구조는 클린 아키텍처의 레이어를 기준으로 구성하였습니다.  
[ adapter / domain(useCases/entities) / mobile(react-native) / web ]
* 컴포넌트의 디렉토리 구조는 서비스 또는 구성원 간 약속된 형식으로 자유롭게 구성합니다.

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
아래와 같이 수정합니다.
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
아래와 같이 수정합니다.
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
아래와 같이 수정합니다.
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