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
(클린 아키텍처 기본 개념 정리...)

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
  /di
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
    /vo(Value Object)
  /frameworks
    /web
      /actions
      /components
        /index
        /pages
        /sections
        /units
      /reducers
      index.html
      index.tsx
      store.ts
index.ts
```

가장 바깥의 디렉토리는 '클린 아키텍처'의 레이어를 기준으로 나누어져 있습니다.  
```
frameworks / adapters / domain(useCases / entities) / di
```
Frameworks에는 현재 'web' 하나만 존재하지만, 'mobile', 'native', ... 등 추가 될 수 있습니다.  
'web' 디렉토리는 초기 목적대로 'React', 'Redux'를 사용하여 구성하였으며,  
디렉토리는 'Flux 아키텍처'의 레이어를 기준으로 나누어져 있습니다.  
```
actions / reducers / store / components
```
그리고 'React'의 컴포넌트는 '[아토믹 디자인](https://bradfrost.com/blog/post/atomic-web-design/#atoms)'을 참고하여 
```
units > sections > pages
```
로 나워져 있습니다. 

#### di(Dependency Injection)
di 에서는 각각의 레이어의 의존성을 주입하고 최종적으로 actions과 presenters를 주입받은 frameworks를 리턴합니다.

#### Opinion
클린 아키텍처의 마지막 레이어는 Framework, DB, Device, UI 등이 위치하며 이는 비즈니스 규칙과 무관하게 도구로서 사용되어야 합니다. 
처음에는 'React'와 'Redux' 역시 분리하여, 가령 'Redux'를 'MobX'로 변경하더라도 기존 'Redux'의 역할을 대체하는 'MobX'의 역할만 작성해주면 
'React'는 다른 수정 없이 동작할 수 있도록 하면 좋겠다 생각하였으나... 이 부분은 조금 더 생각해 봐야 할 것 같습니다.

## Communication flow
(데모 코드 흐름 정리...)

## DEMO
#### Install
```
npm install
```
#### Start
```
npm start
```
