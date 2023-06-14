# Welcome to Dogs API!

## Technologies used
- Node.js<br/>
- Express.js<br/>
- Sequelize<br/>
- TypeScript<br/>
- JavaScript<br/>
- Jest & Supertest for unit tests

## Installation

1. Clone (or fork and clone) the repository
2. Create your own `.env` file based on `.env.example` file
4. Run `npm install` in your terminal to download all the packages and dependencies
5. Run `npm run seed:undo` to clear the database
6. Run `npm run seed` to seed the database with initial data
5. Run `npm run dev` in your terminal to start the development server
6. Enjoy!

## Docs

`GET /ping` - Use this endpoint to ping the API.

Request example:
```sh
`GET /ping`
```

Response example:
```sh
Dogshouseservice.Version1.0.1
```
<br/>

`GET /dogs` - Use this endpoint to get dogs. You can also use the following search params:<br/>
- `attribute` to specify the attribute for sorting<br/>
- `order` to specify the order direction<br/>
- `pageNumber` to apply pagination and specify the desired page<br/>
- `limit` to specify the quantity of dogs per page<br/>

Request example:
```sh
GET /dogs?attribute=tail-length&order=desc&pageNumber=2&limit=2
```

Response example:
```sh
[
  {
    name: "Rex",
    color: "red",
    tail_length: 6,
    weight: 12
  },
  {
    name: "Carak",
    color: "gray",
    tail_length: 4,
    weight: 10
  }
]
```

<br/>

`POST /dog` - Use this endpoint to create new dog. You should pass the following data in request body:<br/>
- `name` (it should be unique)<br/>
- `color`<br/>
- `tail_length`<br/>
- `weight`<br/>

Request URL example:
```sh
GET /dog?attribute=tail-length&order=desc&pageNumber=2&limit=2
```

Request body example:
```sh
{
  name: "Max",
  color: "white",
  tail_length: 11,
  weight: 15
},
```

## Contacts
Feel free to contact the developer. Here are some links:<br/>
- [GitHub](https://github.com/rashyd-hasratov)<br/>
- [LinkedIn](https://www.linkedin.com/in/rashyd-hasratov/)<br/>