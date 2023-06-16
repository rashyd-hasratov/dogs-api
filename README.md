# Welcome to Dogs API!

## Technologies used
- Node.js<br/>
- Express.js<br/>
- Sequelize<br/>
- TypeScript<br/>
- JavaScript<br/>
- Jest & Supertest for unit tests

## Deployment
- [Postgresql](https://www.postgresql.org/) database was deployed on [Railway](https://railway.app/) platform
- The API was deployed on [Railway](https://railway.app/) platform. [Try it!](https://dogs-api-production-2142.up.railway.app/)

## Installation

1. Clone (or fork and clone) the repository
2. Create your own `.env` file based on `.env.example` file
3. Run `npm install` in your terminal to download all the packages and dependencies
4. Run `npm run dev` in your terminal to start the development server
5. Enjoy!
- To clear the database run npm run seed:undo<br/>
- To fill the database with some initial data run npm run seed<br/>
- To test the api run npm run test

## Docs

`GET /ping` - Use this endpoint to ping the API.

Request example:
```sh
GET /ping
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