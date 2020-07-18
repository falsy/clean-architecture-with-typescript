# Change log

### v1.6.0
* Action-Presenter Separation

### v1.5.1
* Edit Directory Structure

### v1.5.0
* Changed to styled-components

### v1.4.0
* Remove Redux(Actions) Layer

### v1.3.2
* Add Board View Models

### v1.3.1
* Edit Session flow

### v1.3.0
* Add Comment entitiy and root entitiy Board
* Edit DI logic (Presenter-Actions Layer Detach)
* Delete DI Directory

### v1.2.2
* Add Presenter Interface

### v1.2.1
* Uniform interface name convention
* Add entity, value object, and usecase(session) test code

### v1.2.0
* Interfaces 디렉토리 위치 수정 `/src/interfaces`, (\+ Alias 수정)
* DI 를 위한 Redux Actions, Reducers Class 구현 및 그에 따른 Store 수정
* Presenter - Redux DI 추가 및 그에 따른 Components 수정
* DI 디렉토리 추가 및 위치 수정 `/src/domains/useCases/di`, `/src/adapters/presenter/di`

### v1.1.3
* infrastructure - WebStorage 추가
* 사용자 토큰 정보 캐시 플로우 추가
* 이후 테스트 코드 작성을 위한 Presenters 수정

### v1.1.2
* Infrastructure - Mock 삭제
* interfaces 별칭 추가

### v1.1.1
* 테스트 코드 설정 추가 (jest, enzyme)
* 경로 별칭 설정 추가

### v1.1.0
* DI 변경
* Koa Mock Server \> Webpack DevServer 변경

### v1.0.0
* Init