# Bibliofile Api

API for bibliophiles

## Installation & Setup

To install this api, fork or clone this repository and run the command:

```code
$ npm i
```

This should install the dependencies.

The database is [MongoDB](https://docs.mongodb.com/manual/installation/).

In the repository there is a sample environment file, under `~/.env.sample`. This file should be duplicated and renamed to simply `.env`. Then , the variables should be filled out, using the sample as a guide.

## How To Use

To Run the Server, run the command in your command line:

```code
$ npm start
```

This will start the server.

## Routes

Each section of the api has a `.rest` file which shows sample api calls. You can test these routes yourself using these `.rest` files by using the VS Code extension `REST Client`. Click on `Send Request` in VS Code to run the api call (your server must be running).

- [All The Routes](/docs/routes.md)

## Tests

I haven't created any tests yet (or I have but haven't talked about them here because I am lazy to update the documentation...), but I am planning to use the `Mocha` testing framework with `Chai`.

To run all the tests, run the code:

```code
$ npm test
```

## How It's Built

Bibliofile Api is build using Typescript! Mainly because I enjoy types and want to learn more typescript.

MongoDB has been chosen for the database because I had some troubles with PostgreSQL on my computer. Heh. Yeah. I am using that [Cloud Atlas](https://www.mongodb.com/cloud/atlas) service to host my production database, as they have a free tier.

## Resources

This has been a learning exercise for me. Here are some of the resources I've been using, for future reference to refer back to if I need to:

### Express and Typescript

- [Typescript Express Tutorial](https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/)
- [Typescript, Express and Auth0](https://auth0.com/blog/use-typescript-to-create-a-secure-api-with-nodejs-and-express-getting-started/)
