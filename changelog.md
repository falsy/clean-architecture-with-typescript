# Change log

### v2.0.0
* Change to monorepo configuration

### v1.9.0
* Changed state management from Redux to Recoil
* Style component convention modification

### v1.8.1
* Edit infrastructure DI

### v1.8.0
* Add mobile framework(react native)
* Modify the package root directory
* Modify DI directory location
* Detach Mock Server

### v1.7.2
* Edit Components directory structure
* Edit Infrastructure Layer
* Edit DI path alias

### v1.7.1
* Move VM Location (adapters -> frameworks)

### v1.7.0
* Delete VO, Add DTO
* Modifying the Repository and Infrastructure Layer (Remote -> Http)
* Move VM Location (frameworks -> adapters)

### v1.6.8
* Remove test code

### v1.6.7
* Edit directory structure(IoC)
* Added Inversion of Control description

### v1.6.6
* Edit Communitaction Flow Image

### v1.6.5
* Edit directory structure - Change to storage interface domain

### v1.6.4
* Creating a test case corresponding to the login flow

### v1.6.3
* ~Modify login response object~

### v1.6.2
* Add English Introduction

### v1.6.1
* Edit Component Directory Structures

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