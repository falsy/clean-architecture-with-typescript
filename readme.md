# Sample code of React with Clean architecture
This project is one small idea sample code for use Redux based on Flux architecture with Clean architecture.  
if you leave an issue or a pull request, we will reflect the insufficient part or improvement. ☺️  
(+ i am not good at English.)

## Language
[🇰🇷](https://github.com/falsy/react-with-clean-architecture/blob/master/readme-ko.md) [🇺🇲](https://github.com/falsy/react-with-clean-architecture)


## Use Stack
Typescript, Webpack, React, Redux, Jest, Enzyme

## Clean Architecture
![Alt Clean architecture](/_readme/clean-architecture.png)
As with various architectures, the primary purpose of a clean architecture is to separate concerns. Divide the hierarchy according to each interest, design domain-centric rather than detailed implementation, and make sure that the internal area does not depend on external elements such as the framework or database UI.  
  
* Distinguish between detailed implementation areas and domain areas.
* Architecture does not depend on the framework.
* The outer zone can depend on the inner zone, but the inner zone cannot depend on the outer zone.
* Both high-level and low-level modules rely on abstraction..

## Communitaction Flow
![Alt Communitaction Flow](/_readme/communication-flow-v6.png)
in simple diagram, it is as above.

### Session
After the user logs in, the issued authentication token is stored and used in the web storage. web storage is accessible globally, but the sample code follows the flow above and is controlled by 'Storege' in 'Infrastructures'. this is part of a detailed implementation that can change, and is positioned according to its role to improve maintenance.

### Board
Board posts and comments are fetched through http communication from 'Infrastructures', encapsulated as Board Root Entity including Comment Entity in 'Use Case' and delivered to 'Presenter', and 'Presenter' returns 'Action' with Entity data.  
In 'View', the Action value is dispatched according to the flow of Redux architecture, and the Dispatcher updates the Store value to notify that it is changed. In View, the 'Entity' value of the Store is re-encapsulated as 'View Model' and is based on the 'View Model' value. Draw a view.


## Inversion of Control
![Alt Communitaction Flow](/_readme/inversion-of-control-v2.png)
In the case of 'Repository', it is an adapter layer, so you should not know about 'Repository' in 'Use Case'. Therefore, in 'Use Case', it is implemented through the Repository Interface located in the domain layer, which is then operated through Dependency Injection.  
The Action Interface of 'Presenter' is also the same.


## Directory Structure
```
./src
├─ adapters
│  ├─ infrastructures
│  │  └─ interfaces
│  ├─ presenters
│  │  ├─ interfaces
│  │  └─ action-interfaces
│  └─ repositories
├─ di
├─ domains
│  ├─ aggregates
│  │  └─ interfaces
│  ├─ entities
│  │  └─ interfaces
│  ├─ useCases
│  │  ├─ interfaces
│  │  └─ repository-interfaces
│  └─ vos
│     └─ interfaces
└─ frameworks
   └─ web
      ├─ components
      │  ├─ pages
      │  ├─ templates
      │  ├─ sections
      │  ├─ boxs
      │  └─ items
      ├─ redux
      │  ├─ interfaces
      │  ├─ actions
      │  ├─ reducers
      │  └─ store
      └─ vms
```

* The basic directory is organized based on layers of clean architecture.  
[ frameworks / adapters / domains(useCases / entities) ]
* Refer to [[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/#atoms)] for component directory.  
[ pages / templates / sections / boxs / items ]

## Test
The written test case has a simple meaning.  
If you use it for actual service, you need to modify the main logic and create more diverse cases.

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
    "@di/*": ["src/di/*"]
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
      "@di": path.resolve(__dirname, "src/di/")
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
    "^@di/(.*)$": "<rootDir>/src/di/$1"
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
v1.6.7 - [ChangeLog](https://github.com/falsy/react-with-clean-architecture/blob/master/changelog.md)