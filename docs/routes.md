# Routes

The following routes are defined for this api.

## 📖 Books

- [Sample API Calls](../src/books/books.rest)

### DELETE

`/book/:id` - delete book by id

### GET

`/book/google/search` - books from a google search.

The request body takes in a title and an author (both or either works)

```json
{
	"title":"stormlight archive",
	"author":"sanderson"
}
```

`/book/google/:id` - book with google book id

`/book/all` - all books in the database

`/book/:id` - book by id

### PATCH

`/book/:id` - update book in database

### POST

`/book/add` - add book to database

## 👤 Users

(not yet!)

### GET

`/users` - all users

`/user/:userId` - an individual user GET by id

### POST

`/user` - create a new user

```json
{
    "username": "Marty_McFly",
    "password": "this_is_heavy",
    "email": "outta_time@1985.com"
}
```
