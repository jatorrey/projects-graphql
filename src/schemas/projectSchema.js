const { gql } = require('apollo-server');

const typeDefs = gql`
    type Project {
        _id: ID!
        title: String!
        description: String!
        completed: Boolean!
    }

    type Query {
        projects: [Project!]!
    }

    type Mutation {
        createProject(title: String!, description: String!): Project!
        updateProject(_id: ID!, description: String!, completed: Boolean!): Project!
        deleteTask(_id: ID!): Project!
    }
`;

module.exports = typeDefs;