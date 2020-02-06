# Base code of React with Clean architecture
'Clean Architecture'를 기반으로 하는 'React' 프로젝트의 베이스 코드

## Before the beginning
부족한 부분이나 개선사항은 Issue 또는 Pull Request 남겨주시면 함께 반영하도록 하겠습니다. ☺️ 


## Use Stack
* Webpack
* Typescript
* React
* Redux
* Sass
### Test
* Jest
* Enzyme

## Clean Architecture
![Alt Clean architecture](https://falsy.me/wp-content/uploads/2020/01/the-clean-architecture.jpg)

## Communitaction Flow
준비중...

## Development Flow
준비중...

## Directory Structure
```
./src
├─ adapters
│  ├─ presenters
│  ├─ repositories
│  └─ infrastructures
├─ domains
│  ├─ di
│  ├─ entities
│  ├─ vos
│  ├─ useCases
│  └─ interfaces
│     ├─ entites
│     ├─ infrastructures
│     ├─ repositories
│     ├─ useCases
│     └─ vos
└─ frameworks
   └─ web
      ├─ redux
      └─ components
         ├─ atoms
         ├─ molecules
         ├─ organisms
         ├─ templates
         └─ pages
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
    "@interfaces/*": ["src/domains/interfaces/*"],
    "@presenters/*": ["src/adapters/presenters/*"],
    "@redux/*": ["src/frameworks/web/redux/*"]
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
      "@interfaces": path.resolve(__dirname, "src/domains/interfaces/"),
      "@presenters": path.resolve(__dirname, "src/adapters/presenters/"),
      "@redux": path.resolve(__dirname, "src/frameworks/web/redux/") 
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
    "^@interfaces/(.*)$": "<rootDir>/src/domains/interfaces/$1",
    "^@presenters/(.*)$": "<rootDir>/src/presenters/$1",
    "^@redux/(.*)$": "<rootDir>/src/redux/$1"
  }
}
```

## DEMO
#### Install
```
npm install
```
#### Start
```
npm start
// or
// npm run mock
```

## Version
v1.1.2