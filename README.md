# OAuth example with JWT

This is a simple OAuth example using Java Web Token

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

## Getting Started

1. Install dependencies for each component:

    ```bash
    cd oauth-jwt-node

    npm install
    ```

## Running the Authentication Server

1. Run the authentication server:

    ```bash
    node authServer.js
    ```

    The authentication server should now be running on [http://localhost:8081](http://localhost:8081).

## Running the Service

1. Run the service:

    ```bash
    node service.js
    ```

    The service server should now be running on [http://localhost:8080](http://localhost:8080).

## Running the Client

1. Run the client:

    ```bash
    node client.js
    ```

    The client will interact with the authentication server and service.

## Note

- Be sure that authentication server and service are both running before starting the client.
