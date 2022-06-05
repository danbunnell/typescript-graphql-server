# Typescript GraphQL Server

This project is a working template for a GraphQL express server written  in Typescript.

## Instructions
Prepare the environment and start your server:
```sh
yarn install
yarn build 
yarn start
```

Visit: http://localhost:3000/graphql

In GraphiQL, run the following query:
```graphql
query test{
  login(email:"foo@test.com", password:"password123!"){
    token
  }
}
```

And expect the following output:
```json
{
  "data": {
    "login": {
      "token": "token for foo@test.com:password123!"
    }
  }
}
```