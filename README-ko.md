# Clean Architecture with TypeScript

클린 아키텍처는 `DDD(Domain-driven Design)`와 `MSA(Micro Service Architecture)`와 함께 많은 프로젝트에서 활용되고 있습니다. 이 프로젝트에서는 TypeScript를 사용하여 동일한 도메인을 공유하는 다양한 웹 클라이언트 서비스를 모노레포와 클린 아키텍처로 구성함으로써, 서비스 유지 보수와 확장을 용이하게 하는 방법을 소개합니다.

만약, 프로젝트가 단순한 UI를 다루는 작은 규모의 프로젝트이거나 하나의 클라이언트 서비스이면서 API 서버가 클라이언트와 맞춤으로 대응되는 환경이라면, 상황에 따라서 클린 아키텍처의 도입으로 코드량과 복잡성이 증가하여 오히려 서비스의 유지 보수성이 나빠질 수 있음을 유의해야 합니다.

샘플 프로젝트는 Yarn에서 기본으로 제공하는 `Workspace`를 사용하여 모노레포를 구성하고, 패키지로 클린 아키텍처의 Domains 레이어와 Adapters 레이어를 구성하였고 각각의 서비스 역시 패키지로 구성하며 각 서비스는 Domains 레이어와 Adapters 레이어의 요소를 그대로 사용하거나 또는 상속 받아서 확장, 오버라이드한 후 이를 가지고 서비스를 구성합니다.

## Languages

