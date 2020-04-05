# Bibliofile Api
API for bibliophiles

This readme is obviously a WIP, right now I'm just writing notes to myself about what I need to include 😅

## Installation & Setup

To install this api, fork or clone this repository and run the command:

```
$ npm i
```
This should install the dependencies.

The database is [MongoDB](https://docs.mongodb.com/manual/installation/).

In the repository there is a sample environment file, under `~/.env.sample`. This file should be duplicated and renamed to simply `.env`. Then , the variables should be filled out, using the sample as a guide.

## How To Use

To Run the Server, run the command in your command line:

```
$ npm start
```

This will start the server. The api by default runs on the port `localhost:3003` (mainly because 3 is my favourite number)

## Routes

The following routes are defined for this api:

### Books

#### GET

`/books` - books from a search.

The request body takes in a title and an author

```
{
	"title":"stormlight archive",
	"author":"sanderson"
}
```

`/book/:id` - book with google book id

## Tests

I haven't created any tests yet (or I have but haven't talked about them here because I am lazy to update the documentation...), but I am planning to use the `Mocha` testing framework with `Chai`.

To run all the tests, run the code:

```
$ npm test
```

## How It's Built

Bibliofile Api is build using Typescript! Mainly because I enjoy types. But also because I thought that creating a C# ASP.net Core backend would take me too long to do. I would have liked to have given Crystal a try, but I was worried there wouldn't be enough dependencies or support for it. I am totally going to try Crystal one of these days. But yes, here we are, with a typescript api.

MongoDB has been chosen for the database because I had some troubles with PostgreSQL on my computer. Heh. Yeah. I am using that [Cloud Atlas](https://www.mongodb.com/cloud/atlas) service to host my production database, as they have a free tier.
