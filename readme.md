# Base code of React with Clean architecture
프레임워크로부터 독립적인 구성이 하나의 요소인 클린 아키텍처를 이야기하며 리액트를 사용한 클린 아키텍처라는 제목이... 조금 역설적이지만 크게는 웹 프론트에 클린 아키텍처를 도입하는, 작게는 Flux 아키텍처를 기반의 Redux를 클린 아키텍처와 함께 사용하는 아이디어 샘플 코드입니다.
  
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
![Alt Communitaction Flow](/_readme/communication-flow.png)
간단하게 다이어그램으로 표현하면 위와 같습니다.

### Redux
Redux의 색이 파란색(Frameworks), 초록색(Adapters) 반반으로 표시했죠? Redux의 역할은 Presenter에 어울리지만, 동시에 Frameworks이기도 하기 때문에 저는 Redux와 Presenter 레이어를 분리해서(Redux 레이어 추가) 구성하였습니다.  

### Session
사용자 로그인 후 발급된 인증 토큰을 웹 스토리지에 저장하여 사용합니다. 웹 스토리지는 전역에서 접근할 수 있지만, 샘플 코드는 위 흐름대로 진행하여 'Infrastructures'의 'Storege'에서 제어합니다. 이는 변할 수 있는 세부 구현의 부분이며, 그 역할에 맞게 위치하여 유지보수에 용의하게 합니다.

### Board
'Infrastructures'에서 통해 http 통신으로 게시판 글과 댓글을 가져와 'Use Case'에서 Comment Entity를 포함한 Board Root Entity로 캡슐화하여 'Presenter'로 전달하며 'Presenter'는 해당 Entity를 기반으로 하여 View를 그리기 위한 View Model을 만들고 'Redux'는 View Model을 스토어에 Action하며 Commponents(View)에서는 Dispath하여 View를 그립니다.


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

> vms = View Models  
> vos = Value Objects

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
v1.3.2 - [ChangeLog](https://github.com/falsy/react-with-clean-architecture/blob/master/changelog.md)

## Roadmap
- [x] 게시판 샘플 구현
- [x] 리드미 작성
- [ ] 테스트 케이스 작성
