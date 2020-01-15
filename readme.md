# React with Clean architecture

React, Redux를 사용한 클린 아키텍처의 구조에 대하여 생각해봅니다.  

## Before starting

* 위 데모는 'Typescript', 'React', 'Redux', 'Webpack'을 사용하고 있습니다.  
* 'Typescript'도 'Clean architecture'도 아직 공부하며 진행하고 있기 때문에, 부족한 부분이 많이 있을 수 있습니다.  
* 조금씩 제가 생각하는 더 나은 구조로 업데이트해 나갈 예정입니다.  
* 다른 생각이나 제안은 Pull Request나 Issues에 남겨주세요 😀

## Clean architecture

![Alt Clean architecture](https://falsy.me/wp-content/uploads/2020/01/the-clean-architecture.jpg)

클린 아키텍처를 이야기하면 항상 빠지지 않고 나오는 다이어그램입니다.  
(클린 아키텍처 기본 개념 정리...)

## Version
'react'의 경우 함수형 컴포넌트와 Hook을 사용합니다. (react v16.8 이상)  
'react-redux' 역시 Hook을 사용합니다. (react-redux v7.1 이상)

## Communication flow
(데모 코드 흐름 정리...)

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

가장 바깥의 디렉토리는 '클린 아키텍처'의 레이어를 기준으로 나누어져 있습니다.  
```
frameworks / adapters / domain(useCases / entities)
```
> Frameworks에는 현재 'web' 하나만 존재하지만, 'mobile', 'native', .. 등의 확장성을 가질 수 있습니다.  
  
'web' 디렉토리는 초기 목적대로 'React', 'Redux'를 사용하여 구성하였으며,  
디렉토리는 'Flux 아키텍처'의 레이어를 기준으로 나누어져 있습니다.  
```
actions / reducers / store / components
```
  
'React'의 컴포넌트는 [[아토믹 디자인](https://bradfrost.com/blog/post/atomic-web-design/#atoms)]을 참고 하였습니다.
```
atoms / molecules / organisms / templates / pages
```

### Opinion
* 클린 아키텍처의 마지막 레이어는 Framework, DB, Device, UI 등이 위치하며 이는 비즈니스 규칙과 무관하게 도구로서 사용되어야 합니다. 
처음에는 'React'와 'Redux' 역시 분리하여, 가령 'Redux'를 'MobX'로 변경하더라도 기존 'Redux'의 역할을 대체하는 'MobX'의 역할만 작성해주면 
'React'는 다른 수정 없이 동작할 수 있도록 하면 좋겠다 생각하였으나... 이 부분은 조금 더 생각해 봐야 할 것 같습니다.
* DI(Dependency Injection)에서는 각각의 레이어의 의존성을 주입하고 최종적으로 'Presenters'와 'Actions'을 주입받은 'Frameworks'를 리턴합니다.
* 'Presenters'는 'Store'에 영향을 주지 않는 메서드이며, 'Actions'는 'Store'에 'Dispatch'하는 메서드 입니다.

## Atomic Design
앞서 작성한 내용과 같이 'React'의 컴포넌트는 아토믹 디자인을 참고하였습니다.  
저는 대략적으로 아래와 같이 구분하여 사용합니다.

### atomic  
- 상태를 가지지 않는 컴포넌트입니다.

### molecules  
- 상태를 가질 수 있지만, Presenter나 Action를 호출하지 않고 부모로부터 받은 속성만을 가집니다.

### organisms  
- Presenter나 Acton을 호출하며, 각 molecules에게 데이터를 전달합니다.

### templates  
- 화면을 구성하는 레이어를 모두 갖춘 프레임 셋입니다.

### pages  
- 뷰를 나누는 구분으로, 해당 페이지에 해당하는 데이터를 가지고 templates를 호출합니다.


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
