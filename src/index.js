const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/projectSchema');
const resolvers = require('./resolvers/projectResolver');


//mongodb+srv://jacatorresre:admin@cluster0.4bnuo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const startServer = async () => {
  await mongoose.connect('mongodb+srv://jacatorresre:admin@cluster0.4bnuo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  const server = new ApolloServer({typeDefs, resolvers});
  server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
  })  
};

startServer();