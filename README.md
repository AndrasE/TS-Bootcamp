<h3 align="center">
  <a href="https://andrase.github.io/firsty/" target="_blank" rel="noopener noreferrer">
  <img src="https://github.com/AndrasE/raw-readme/blob/36809e099018f4297ae710817bab6e90dc8c9737/logo/ts-bootcamp-readme.png" width="230px">
  </a>
<br/>
  
Typescript Bootcamp: Beginner To Advanced (2024 Edition)

</h3>

## Hi there 👋

It was a cource on **[Udemy](https://www.udemy.com/course/complete-typescript-2-course/)** created by [Angular University](https://github.com/angular-university/typescript-course).

### Key lectures 📚

- In-depth exploration of the TypeScript language, including its most advanced features
- Comprehensive coverage of Object-Oriented Programming, Generics, and Decorators
- Building a REST API using Express and TypeORM

👉 For more in-depth notes, check out **[my TypeScript notes](https://github.com/AndrasE/TS-Bootcamp/blob/main/justsomeTypeScript.pdf)**.


## Run the REST API Project 🚀

Clone the Repository: 

`
$ git clone https://github.com/AndrasE/TS-Bootcamp
`

`
$ cd PROJECTNAME/rest-api
`

Install Dependencies:

`
$ npm install
`

Database Setup: Create a SQL database (I used Render, free for two weeks, after need to create a new one).

Environment Configuration: Create a .env file in the project root and add your credentials:

```env
NODE_ENV=development // Keep it as it is
3000 // Keep it as it is
OGGER_LEVEL=debug // Keep it as it is
DB_HOST=Render
DB_PORT= Render
DB_USERNAME=Render
DB_PASSWORD=Render
DB_NAME=Render
JWT_SECRET=create-a-strong-secret-token
```

Serving the app:

`
npm run dev
`

Obtaining a JWT Key:

`
curl -X POST http://localhost:3000/api/login -H "Content-Type: application/json" -d '{"email": "test@angular-university.io", "password": "test"}'
`

Making Authenticated Requests

`
curl -X GET http://localhost:3000/api/courses \
-H "Authorization: your_jwt_key_here""
`
