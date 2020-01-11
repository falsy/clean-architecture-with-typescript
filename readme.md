# React with Clean architecture

React, Redux를 사용한 클린 아키텍처의 구조에 대하여 생각해봅니다.

## Before starting

* 위 데모는 'Typescript', 'React', 'Redux', 'Webpack'을 사용하고 있습니다.  
* 'Typescript'도 'Clean architecture'도 아직 공부하며 진행하고 있기 때문에, 부족한 부분이 많이 있을 수 있습니다.  
* 지속적으로 제가 생각하는 더 나은 구조로 업데이트해 나갈 예정입니다.  
* 혹시 현재의 코드에 대해, 다른 생각이나 제안은 Pull Request나 Issues 남겨주세요 😀

## Clean architecture

![Alt Clean architecture](https://falsy.me/wp-content/uploads/2020/01/the-clean-architecture.jpg)

클린 아키텍처를 이야기하면 항상 빠지지 않고 나오는 다이어그램입니다.

## Version
'react'의 경우 함수형 컴포넌트와 Hook을 사용합니다. (react v16.8 이상)  
'react-redux' 역시 Hook을 사용합니다. (react-redux v7.1 이상)

## Folder Structure
```
/src
  /adapters
    /infrastructures
    /presenters
    /repositories
  /di
  /domains
    /entities
    /interfaces
      /frameworks
      /infrastructures
      /presenters
      /repositories
      /useCases
    /useCases
    /vo(Value Object)
  /frameworks
    /web
      /actions
      /components
      /reducers
      index.html
      index.tsx
      store.ts
index.ts
```

## DEMO
#### Install
```
npm install
```
#### Start
```
npm start
```

## DEMO - Authentication

## DEMO - Boards

## Opinion-1

## Opinion-2

