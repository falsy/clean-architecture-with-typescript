# React with Clean architecture

React, Redux를 사용한 클린 아키텍처의 구조에 대해 생각해봅니다.

## 시작하기에 앞서

위 코드는 Typescript, React, Redux, Webpack을 사용하고 있습니다.  
Typescript도 Clean architecture도 조금씩 공부하며 진행하고 있기 때문에 아직 미흡하거나 잘못된 부분이 많이 있을 수 있습니다.  
조금씩 제가 생각하는 더 나인 구조로 업데이트해 나갈 예정입니다.  
혹시 현재의 코드에 대해, 다른 생각이나 제안은 Pull Request나 Issues 남겨주세요 :)

## 1. 클린 아키텍처

![Alt Clean architecture](https://falsy.me/wp-content/uploads/2020/01/the-clean-architecture.jpg)

클린 아키텍처를 이야기하면 항상 빠지지 않고 가장 먼저 나오는 다이어그램입니다.  

#### 기타 참고 링크

[Coderifleman's blog](https://blog.coderifleman.com/2017/12/18/the-clean-architecture/)  
[Janith's Blog](https://janithl.github.io/2019/10/react-clean-architecture-part-2/)  
[Mario Sanoguera de Lorenzo](https://proandroiddev.com/clean-architecture-data-flow-dependency-rule-615ffdd79e29)

## 2. 폴더 구조
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

## 3. 코드 구성