- [English](https://github.com/falsy/clean-architecture-with-typescript)
- [한글](https://github.com/falsy/clean-architecture-with-typescript/blob/main/README-ko.md)

# Clean Architecture

![Alt Clean architecture](.github/images/clean-architecture.png#gh-light-mode-only)
![Alt Clean architecture](.github/images/clean-architecture-dark.png#gh-dark-mode-only)

다양한 아키텍처들이 그러하듯 클린 아키텍처가 갖는 기본 목적은 관심사를 분리하는 것입니다. 각의 관심사에 따라 계층을 나누고 세부 구현이 아닌 도메인 중심으로 설계하며, 내부 영역이 프레임워크나 데이터베이스, UI 등의 외부 요소에 의존하지 않도록 합니다.

- 세부 구현 영역과 도메인 영역을 구분합니다.
- 아키텍처는 프레임워크에 의존하지 않습니다.
- 외부 영역은 내부 영역에 의존할 수 있지만, 내부 영역은 외부 영역에 의존할 수 없습니다.
- 고수준, 저수준 모듈 모두 추상화에 의존합니다.

## Communitaction Flow

![Alt Communitaction Flow](.github/images/communication-flow.png#gh-light-mode-only)
![Alt Communitaction Flow](.github/images/communication-flow-dark.png#gh-dark-mode-only)

클린 아키텍처의 흐름을 간단하게 다이어그램으로 표현하면 위와 같습니다.

# Monorepo

![Alt Monorepo](.github/images/packages.png#gh-light-mode-only)
![Alt Monorepo](.github/images/packages-dark.png#gh-dark-mode-only)

모노레포는 Domains 레이어와 Adapters 레이어 그리고 서비스 레이어를 각각 패키지로 의존성을 명확하게 구분하였습니다.
그리고 루트에서는 TypeScript, ESLint, Jest의 기본 설정으로 하위 패키지에서는 확장하여 사용할 수 있습니다.

# Directory Structure

```
/packages
├─ domains
│  └─ src
│     ├─ aggregates
│     ├─ entities
│     ├─ useCases
│     ├─ vos
│     ├─ repositories
│     │  └─ interface
│     └─ dtos
│        └─ interface
├─ adapters
│  └─ src
│     ├─ presenters
│     ├─ repositories
│     ├─ dtos
│     └─ infrastructures
│        └─ interface
├─ client-a
│  └─ src
│     └─ ...
└─ client-b
   └─ src
      └─ ...
```

# Domains

도메인 레이어에서는 비즈니스 규칙과 비즈니스 로직을 정의합니다.

샘플 프로젝트의 경우에는 간단한 포럼 서비스의 일부분으로 사용자가 글 목록을 보거나 글과 댓글을 작성할 수 있는 서비스입니다. 모노레포로 구성된 하나의 패키지로 Entity와 Use Case 그리고 Value Object 등의 값들을 Rollup을 사용하여 빌드하며 프로젝트의 다양한 서비스는 이를 사용하여 서비스를 구성합니다.

## Entities

Entity는 도메인 모델링의 핵심 개념 중 하나로, 고유한 식별자(Identity)를 통해 동일성을 유지하면서 상태와 행동을 가지는 객체입니다. Entity는 단순히 데이터를 보관하는 구조체가 아니라, 자신의 데이터를 직접 제어하고 관리하는 역할을 하며, 도메인 내에서 중요한 비즈니스 규칙과 로직을 표현합니다.

샘플 프로젝트에서는 Post, Comment, User 라는 3개의 엔티티로 구성되어 있습니다.

## Aggregates

![Aggregate](.github/images/aggregate.png#gh-light-mode-only)
![Aggregate](.github/images/aggregate-dark.png#gh-dark-mode-only)

Aggregate는 여러 엔티티와 값 객체를 포함할 수 있는 일관성 경계로, 내부 상태를 캡슐화하여 외부에서의 접근을 제어합니다. 모든 수정은 반드시 Aggregate Root를 통해서만 이루어지며, 이는 모델 내의 관계 복잡성을 관리하고, 서비스 확장 및 트랜잭션 복잡성 증가 시 일관성을 유지하는 데 도움이 됩니다.

샘플 프로젝트에서는 Post가 Aggregate로 사용되었으며 하위에는 종속적인 관계의 Comment 엔티티가 있습니다. 그렇기에 Comment를 추가 및 변경하기 위해서는 Post를 통해서 이루어집니다. 그리고 Post의 속성으로 작성자 즉, 글을 작성한 사용자의 정보가 필요하지만 User는 독립적인 엔티티이기 때문에 얕은 관계를 유지하기 위하여 User의 id 값과 name 정보만을 Value Object로 가지고 있습니다.

## Use Cases

Use Case는 사용자와 서비스 간의 상호작용을 정의하며, 도메인 객체(Entity, Aggregate, Value Object)를 활용하여 서비스가 사용자에게 제공해야 하는 비즈니스 기능을 명확하게 합니다. 시스템 아키텍처 관점에서 Use Case는 애플리케이션 로직과 비즈니스 규칙을 분리하는 역할을 하며, 직접적으로 비즈니스 로직을 제어하기보다는 도메인 객체가 가진 비즈니스 규칙과 로직을 활용할 수 있도록 돕습니다.

샘플 프로젝트에서는 간단하게 전체 요약 글 리스트를 가져오거나 글과 댓글을 추가, 삭제, 변경과 같은 간단한 상호 작용으로 구성되어 있습니다.

## Inversion of Control

![Alt Inversion Of Control](.github/images/inversion-of-control.png#gh-light-mode-only)
![Alt Inversion Of Control](.github/images/inversion-of-control-dark.png#gh-dark-mode-only)

Repository의 경우 Adapter 레이어에 해당하기 때문에 Use Case에서는 Repository에 대해서 알아서는 안됩니다. 그렇기 때문에 Use Case에서는 Repository를 추상화한 인터페이스를 가지고 구현하며, 이는 이후에 `의존성 주입(DI: Dependency Injection`를 통해 동작합니다.

# Adapters

Domain과 마찬가지로 모노레포로 하나의 패키지로 구성하고 Rollup으로 빌드하여 사용합니다. Apapter에서는 일반적인 경우의 Presenter와 Repository 그리고 Infrastructure를 구성하여 이후 서비스 패키지에서 이를 상속 받아 확장하여 사용할 수 있도록 합니다.

## Infrastructures

Infrastructure 레이어에서는 웹 서비스에서 일반적으로 많이 사용하는 HTTP를 사용한 외부 서버와의 통신이나 또는 LocalStorage와 같은 브라우저의 Web API와 같은 애플리케이션 외부와의 연결을 관리합니다.

## Repositories

일반적으로 백엔드에서 Repository 레이어는 데이터베이스와 관련된 `CRUD` 작업을 수행하며 데이터의 저장, 조회, 수정, 삭제와 같은 기본적인 데이터 조작을 처리합니다. 그리고 그러한 데이터베이스와의 상호작용을 추상화하여 비즈니스 로직에서 데이터 저장소에 대해 알 필요가 없도록 합니다.

같은 원리로 샘플 프로젝트에서 Repository 레이어는 API 서버와의 HTTP 통신에 관련된 POST, GET, PUT, DELETE 작업을 수행하며 그 상호작용을 추상화하여 비즈니스 로직에서는 데이터의 출처에 대해서 알 필요가 없도록 합니다. 그리고 외부 서버로부터 받은 데이터는 `DTO`로 캡슐화하여 이 데이터가 클라이언트 내부에서 사용될 때의 안정성을 보장합니다.

## Presenters

Presenters 레이어에서는 UI에서 필요로하는 메서드를 가지고 사용자의 요청을 서버로 전달하는 역할을 하며, 요청에 따라 엔티티 데이터를 UI에서 사용되는 View Model로 값을 변환하여 응답하는 역할을 하기도 합니다.

# Services

샘플 프로젝트는 client-a, client-b, 이렇게 2개의 아주 간단한 서비스로 구성되어 있습니다.

## Client-A

client-a는 `Domains`와 `Adapters` 레이어의 요소들을 사용하여 구성한 간단한 서비스로 React와 Webpack을 사용하였고 최종적으로 React의 Context와 Hook을 사용하여 DI를 구성하여 개발하였습니다.

## Client-B

client-b는 서비스의 확장성을 표현하기 위한 또 하나의 클라이언트 서비스로, 기존의 Post와 Comment 데이터를 API 서버와의 HTTP 통신을 통한 구성 대신 Local Storage를 사용한 구성으로 설계된 클라이언트 서비스입니다.

전체적인 구성은 client-a와 동일하지만, client-b에서는 `Domains`에서 정의한 Repository의 인터페이스를 따르는 새로운 Repository를 구성하고 이를 DI하여 사용함으로써 간단하게 새로운 서비스를 구현할 수 있음을 나타냅니다.

# Run

샘플 프로젝트는 루트에 등록된 커맨드를 활용하여 각 패키지를 빌드 또는 실행할 수 있습니다.

## Install

```
$ yarn install
```

## Start

### client-a

```
$ yarn start:a
```

### client-b

```
$ yarn start:b
```

# Thank You!

모든 지원과 관심에 감사드립니다. 🙇‍♂️
