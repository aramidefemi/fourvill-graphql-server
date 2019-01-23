const fs = require('fs')
const {makeExecutableSchema} = require('graphql-tools')
const { merge } = require('lodash');

const users_schema = fs.readFileSync('./graphql/users/schema.graphql',{encoding:'utf-8'})
const users_resolvers = require('./graphql/users/resolver')


var typeDefs =  users_schema

var resolvers = {}; 
const schema = makeExecutableSchema({typeDefs, resolvers: merge(resolvers,users_resolvers)});

module.exports = schema;