# Base code of React with Clean architecture
'React'와 'Clean Architecture'로 구성된 코드 베이스 프로젝트

## Clean architecture
![Alt Clean architecture](https://falsy.me/wp-content/uploads/2020/01/the-clean-architecture.jpg)

## Version
'react'의 경우 함수형 컴포넌트와 Hook을 사용합니다. (react v16.8 이상)  
'react-redux' 역시 Hook을 사용합니다. (react-redux v7.1 이상)

## Directory Structure
```
/src
  /adapters
    /infrastructures
    /presenters
    /repositories
  /domains
    /entities
    /interfaces
      /entites
      /frameworks
      /infrastructures
      /presenters
      /repositories
      /useCases
      /vo
    /useCases
    /vo
  /frameworks
    /di
    /server
    /web
      /actions
      /components
        /atoms
        /molecules
        /organisms
        /pages
        /router
        /templates
      /reducers
      index.html
      index.tsx
      store.ts
index.ts
```

* 가장 밖은 '클린 아키텍처'의 레이어를 기준으로 나누어져 있습니다.  [frameworks / adapters / domain(useCaes / entities)]
* 'component` 디렉토리는 'Flux 아키텍처'의 레이어를 기준으로 나누어져 있습니다.  [actios / reducers / store / components]
* 'React'의 컴포넌트는 [[아토믹 디자인](https://bradfrost.com/blog/post/atomic-web-design/#atoms)]을 참고 하였습니다.  [atoms / molecules / organisms / templates / pages]

## DEMO
#### Install
```
npm install
```
#### Start server
```
npm run server
```
#### Start client
```
npm start
```
