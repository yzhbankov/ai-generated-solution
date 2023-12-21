# ai-generated-solution

## Webserver completely generated chat GPT using DSL

### DSL instruction

```yaml

# DSL for Web Server Architecture

Application:
  Name: ExampleAppWebServer
  Type: WebServer
  Modules:
    - ExampleAppWebServer
    - DatabaseClient
  Layers:
    - ExampleAppRouter
    - ExampleAppController
    - ExampleAppUseCase
    - ExampleAppModel

Module:
  Name: ExampleAppWebServer
  Technology: Express.js
  Dependencies:
    - ExampleAppRouter
  Config:
    AuthEnabled: true
    Port: 3000

Layer:
  Name: ExampleAppRouter
  Dependencies:
    - ExampleAppController
  Endpoints:
    - /api/users
      POST:
        requestBody:
          content:
            type: object
            required:
              email: string
              name: string
              password: string
        response:
          content:
            type: object
            properties:
              email: string
              name: string
              _id: string
      GET:
        response:
          content:
            type: object
            properties:
              email: string
              name: string
              _id: string

    - /api/users/:id
      DELETE:
        reponse:
          content:
            type: object
            properties:
              email: string
              name: string
              _id: string
        
    - /api/login
      POST:
        requestBody:
          content:
            type: object
            required:
              email: string
              password: string
        response:
          content:
            type: object
            properties:
              email: string
              name: string
              token: jsonwebtoken

Layer:
  Name: ExampleAppController
  Components:
    - UsersController
    - LoginController
  Dependencies:
    - ExampleAppUseCase

Layer:
  Name: ExampleAppUseCase
  Components:
    - GetUsers
    - SaveUser
    - DeleteUser
    - Login
  Dependencies:
    - ExampleAppModel

Layer:
  Name: ExampleAppModel
  Components:
    - UserModel
  Dependencies:
    - DatabaseClient

Module:
  Name: DatabaseClient
  Technology: MongoDB
  Config:
    ConnectionString: mongodb://localhost:27017/userdb
```
