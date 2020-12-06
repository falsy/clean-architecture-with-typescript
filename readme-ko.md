# Sample code of React with Clean architecture
이 프로젝트는 크게는 웹 서비스에 클린 아키텍처를 도입하는, 작게는 Flux 아키텍처 기반의 Redux를 클린 아키텍처와 함께 사용하기 위한, 하나의 작은 아이디어 샘플 코드입니다.
  
부족한 부분이나 개선사항은 Issue 또는 Pull Request 남겨주시면 함께 반영하도록 하겠습니다. ☺️

## Language
[🇰🇷](https://github.com/falsy/react-with-clean-architecture/blob/master/readme-ko.md) [🇺🇲](https://github.com/falsy/react-with-clean-architecture)

## Use Stack
Typescript, Webpack, React, Redux, styled-components

## Clean Architecture
![Alt Clean architecture](/_readme/clean-architecture.png)
다양한 아키텍처들이 그러하듯 클린 아키텍처가 갖는 기본의 목적 역시 관심사를 분리하는 것입니다. 각각의 관심사에 따라 계층을 나누고, 세부 구현이 아닌 도메인 중심으로 설계하며, 내부 영역이 프레임워크나 데이터베이스 UI 등의 외부 요소에 의존하지 않도록 합니다.   
  
* 세부 구현 영역과 도메인 영역을 구분합니다.
* 아키텍처는 프레임워크에 의존하지 않습니다.
* 외부 영역은 내부 영역에 의존할 수 있지만, 내부 영역은 외부 영역에 의존할 수 없습니다.
* 고수준, 저수준 모듈 모두 추상화에 의존합니다.

## Communitaction Flow
![Alt Communitaction Flow](/_readme/communication-flow-v6.png)
간단하게 다이어그램으로 표현하면 위와 같습니다.

### Session
사용자 로그인 후 발급된 인증 토큰을 웹 스토리지에 저장하여 사용합니다. 웹 스토리지는 전역에서 접근할 수 있지만, 샘플 코드는 위 흐름대로 진행하여 'Infrastructures'의 'Storege'에서 제어합니다. 이는 변할 수 있는 세부 구현의 부분이며, 그 역할에 맞게 위치하여 유지보수에 용의하게 합니다.

### Board
'Infrastructures'에서 http 통신을 통해 게시판 글과 댓글을 가져와 'Use Case'에서 Comment Entity를 포함한 Board Root Entity로 캡슐화하여 'Presenter'로 전달하며 'Presenter'는 Entity 데이터를 가진 'Action'를 리턴합니다.  
'View'에서는 Redux 아키텍처의 흐름대로 Action 값을 Dispatch 하고 Dispatcher는 Store 값을 갱신하며 자신이 변경됨을 알리고 View에서는 Store의 'Entity'값을 'View Model'로 다시 캡슐화하고 'View Model' 값을 기반으로 View를 그립니다.

## Inversion of Control
![Alt Communitaction Flow](/_readme/inversion-of-control-v2.png)
'Repository'의 경우 Adapter 레이어에 해당하기 때문에 'Use Case'에서는 'Repository'에 대해서 알아서는 안됩니다. 그렇기 때문에 'Use Case'에서는 Domain 레이어 Repository Interface를 가지고 구현하며, 이는 이후에 Dependency Injection를 통해 동작합니다.  
'Presenter'의 Action Interface도 동일합니다.


## Directory Structure
```
./src
├─ adapters
│  ├─ infrastructures
│  │  └─ interfaces
│  ├─ presenters
│  │  ├─ interfaces
│  │  └─ action-interfaces
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
   │  ├─ redux
   │  │  ├─ interfaces
   │  │  ├─ actions
   │  │  ├─ reducers
   │  │  └─ store
   │  └─ vm
   └─ mobile(React Native)
      ├─ android
      ├─ ios
      ├─ di
      ├─ components
      ├─ redux
      │  ├─ interfaces
      │  ├─ actions
      │  ├─ reducers
      │  └─ store
      └─ vm
```

* 기본 디렉토리는 클린 아키텍처의 레이어를 기준으로 구성하였습니다.  
[ frameworks / adapters / domains(useCases / entities) ]
* 컴포넌트의 디렉토리 구조는 서비스 또는 구성원 간 약속된 형식으로 자유롭게 구성합니다.

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

## Sample Project
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

# $ cd /src/frameworks/mobile/ios
$ pod install
```
#### Start
```shell
# $ cd /src/frameworks/mobile
$ npx react-native run-ios
```

## Version
v1.8.0 - [ChangeLog](https://github.com/falsy/react-with-clean-architecture/blob/master/changelog.md)