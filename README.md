# OAuth example with JWT

This is a simple OAuth example using Java Web Token

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
  - Version >= 18.13.0

## Getting Started

1. Install dependencies for each component:

    ```bash
    cd oauth-jwt-node

    npm install
    ```

2. Create a `.env` file based on `.env.template` and fill in the necessary environment variables.

## Running the Authentication Server

1. Run the authentication server:

    ```bash
    npm run start:auth-server:watch
    ```

    The authentication server should now be running on [http://localhost:8081](http://localhost:8081).

## Running the Service

1. Run the service:

    ```bash
    npm run start:service:watch
    ```

    The service server should now be running on [http://localhost:8080](http://localhost:8080).

## Running the Client

1. Run the client:

    ```bash
    npm run client
    ```

    The client will interact with the authentication server and service.


## Executing the tests suites

 1. Run the tests:

    ```bash
    npm run test
    ```
