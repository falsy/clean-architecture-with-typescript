# Base code of React with Clean architecture
'Clean Architecture'를 기반으로 하는 'React' 프로젝트의 베이스 코드

## Before the beginning
아직 부족한 부분이 많습니다. 잘못되었거나 개선할 사항은 알려주시면 함께 반영하도록 하겠습니다. ☺️

## Use Stack
* Webpack
* Typescript
* React
* Redux
* Sass
### Test
* Jest
* Enzyme

## Clean architecture
![Alt Clean architecture](https://falsy.me/wp-content/uploads/2020/01/the-clean-architecture.jpg)

## Communitaction flow
...

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

* '클린 아키텍처'의 레이어를 기준으로 구성 되어 있습니다.  [frameworks / adapters / domains(useCaes / entities)]
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
v1.1.1