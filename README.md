# Clean Architecture with TypeScript

This is a sample project for adopting Clean Architecture in a TypeScript-based service. It is an extended version of a previous project([v2](https://github.com/falsy/clean-architecture-with-typescript/tree/v2.0.0)), which used a monorepo to structure `React(Web)` and `React Native(Mobile)` services sharing the same domain. This setup allows various TypeScript-based services to share the same domain and expand seamlessly

#### Note.

> This document is a work in progress as I study OOP, DDD, Clean Architecture, and related topics. Since my knowledge is still growing, there may be parts that I have misunderstood or explained incorrectly. If you find any issues or have suggestions for improvement, please feel free to submit them through issues or pull requests, and I will incorporate them. ☺️

> \+ My English is not perfect, so please bear with me.

#### Note.

> For adopting Clean Architecture specifically in a React project, rather than the entire service structure, please refer to the project below.  
> https://github.com/falsy/react-width-clean-architecture

## Languages

- [English](https://github.com/falsy/clean-architecture-with-typescript)
- [한글](https://github.com/falsy/clean-architecture-with-typescript/blob/main/README-ko.md)

# Clean Architecture

![Alt Clean architecture](/_images/clean-architecture.png#gh-light-mode-only)
![Alt Clean architecture](/_images/clean-architecture-dark.png#gh-dark-mode-only)

As with many architectures, the primary goal of Clean Architecture is to separate concerns. It divides layers according to each concern, designs around the domain rather than detailed implementations, and ensures the inner layers do not depend on external elements like frameworks, databases, or UIs.

- Separate the detailed implementation area and the domain area.
- The architecture does not depend on the framework.
- The outer layers can depend on the inner layers, but the inner layers cannot depend on the outer layers.
- Both high-level and low-level modules depend on abstractions.

## Communitaction Flow

![Alt Communitaction Flow](/_images/communication-flow.png#gh-light-mode-only)
![Alt Communitaction Flow](/_images/communication-flow-dark.png#gh-dark-mode-only)

The flow of Clean Architecture can be briefly illustrated in the diagram above.

## Example

This document uses the [`Parcel Tracking`](https://github.com/parcel-tracking) service, provided as an extension for the Whale browser, as an `example project`. This service is a simple application that crawls the delivery status information from the delivery company's tracking page using the delivery company and tracking number. Please refer to the example project's code.

#### Note.

> - [core](https://github.com/parcel-tracking/core)
> - [core-dev](https://github.com/parcel-tracking/core-dev)
> - [api-serive](https://github.com/parcel-tracking/api-server)
> - [extension-for-whale](https://github.com/parcel-tracking/extension-for-whale)

## Configuration

Various services sharing the same domain were organized using `Git` submodules.  
The `core` repository of the domain area is composed, and the remaining services are configured using this `core` repository as a submodule.

![Alt Configuration](/_images/configuration.png#gh-light-mode-only)
![Alt Configuration](/_images/configuration-dark.png#gh-dark-mode-only)

In the `example project`, there are three repositories: `core-dev` for developing and testing the core, `api-server` for the API server, and `extension-for-whale` for the extension client's code.  
All these repositories use the `core` repository as a submodule.

All services that share the domain, as mentioned above, are structured with a clean architecture and operate according to the previously discussed `Communication Flow`.

# Core(Domain)

In the domain layer, business rules and business logic are defined.

#### Note.

> Example project code  
> [Parcel Tracking - Core](https://github.com/parcel-tracking/core)

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

First, let's define the services of the example project 'Parcel Tracking':

- Users can view a list of delivery companies available for tracking.
- Users can input and edit the delivery company, tracking number, and label.
- Users can check current delivery status information through the delivery company and tracking number.
- Users can view the list of entered delivery companies, tracking numbers, and labels.

## Entity

Based on the above service definitions, we define the entities.

- **Carrier** - An object containing information about the delivery company.

```ts
interface ICarrier {
  readonly id: string
  readonly no: number // (Legacy properties)
  readonly name: string
  readonly displayName: string
  readonly isCrawlable: boolean
  readonly isPopupEnabled: boolean
  readonly popupURL: string
}
```

- **Tracker** - An object containing the user's delivery tracking information.

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

The `Use Case` layer encapsulates data into entities, coordinates the interactions between the defined rules of entities and other layers, and implements business logic using request parameters passed by `Controllers` or methods of `Repositories`.

## Inversion of Control

![Alt Inversion Of Control](/_images/inversion-of-control.png#gh-light-mode-only)
![Alt Inversion Of Control](/_images/inversion-of-control-dark.png#gh-dark-mode-only)

As the `Repository` belongs to the `Adapter` layer, the `Use Case` should not know about the `Repository`. Therefore, in the Use Case, the Repository is abstracted into an interface and operates through `Dependency Injection`.

## Repository interfaces

The `core` is shared among various services using the same domain. However, as mentioned above, the Use Case needs to know the abstracted Repository, which may vary according to the service.

In the `example project`, the addTracker method in the TrackerUseCase adds a Tracker using the Repository, which uses the Web API LocalStorage to store values. This is used only in the web client (`extension-for-whale`) and not in other services (`api-server`).

As the `Repository` can be used differently for each service, the abstracted Repository methods in the core are all used as optional properties(`?`).

#### Note.

> In the TrackerUseCase of the `example project`, the `generateUUID` method is used to generate a unique ID for the tracker. This was done to avoid using external modules in the Domain area and purely composed of TypeScript, as the added tracker is not a critical value. However, generally, if a UUID is required, it is better to encapsulate libraries like `crypto` or `uuid` and use Dependency Injection.

# API Server

The `example project` uses `NestJS`. `NestJS` is a widely used `Node.js` framework that facilitates the composition of object-oriented services through decorators, dependency injection mechanisms, and a module-based structured code.

#### Note.

> Example project code  
> [Parcel Tracking - API Server](https://github.com/parcel-tracking/api-server)

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

The directory structure is composed of core(domains), imported as a submodule using Git, as well as adapters and frameworks, similar to the layers of Clean Architecture.

## Decorator

The architecture of Clean Architecture should not depend on the framework. That is, even if the framework is changed, it should be possible to apply it with minimal changes. However, since `NestJS` uses `Decorators` to compose services, each layer inevitably depends on them.

![Alt Nestjs Dependency Injection](/_images/nestjs-dependency-injection.png#gh-light-mode-only)
![Alt Nestjs Dependency Injection](/_images/nestjs-dependency-injection-dark.png#gh-dark-mode-only)

Therefore, the operations are implemented in the `adapters` layer, which does not depend on NestJS, and the `frameworks` layer inherits from the parent (`controllers`, `usecases`, ...) to add `decorators`, override methods, and call the parent's implementation using `super`.

## Infrastructure

In `Infrastructures`, the functionality of the `fetch API` is abstracted to define the `ServerHTTP` class. This class subsequently performs HTTP communication by injecting `fetch`.

#### Note.

> Since the fetch API was released in Node.js version 18, if using a previous version, the `ServerHTTP` should be composed using the built-in http module or an additional library in Node.js.

## Database

The `example project` uses `MySQL` and `Sequelize` as the database. `NestJS` supports such an environment easily, so the DB-related logic is implemented in the `Repository` of the `frameworks` layer through NestJS's dependency injection, not in the `adapter` layer's `Repository`.

# Web Client

It is built and distributed as an extension for the Whale browser, but it is not significantly different from a simple general web service.

#### Note.

> Example project code  
> [Parcel Tracking - Web Client](https://github.com/parcel-tracking/extension-for-whale)

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

The basic directory structure is similar to the `api-server`.  
Adding another service later can be configured similarly without significant differences.

## Infrastructure

In the web service, `ClientHTTP`, providing HTTP communication functions, and `WebLocalStorage`, providing the browser's storage function, are defined in Infrastructures and injected into Repositories. These ultimately operate by injecting `fetch` and `localStorage`, respectively.

![Alt Web API](/_images/web-api.png#gh-light-mode-only)
![Alt Web API](/_images/web-api-dark.png#gh-dark-mode-only)

#### Note.

> The structure in the image above is implemented identically in the api-server.

`Fetch` and `WebStorage` are Web APIs that can be accessed globally, but since these are changeable detailed implementations, they are encapsulated into classes and positioned according to their roles to facilitate future changes or maintenance.

## Framework

In the example project, development was done using `React` and `Webpack`.
Similar to the `api-server`, the client-side `framework` is designed within the frameworks layer to depend solely on data through `DI(Dependency injection)`, ensuring that the architecture is not tied to any specific framework and can be easily adapted to changes or replacements.

While the NestJS framework used in the `api-server` supports `DI`, the client does not have built-in support for it. Therefore, `DI` was implemented using React’s Context API and Provider.

```ts
// /src/frameworks/di/DependencyProvider.tsx
...

export const DependencyContext = createContext<Dependencies | null>(null)

export default function DependencyProvider({
  children
}: {
  children: ReactNode
}) {
  const httpClient = globalThis.fetch.bind(globalThis)
  const browserStorage = (window as any).whale.storage.local
  const infrastructures = infrastructuresFn(httpClient, browserStorage)
  const repositories = repositoriesFn(
    infrastructures.clientHTTP,
    infrastructures.browserStorage
  )
  const useCases = useCasesFn(repositories)
  const controllers = controllersFn(useCases)

  const dependencies = {
    controllers
  }

  return (
    <DependencyContext.Provider value={dependencies}>
      {children}
    </DependencyContext.Provider>
  )
}
```

And services are composed by using controllers injected via `DI` through Hooks.

```ts
// /src/frameworks/hooks/useDependencies.tsx
import { useContext } from "react"
import { DependencyContext } from "../di/DependencyProvider"

export default function useDependencies() {
  const dependencies = useContext(DependencyContext)
  if (!dependencies) {
    throw new Error("Dependencies not found in context")
  }
  return dependencies
}
```

# Run Project

The `example project(Parcel Tracking)` can be downloaded and run locally.

## Use Stack

### api-server

Nestjs, Sequelize, MySQL

### web-client

Webpack, React, Emotion

## install

### api-server

```
$ git clone https://github.com/parcel-tracking/api-server.git
```

```
$ cd api-server
```

```
$ npm install
```

### web-client

```
$ git clone https://github.com/parcel-tracking/extension-for-whale.git
```

```
$ cd extension-for-whale
```

```
$ npm install
```

## Settings

To run the `api-server` locally, you need to set up the database(`MySQL`) and environment variables. In the root directory of the `api-server`, create an additional .env file and add values in the format shown below.

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

The data of the currently used DB in the service can be downloaded [`here`](/_sql/parcel-tracking.sql).

## Run

### api-server

```
$ cd api-server
```

```
$ npm start
```

### web-client

```
$ cd extension-for-whale
```

```
$ npm start
```

# Thank You!

I'm grateful for all the support and interest 🙇‍♂️
