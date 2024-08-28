# Clean Architecture with TypeScript

타입스크립트를 사용하는 서비스에 클린 아키텍처 도입을 위한 샘플 프로젝트입니다.  
기존의, 같은 도메인을 공유하는 `React`와 `React Native` 서비스 구성의 `React with Clean Architecture` 프로젝트의 확장 버전으로, 다양한 타입스크립트 기반의 서비스들이 같은 도메인을 공유하며 확장해 나갈 수 있도록 구성하였습니다.

#### Note.

> 이 문서는 제가 OOP, DDD, 클린 아키텍처 및 관련 주제를 공부하면서 진행 중인 작업입니다. 아직 지식이 부족하기 때문에 제가 오해하거나 잘못 설명한 부분이 있을 수 있습니다. 문제점을 발견하시거나 개선을 위한 제안 사항이 있으시면 이슈 또는 풀 리퀘스트 해 주세요. ☺️

#### Note.

> 서비스에 전반에 클린 아키텍처를 구현하기보다 도메인 주도의 클린 아키텍처 기반 React 애플리케이션 설정을 위해서는 아래 프로젝트를 참고해 주세요.

> (Domain-driven React Architecture)  
> https://github.com/falsy/domain-driven-react-architecture

## Languages

- [English](https://github.com/falsy/clean-architecture-with-typescript)
- [한글](https://github.com/falsy/clean-architecture-with-typescript/blob/main/README-ko.md)

# Clean Architecture

![Alt Clean architecture](/_images/clean-architecture.png#gh-light-mode-only)
![Alt Clean architecture](/_images/clean-architecture-dark.png#gh-dark-mode-only)

다양한 아키텍처들이 그러하듯 클린 아키텍처가 갖는 기본 목적은 관심사를 분리하는 것입니다. 각의 관심사에 따라 계층을 나누고 세부 구현이 아닌 도메인 중심으로 설계하며, 내부 영역이 프레임워크나 데이터베이스, UI 등의 외부 요소에 의존하지 않도록 합니다.

- 세부 구현 영역과 도메인 영역을 구분합니다.
- 아키텍처는 프레임워크에 의존하지 않습니다.
- 외부 영역은 내부 영역에 의존할 수 있지만, 내부 영역은 외부 영역에 의존할 수 없습니다.
- 고수준, 저수준 모듈 모두 추상화에 의존합니다.

## Communitaction Flow

![Alt Communitaction Flow](/_images/communication-flow.png#gh-light-mode-only)
![Alt Communitaction Flow](/_images/communication-flow-dark.png#gh-dark-mode-only)

클린 아키텍처의 흐름을 간단하게 다이어그램으로 표현하면 위와 같습니다.

## Example

이 글은 웨일 브라우저의 확장 프로그램으로 서비스 중인 [`택배 배송 조회(Parcel Tracking)`](https://github.com/parcel-tracking)을 `예시 프로젝트`로 사용합니다.  
위 서비스는 택배사와 운송장 번호를 가지고 해당 택배사의 배송 조회 페이지를 크롤링하여 현재 배송 상태 정보를 보여주는 간단한 서비스입니다. `예시 프로젝트`의 코드를 함께 참고해주세요.

#### Note.

> `Parcel Tracking`는 서비스 중이기 때문에 버전에 유의해주세요.  
> 글 작성 시점의 버전은 아래와 같습니다.
>
> - [core v1.0.0](https://github.com/parcel-tracking/core/tree/v1.0.0)
> - [core-dev v1.0.0](https://github.com/parcel-tracking/core-dev/tree/v1.0.0)
> - [api-serive v1.0.0](https://github.com/parcel-tracking/api-server/tree/v1.0.0)
> - [extension-for-whale v1.8.1](https://github.com/parcel-tracking/extension-for-whale/tree/v1.8.1)

## Configuration

다양한 서비스에서 같은 도메인을 공유하는 방법으로 `Git`의 서브모듈을 사용하여 프로젝트를 구성하였습니다.  
도메인 영역의 `core` 리포지토리를 구성하고, 해당 `core` 리포지토리를 서브모듈로 활용하여 나머지 서비스를 구성합니다.

![Alt Configuration](/_images/configuration.png#gh-light-mode-only)
![Alt Configuration](/_images/configuration-dark.png#gh-dark-mode-only)

`예시 프로젝트`에서는 core를 개발하고 테스트하는 `core-dev` 리포지토리와 API 서버에 해당하는 `api-server` 리포지토리 그리고 확장 프로그램의 클라이언트에 해당하는 `extension-for-whale` 리포지토리가 있습니다.  
이들 리포지토리는 모두 `core` 리포지토리를 서브모듈로 사용합니다.

위와 같이 도메인을 공유하는 모든 서비스는 클린 아키텍처로 구성되며, 앞서 이야기한 `Communitaction Flow`를 따라 동작합니다.

# Core(Domain)

도메인 레이어에서는 비즈니스 규칙과 비즈니스 로직을 정의합니다.

#### Note.

> 예시 프로젝트 코드  
> [Parcel Tracking - core(v1.0.0)](https://github.com/parcel-tracking/core/tree/v1.0.0)

## Directory Structure

```
/core
├─ domains
│  ├─ entities
│  └─ usecases
├─ dtos
├─ vos
└─ (repositories/interfaces)
```

## Business Logic

우선, 예시 프로젝트인 `택배 배송 조회(Parcel Tracking)`의 서비스를 정의해보면 아래와 같습니다.

- 사용자는 배송을 조회할 수 있는 택배 회사의 리스트를 볼 수 있습니다.
- 사용자는 택배 회사와 운송장 번호 그리고 라벨을 입력 및 수정할 수 있습니다.
- 사용자는 입력한 택배 회사와 운송장 번호로 현재의 배송 상태 정보를 조회할 수 있습니다.
- 사용자는 입력했던 택배 회사와 운송장 번호 그리고 라벨 리스트를 볼 수 있습니다.

## Entity

위 서비스 정의를 바탕으로 엔티티를 정의합니다.

- **Carrier** - 택배 회사에 대한 정보를 담은 객체입니다.

```ts
interface ICarrier {
  readonly id: string
  readonly no: number // (레거시 프로퍼티)
  readonly name: string
  readonly displayName: string
  readonly isCrawlable: boolean // 크롤링 가능 여부
  readonly isPopupEnabled: boolean // 새창 조회 가능 여부
  readonly popupURL: string // 새창 조회 URL
}
```

- **Tracker** - 사용자의 택배 조회 정보를 담은 객체입니다.

```ts
interface ITracker {
  readonly id: string
  carrierId: string
  label: string
  trackingNumber: string
  memos: string[]
  updateLabel(newLabel: string): void
  updateTrackingNumber(newTrackingNumber: string): void
  updateCarrierId(newCarrierId: string): void
  addMemo(): void
  updateMemo(index: number, newMemo: string): void
  deleteMemo(index: number): void
}
```

## Use Case

`Use Case` 레이어는 엔티티로 데이터를 캡슐화하고, 엔티티의 정의된 규칙 및 다른 레이어 간의 상호작용을 조정하는 역할을 합니다.  
또한 `Controller`에서 전달받은 요청 파라미터나 `Repository`의 메소드를 활용하여 비즈니스 로직을 구현합니다.

## Inversion of Control

![Alt Inversion Of Control](/_images/inversion-of-control.png#gh-light-mode-only)
![Alt Inversion Of Control](/_images/inversion-of-control-dark.png#gh-dark-mode-only)

`Repository`의 경우 `Adapter` 레이어에 해당하기 때문에 `Use Case`에서는 `Repository`에 대해서 알아서는 안됩니다. 그렇기 때문에 `Use Case`에서는 `Repository`를 추상화한 인터페이스를 가지고 구현하며, 이는 이후에 `Dependency Injection`를 통해 동작합니다.

## Repository interfaces

`core`는 같은 도메인을 공유하여 다양한 서비스에서 사용됩니다. 하지만 위에서 이야기 했듯이 Use Case에서는 추상화된 Repository를 알고 있어야 하는데, Repository는 서비스에 따라 다르게 사용될 수 있습니다.

`예시 프로젝트`를 참고하면, TrackerUseCase에서 Tracker를 추가하는 addTracker 메서드는 Repository에서 Web API인 `LocalStorage`를 사용하여 값을 저장합니다. 이는 웹 클라이언트(`extension-for-whale`)에서만 사용되고 다른 서비스(`api-server`)에서는 사용되지 않습니다.

위와 같이 `Repository`는 서비스마다 다르게 사용될 수 있기 때문에 `core`에서의 추상화된 `Repository`의 메서드는 모두 옵셔널 속성(`?`)으로 사용합니다.

#### Note.

> `예시 프로젝트`의 TrackerUseCase에서 tracker의 고유한 ID 값을 위해 `generateUUID`라는 메서드를 사용하고 있습니다. 이는 Domain 영역에서는 외부 모듈을 사용하지 않고 순수하게 타입스크립트만으로 구성하고자 하였으며, 추가되는 tracker가 중요한 값이 아니라고 판단했기 때문입니다. 하지만 일반적으로 UUID 값이 필요하다면 `crypto` 또는 `uuid` 라이브러리를 캡슐화 한 후 의존성 주입하여 사용하는 것이 더 좋을 것 같습니다.

# API Server(api-server)

`예시 프로젝트`에서는 `NestJS`를 사용하였습니다. `NestJS`는 많이 사용되고 있는 `Node.js` 프레임워크이며, 데코레이터와 의존성 주입 매커니즘, 모듈 기반의 구조화된 코드를 통해 객체 지향 서비스를 구성하는 데 용이합니다.

#### Note.

> 예시 프로젝트 코드  
> [Parcel Tracking - api-serive(v1.0.0)](https://github.com/parcel-tracking/api-server/tree/v1.0.0)

## Directory Structure

```
/api-server
└─ src
   ├─ core(domains) #submodule
   ├─ adapters
   │  ├─ controllers
   │  ├─ repositories
   │  ├─ infrastructures
   │  └─ utilities
   └─ frameworks
      ├─ controllers
      ├─ usecases
      ├─ repositories
      ├─ models
      └─ moduls
```

디렉토리 구조는 클린 아키텍처의 레이어 구성과 유사하게, 서브모듈로 가져온 `core(domains)`와 `adapters`, `frameworks`로 구성하였습니다.

## Decorator

클린 아키텍처의 아키텍처는 프레임워크에 의존하지 않아야 합니다. 즉, 프레임워크를 변경하더라고 최소한의 변경으로 적용이 가능하도록 구성해야 합니다. 하지만 NestJS는 `Decorator`를 사용하여 서비스를 구성하기 때문에 각 레이어에 의존성이 불가피합니다.

![Alt Nestjs Dependency Injection](/_images/nestjs-dependency-injection.png#gh-light-mode-only)
![Alt Nestjs Dependency Injection](/_images/nestjs-dependency-injection-dark.png#gh-dark-mode-only)

그렇기 때문에 NestJS에 의존하지 않는 `adapters` 레이어에서 동작을 구현하고 `frameworks` 레이어에서는 부모(`controllers`, `usecases`, ...)를 상속 받아서 `Decorator`를 추가하고, 메서드를 오버라이드한 후 `super`를 사용해서 부모의 구현을 호출하도록 하였습니다.

## Infrastructure

`Infrastructures`에서는 fetch API의 기능을 추상화하여 `ServerHTTP` 클래스를 정의하였습니다. 이 클래스는 이후에 `fetch`를 주입 받아 HTTP 통신을 수행합니다.

#### Note.

> fetch API는 Node.js 18 버전에서 릴리즈 되었기 때문에 이전 버전을 사용한다면 Node.js에 기본적으로 탑재되어 있는 http 모듈이나 추가적으로 라이브러리를 사용하여 `ServerHTTP`를 구성해야 합니다.

## Database

예시 프로젝트에서는 데이터베이스로 `MySQL`과 `Sequelize`를 사용하였습니다. 그리고 `NestJS`에서는 위와 같은 환경을 간편하게 사용할 수 있도록 지원하고 있어서 DB와 관련된 로직은 `adapter` 레이어의 `Repository`에서 구현하지 않고 `frameworks` 레이어의 `Repository`에서 NestJS의 의존성 주입을 통해 구현하였습니다.

# Web Client(extension-for-whale)

웨일 브라우저의 확장프로그램으로 빌드되어 배포하지만, 간단한 일반적인 웹 서비스와 크게 다르지 않습니다.

#### Note.

> 예시 프로젝트 코드  
> [Parcel Tracking - extension-for-whale(v1.8.1)](https://github.com/parcel-tracking/extension-for-whale/tree/v1.8.1)

## Directory Structure

```
/extension-for-whale
└─ src
   ├─ core(domains) #submodule
   ├─ constants
   ├─ adapters
   │  ├─ controllers
   │  ├─ repositories
   │  └─ infrastructures
   └─ frameworks
      ├─ di
      └─ components
```

기본적인 디렉토리 구조는 `api-server`와 비슷합니다.  
이후에 다른 서비스를 추가하더라고 위 구조와 크게 다르지 않게 구성할 수 있습니다.

## Infrastructure

웹 서비스에서는 HTTP 통신에 대한 기능을 제공하는 `ClientHTTP`와 브라우저의 저장소 기능을 제공하는 `WebLocalStorage`를 `Infrastructures`에 정의하여 `Repositories`에 주입하여 사용하고 있습니다.  
이는 최종적으로 각각 `fetch`와 `localStorage`를 주입 받아 동작하게 됩니다.

![Alt Web API](/_images/web-api.png#gh-light-mode-only)
![Alt Web API](/_images/web-api-dark.png#gh-dark-mode-only)

#### Note.

> 위 이미지의 구조는 api-server에서도 동일하게 구현되어 있습니다.

`Fetch`와 `WebStorage`는 Web API로 전역에서 접근할 수 있지만, 이는 변할 수 있는 세부 구현 사항이기 때문에 각각 클래스로 캡슐화하고 그 역할에 맞게 위치시켜 이후 변경이나 유지보수에 용이하게 합니다.

## Framework

예시 프로젝트에서는 `React`와 `Webpack`을 사용하여 개발하였습니다.  
`di` 디렉토리에서 의존성을 주입한 후에 `Controllers`에서 정의한 메서드들을 활용하여 서비스를 구성합니다.

`api-server`와 마찬가지로 클라이언트를 구성하는 프레임워크는 `frameworks` 레이어 안에서 `DI`을 통한 데이터에만 의존하도록 설계되어 있기 때문에 아키텍처는 프레임워크에 의존하지 않으며, 변경이나 교체에 유연하게 대처할 수 있습니다.

# Run Project

`예시 프로젝트(Parcel Tracking)`는 직접 다운로드하여 로컬에서 실행해 볼 수 있습니다.

## Use Stack

### api-server

Nestjs, Sequelize, MySQL

### extension-for-whale

Webpack, React, Emotion

## install

### api-server

```
$ git clone --branch v1.0.0 --single-branch https://github.com/parcel-tracking/api-server.git
```

```
$ cd api-server
```

```
$ npm install
```

### extension-for-whale

```
$ git clone --branch v1.8.1 --single-branch https://github.com/parcel-tracking/extension-for-whale.git
```

```
$ cd extension-for-whale
```

```
$ npm install
```

#### Note.

> `예시 프로젝트(Parcel Tracking)`는 서비스 중이기 때문에, 현재 글 작성 버전의 브랜치로 클론 합니다.

## Settings

`api-server`는 로컬에서 동작하기 위해 DB(`MySQL`)설정이 추가로 필요합니다.  
`api-server`의 `root` 디렉토리에 아래와 같이 `.env` 파일을 추가로 만든 후 아래와 같은 형식으로 값을 추가합니다.

```
$ cd api-server
```

```
$ vi .env
```

```
DB_USERNAME=root
DB_PASSWORD=password
DB_NAME=database-name
DB_HOST=localhost
DB_DIALECT=mysql
```

현재 서비스에 사용하는 DB의 데이터는 [`여기`](/_sql/parcel-tracking.sql)에서 다운로드 받아 사용할 수 있습니다.

# License

자세한 내용은 LICENSE 파일을 참조하세요.

# Thank You!

모든 지원과 관심에 감사드립니다. 🙇‍♂️
