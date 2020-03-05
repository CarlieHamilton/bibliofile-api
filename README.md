# Bibliofile Api
API for bibliophiles

This readme is obviously a WIP, right now I'm just writing notes to myself about what I need to include 😅

## Installation & Setup

To install this api, fork or clone this repository and run the command:

```
npm i
```
This should install the dependencies.

PostgreSQL is used for the database. To install postgres onto your system:

```
$ sudo apt-get update
$ sudo apt-get install postgresql postgresql-contrib
```

In the repository there is a sample environment file, under `~/.env.sample`. This file should be duplicated and renamed to simply `.env`. Then , the variables should be filled out, using the sample as a guide.

## How To Use

To Run the Server, run the command in your command line:

```
npm start
```

This will start the server. The api by default runs on the port `localhost:3003` (mainly because 3 is my favourite number)

## Routes

The following routes are defined for this api:

(OK, yeah, this is an API but I haven't gotten any routes defined yet...)

## Tests

I haven't created any tests yet (or I have but haven't talked about them here because I am lazy to update the documentation...), but I am planning to use the `Mocha` testing framework with `Chai`.

To run all the tests, run the code:

```
npm test
```

## How It's Built

Bibliofile Api is build using Typescript! Mainly because I enjoy types. But also because I thought that creating a C# ASP.net Core backend would take me too long to do. I would have liked to have given Crystal a try, but I was worried there wouldn't be enough dependencies or support for it. I am totally going to try Crystal one of these days. But yes, here we are, with a typescript api.

PostgreSQL has been chosen for the database, mainly because a relational database seemed logical at the time (although possibly I should have given more thought to this...), I am already proficient in it (to make development quicker), and it is supported out of the box on Heroku, where I plan to deploy.