require('dotenv').config()
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');

const { connectDB } = require('./db');

const app = express();

app.get('/', (req,res) => res.send('Welcome to my API.'));

module.exports = app;

async function start() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.get('*', (req,res) => res.status(404).send('Page Not Found'));

  app.listen(process.env.PORT, () => console.log(`Server Up on ${process.env.PORT}`));
  connectDB()
}; 
start()