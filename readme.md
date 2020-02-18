# Base code of React with Clean architecture
'Clean Architecture'를 기반으로 하는 'React' 프로젝트 샘플 코드

## Before the beginning
부족한 부분이나 개선사항은 Issue 또는 Pull Request 남겨주시면 함께 반영하도록 하겠습니다. ☺️ 

## Use Stack
* Webpack
* Typescript
* React
* Redux
* Sass
#### Test
* Jest
* Enzyme

## Clean Architecture
![Alt Clean architecture](/_readme/clean-architecture.png)

#### Introduction
다양한 아키텍처들이 그러하듯 클린 아키텍처가 갖는 기본의 목적 역시 관심사를 분리하는 것입니다. 각각의 관심사에 따라 계층을 나누고, 세부 구현이 아닌 도메인 중심으로 설계하며, 내부 영역이 프레임워크나 데이터베이스 UI 등의 외부 요소에 의존하지 않도록 합니다.   
이 프로젝트는 간략하게 클린 아키텍처를 구성하는 요소들에 대해 정리하고, 클린 아키텍처를 기반으로 하는 리액트 프로젝트의 샘플 코드를 통해 그 구성과 이유에 대하여 이야기해보려 합니다.
  
클린 아키텍처는 간략히 정리하면 아래와 같은 개념을 가지고 있습니다.
  
* 세부 구현 영역과 도메인 영역을 구분합니다.
* 아키텍처는 프레임워크에 의존하지 않습니다.
* 외부 영역은 내부 영역에 의존하며, 내부 영역은 외부 영역에 의존하지 않습니다.
* 고수준, 저수준 모듈 모두 추상화에 의존합니다.

#### Entities
* 엔티티는 핵심 업무 규칙과 핵심 업무 데이터를 합친 것을 이야기합니다.
* 엔티티는 가장 내부의 레이어로 그 어떠한 외부의 영향을 받아서는 안됩니다.
* 엔티티는 고유한 식별자를 가지고 있습니다.

#### Use Cases

#### Interface Adapter

#### Frameworks & Drivers


## Communitaction Flow


## Directory Structure
```
./src
├─ adapters
│  ├─ presenters
│  │  └─ di
│  ├─ repositories
│  └─ infrastructures
├─ domains
│  ├─ entities
│  ├─ vos
│  └─ useCases
│     └─ di
├─ frameworks
│  └─ web
│     ├─ redux
│     └─ components
│        ├─ atoms
│        ├─ molecules
│        ├─ organisms
│        ├─ templates
│        └─ pages
└─ interfaces
   ├─ entites
   ├─ frameworks
   ├─ infrastructures
   ├─ repositories
   ├─ useCases
   └─ vos
```

* '클린 아키텍처'의 레이어를 기준으로 구성되어 있습니다.  [frameworks / adapters / domains(useCaes / entities)]
* 'components' 디렉토리는 [[아토믹 디자인](https://bradfrost.com/blog/post/atomic-web-design/#atoms)]을 참고 하였습니다.  [atoms / molecules / organisms / templates / pages]

## Alias
#### tsconfig.json
```js
{
  //...
  "baseUrl": "./",
  "paths": {
    "@adapters/*": ["src/adapters/*"],
    "@domains/*": ["src/domains/*"],
    "@frameworks/*": ["src/frameworks/*"],
    "@interfaces/*": ["src/interfaces/*"],
    "@presenters/*": ["src/adapters/presenters/*"],
  }
}
```

#### webpack.config.js
```js
{
  //...
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: { 
      "@adapters": path.resolve(__dirname, "src/adapters/"),
      "@domains": path.resolve(__dirname, "src/domains/"),
      "@frameworks": path.resolve(__dirname, "src/frameworks/"),
      "@interfaces": path.resolve(__dirname, "src/interfaces/"),
      "@presenters": path.resolve(__dirname, "src/adapters/presenters/")
    }
  }
}
```

#### jest.config.js
```js
{
  //...
  moduleNameMapper: { 
    //...
    "^@adapters/(.*)$": "<rootDir>/src/adapters/$1",
    "^@domains/(.*)$": "<rootDir>/src/domains/$1",
    "^@frameworks/(.*)$": "<rootDir>/src/frameworks/$1",
    "^@interfaces/(.*)$": "<rootDir>/src/interfaces/$1",
    "^@presenters/(.*)$": "<rootDir>/src/presenters/$1"
  }
}
```

## Sample
#### Install
```
$ npm install
```
#### Start
```
$ npm start
// or
// npm run mock
```
#### Test
```
$ npm test
```

## Version
v1.2.1 - [ChangeLog](https://github.com/falsy/react-with-clean-architecture/blob/master/changelog.md)

 ### Roadmap
 - [ ] Readme 작성
 - [ ] 사용자 회원가입 로직 구현
 - [ ] 게시판 기능 세부 구현
 - [ ] 테스트 케이스 작성
