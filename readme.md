# Base code of React with Clean architecture
'React'와 'Clean Architecture'로 구성된 샘플 베이스 코드

## Use Stack
* Webpack
* Typescript
* React
* Redux
* Sass

## Clean architecture
![Alt Clean architecture](https://falsy.me/wp-content/uploads/2020/01/the-clean-architecture.jpg)

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
v1.1.0