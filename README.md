# Clean Architecture with TypeScript

This is a sample project for introducing Clean Architecture into services using TypeScript.  
It is an extended version of the `React with Clean Architecture` project, which configures `React` and `React Native` services sharing the same domain. This setup allows for the expansion of various TypeScript-based services while sharing the same domain.

#### Note.

> (React with Clean Architecture)  
> https://github.com/falsy/clean-architecture-with-typescript/tree/v2.0.0

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

> You can check the code or contribute through `GitHub` as it is open-source software.

#### Note.

> `Parcel Tracking` is an ongoing service, so please be mindful of the version.  
> The version at the time of writing is as follows.
>
> - [core v1.0.0](https://github.com/parcel-tracking/core/tree/v1.0.0)
> - [core-dev v1.0.0](https://github.com/parcel-tracking/core-dev/tree/v1.0.0)
> - [api-serive v1.0.0](https://github.com/parcel-tracking/api-server/tree/v1.0.0)
> - [extension-for-whale v1.8.1](https://github.com/parcel-tracking/extension-for-whale/tree/v1.8.1)

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

# API Server(api-server)

The `example project` uses `NestJS`. `NestJS` is a widely used `Node.js` framework that facilitates the composition of object-oriented services through decorators, dependency injection mechanisms, and a module-based structured code.

#### Note.

> Example project code  
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

# Web Client(extension-for-whale)

It is built and distributed as an extension for the Whale browser, but it is not significantly different from a simple general web service.

#### Note.

> Example project code  
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

The example project was developed using `React` and `Webpack`.  
After injecting dependencies in the `di` directory, the service is composed using the methods defined in `Controllers`.

Similar to the `api-server`, the framework composing the client is designed to rely only on the data through `DI` within the `frameworks` layer. Therefore, the architecture does not depend on the framework and can flexibly handle changes or replacements.

# Run Project

The `example project(Parcel Tracking)` can be downloaded and run locally.

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

> Since the `example project(Parcel Tracking)` is a live service, it may be updated differently from the described content, so it was cloned with the version branch at the time of document writing.

## Settings

To run the `api-server` locally, additional DB (`MySQL`) settings are required.  
Create an additional `.env` file in the `root` directory of the `api-server` and add values as follows.

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

# Contributions

We are always looking for new ideas and suggestions to improve and expand this project. If you have any improvements or new ideas, please contribute at any time! You can submit a `Pull request` or open an `Issue` on the GitHub repository. Your help and collaboration greatly contribute to the further development of this project.

# License

[WTFPL License](http://www.wtfpl.net/about/)

# Thank You!

I'm grateful for all the support and interest 🙇‍♂️
