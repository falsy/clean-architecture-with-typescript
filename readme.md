# Base code of React with Clean architecture
Clean Architecture'를 기반으로 하는 'React' 프로젝트의 샘플 코드.  
부족한 부분이나 개선사항은 Issue 또는 Pull Request 남겨주시면 함께 반영하도록 하겠습니다. ☺️ 

## Use Stack
Typescript, Webpack, React, Redux, Sass, Jest, Enzyme

## Clean Architecture
![Alt Clean architecture](/_readme/clean-architecture.png)
다양한 아키텍처들이 그러하듯 클린 아키텍처가 갖는 기본의 목적 역시 관심사를 분리하는 것입니다. 각각의 관심사에 따라 계층을 나누고, 세부 구현이 아닌 도메인 중심으로 설계하며, 내부 영역이 프레임워크나 데이터베이스 UI 등의 외부 요소에 의존하지 않도록 합니다.   
  
* 세부 구현 영역과 도메인 영역을 구분합니다.
* 아키텍처는 프레임워크에 의존하지 않습니다.
* 외부 영역은 내부 영역에 의존하며, 내부 영역은 외부 영역에 의존하지 않습니다.
* 고수준, 저수준 모듈 모두 추상화에 의존합니다.

## Communitaction Flow
(작성중...)

## Directory Structure
```
./src
├─ adapters
│  ├─ presenters
│  ├─ repositories
│  ├─ infrastructures
│  └─ vms
├─ domains
│  ├─ aggregates
│  ├─ entities
│  ├─ useCases
│  └─ vos
├─ frameworks
│  └─ web
│     ├─ redux
│     │  ├─ actions
│     │  ├─ reducer
│     │  └─ store
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
   ├─ vms
   └─ vos
```

* 기본 디렉토리는 클린 아키텍처의 레이어를 기준으로 구성하였습니다. [frameworks / adapters / domains(useCaes / entities)]
* 컴포넌트 디렉토리는 [[아토믹 디자인](https://bradfrost.com/blog/post/atomic-web-design/#atoms)]을 참고 하였습니다. [atoms / molecules / organisms / templates / pages]

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
    "@interfaces/*": ["src/interfaces/*"]
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
      "@interfaces": path.resolve(__dirname, "src/interfaces/")
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
    "^@interfaces/(.*)$": "<rootDir>/src/interfaces/$1"
  }
}
```

## Sample Project
#### Install
```
$ npm install
```
#### Start
```
$ npm start
```
#### Test
```
$ npm test
```

## Version
v1.3.1 - [ChangeLog](https://github.com/falsy/react-with-clean-architecture/blob/master/changelog.md)

## Roadmap
- [x] 게시판 샘플 구현
- [ ] 테스트 케이스 작성
- [ ] 리드미 작성
