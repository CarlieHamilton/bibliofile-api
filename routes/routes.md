# Routes

The following routes are defined for this api:

## 📖 Books

### GET

`/books` - books from a search.

The request body takes in a title and an author

```json
{
	"title":"stormlight archive",
	"author":"sanderson"
}
```

`/book/:id` - book with google book id

## 👤 Users

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
