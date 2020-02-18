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

#### 1. Introduction
클린 아키텍처에서 중요한 요소들은 아래와 같습니다.
  
* 세부 구현 영역과 도메인 영역을 구분합니다.
* 아키텍처는 프레임워크에 의존하면 안됩니다.
* 외부 영역은 내부 영역에 의존하며, 그 반대는 안됩니다.
* 고수준, 저수준 모듈 모두 추상화에 의존해야 합니다.

#### 2. Entity
* 엔티티는 핵심 업무 규칙과 핵심 업무 데이터를 합친 것을 이야기합니다.
* 엔티티는 가장 내부의 레이어로 그 어떠한 외부의 영향을 받아서는 안됩니다.
* 엔티티는 고유한 식별자를 가지고 있습니다.


### 3. Use Case

### 4. Interface Adapter

### 5. Frameworks & Drivers


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
