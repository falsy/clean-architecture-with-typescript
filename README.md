# Clean Architecture with TypeScript

Clean Architecture, along with `Domain-driven Design(DDD)` and `Micro Service Architecture(MSA)`, is widely used in many projects. In this project, we introduce how to structure various web client services that share the same domain using a monorepo and Clean Architecture, making it easier to maintain and scale the client services.

However, if the project is a small-scale one dealing with a simple UI or involves only a single client service where the API server is closely tailored to the client, adopting Clean Architecture may increase code volume and complexity, making maintenance more difficult. This is something to be mindful of.

The sample project is structured as a monorepo using Yarn's built-in `workspace` functionality. The Clean Architecture's Domain and Adapter layers are organized into separate packages, and each service is also set up as a package. The services either directly use, extend, or override elements from the Domain and Adapter layers to build the final client services.

#### Note.

> \+ My English is not perfect, so please bear with me.

## Languages

- [English](https://github.com/falsy/clean-architecture-with-typescript)
- [한글](https://github.com/falsy/clean-architecture-with-typescript/blob/main/README-ko.md)

# Clean Architecture

![Alt Clean architecture](.github/images/clean-architecture.png#gh-light-mode-only)
![Alt Clean architecture](.github/images/clean-architecture-dark.png#gh-dark-mode-only)

As with many architectures, the primary goal of Clean Architecture is to separate concerns. It divides layers according to each concern, designs around the domain rather than detailed implementations, and ensures the inner layers do not depend on external elements like frameworks, databases, or UIs.

- Separate the detailed implementation area and the domain area.
- The architecture does not depend on the framework.
- The outer layers can depend on the inner layers, but the inner layers cannot depend on the outer layers.
- Both high-level and low-level modules depend on abstractions.

## Communitaction Flow

![Alt Communitaction Flow](.github/images/communication-flow.png#gh-light-mode-only)
![Alt Communitaction Flow](.github/images/communication-flow-dark.png#gh-dark-mode-only)

The flow of Clean Architecture can be briefly illustrated in the diagram above.

# Monorepo

![Alt Monorepo](.github/images/packages.png#gh-light-mode-only)
![Alt Monorepo](.github/images/packages-dark.png#gh-dark-mode-only)

In the monorepo structure, the Domains layer, Adapters layer, and Service layer are clearly separated into individual packages with well-defined dependencies. At the root level, basic configurations for TypeScript, ESLint, and Jest are provided, which can be extended and used in the lower-level packages.

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
├─ client-b
│  └─ src
│     └─ ...
└─ api-server
   └─ src
      └─ ...
```

# Domains

The Domain layer defines the business rules and logic.

In the case of the sample project, it is a part of a simple forum service where users can view a list of posts, write posts, and leave comments. The Domain layer is built using Rollup, packaging Entities, Use Cases, and Value Objects into a single package. Various services within the project utilize this package to build their functionality.

## Entities

Entities are one of the core concepts in domain modeling, representing objects that maintain a unique identity and contain both state and behavior. An Entity is not just a data holder but is responsible for controlling and managing its data. It encapsulates important business rules and logic within the domain.

In the sample project, there are three entities: Post, Comment, and User.

## Aggregates

![Aggregate](.github/images/aggregate.png#gh-light-mode-only)
![Aggregate](.github/images/aggregate-dark.png#gh-dark-mode-only)

An Aggregate is a consistency boundary that can include multiple entities and value objects. It encapsulates internal state and controls external access. All modifications must go through the Aggregate Root, which helps manage the complexity of relationships within the model and maintain consistency when services expand or transactions become more complex.

In the sample project, Post serves as an Aggregate, with the Comment entity having a dependent relationship on it. Therefore, adding or modifying a comment must be done through the Post entity. Additionally, while the Post entity requires information about the author (the User who wrote the post), the User is an independent entity. To maintain a loose relationship, only the User’s id and name are included as a Value Object within Post.

## Use Cases

Use Cases define the interactions between users and the service, leveraging domain objects such as Entities, Aggregates, and Value Objects to deliver business functionality to users. From a system architecture perspective, Use Cases help separate application logic from business rules. Rather than directly controlling business logic, Use Cases facilitate interaction with the domain objects, allowing them to enforce business rules and logic.

In the sample project, Use Cases include simple interactions such as retrieving a summarized list of posts, and adding, deleting, or modifying posts and comments.

## Inversion of Control

![Alt Inversion Of Control](.github/images/inversion-of-control.png#gh-light-mode-only)
![Alt Inversion Of Control](.github/images/inversion-of-control-dark.png#gh-dark-mode-only)

Since the Repository belongs to the Adapter layer, the higher-level Use Case should not directly depend on it. Therefore, in the Use Case, an abstract interface for the Repository is implemented, which is later handled through `Dependency Injection(DI)`.

# Adapters

Like the Domain, the Adapter is also structured as a single package within the monorepo and built using Rollup. In the Adapter, common Presenters, Repositories, and Infrastructures are set up so that they can be extended and used in service packages later.

## Infrastructures

The Infrastructure layer manages external connections such as communication with external servers via HTTP or interactions with browser APIs like LocalStorage, which are commonly used in web services.

## Repositories

In a typical backend, the Repository layer handles CRUD operations related to databases, such as storing, retrieving, modifying, and deleting data. It abstracts database interactions so that the business logic does not need to be aware of the underlying data store.

Similarly, in the sample project, the Repository layer performs POST, GET, PUT, and DELETE operations for HTTP communication with the API server. It abstracts these interactions so the business logic is not concerned with where the data originates. Data retrieved from external servers is encapsulated as DTOs (Data Transfer Objects) to ensure stability when used internally within the client.

## Presenters

The Presenter layer handles requests from the UI, forwarding them to the server. It also converts entity data into View Models used in the UI, responding appropriately based on user requests.

# Services

The sample project consists of three simple services: client-a, client-b, and api-server.

## Client-A

client-a is a simple service built using the elements from the Domains and Adapters layers. It is developed with React and Webpack, and uses React’s Context and Hooks to implement Dependency Injection.

## Client-B

client-b demonstrates the extensibility of the services in this project. Instead of using HTTP communication with the API server to manage Post and Comment data, it is designed to use LocalStorage.

The overall service structure is the same as client-a, but in client-b, a new Repository is created following the Repository interface defined in the Domains layer. This new Repository is injected and used, allowing the service to be easily implemented.

## API Server

This is a simple API server built using NestJS. It uses the Entities from the Domains layer, but since the project primarily focuses on the client-side Use Cases, the API server implements its own Presenters, Use Cases, and Repository layers, all of which are injected through DI.

> Although the main goal of this project is to design client services that share the same domain, making them easy to maintain and scale, the API server is included to demonstrate the flexibility of the architecture.

# Run

You can build or run each package in the sample project using the commands registered at the root.

## Install

```
$ yarn install
```

## Build

### domains

```
$ yarn build:domains
```

### adapters

```
$ yarn build:adapters
```

## Start

### api-server

```
$ yarn start:server
```

### client-a

```
$ yarn start:a
```

### client-b

```
$ yarn start:b
```

# Thank You!

I'm grateful for all the support and interest 🙇‍♂️
