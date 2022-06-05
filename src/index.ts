import express from 'express';
import { graphqlHTTP, Options } from 'express-graphql';
import schema from './graphql/schema';

const PORT = 3000;
const ROUTE = '/graphql';

const app = express();

const grapqlHttpOptions: Options = {
    schema,
    graphiql: true, // optional
    // optional: validationRules: [NoSchemaIntrospectionCustomRule],
};

app.use(ROUTE, (req, res, next) => {
    graphqlHTTP(grapqlHttpOptions)(req, res).catch(next);
});

app.listen(PORT);

console.log(`Running a GraphQL API server at http://localhost:${PORT}${ROUTE}`);