const fs = require('fs')
const {makeExecutableSchema} = require('graphql-tools')
const { merge } = require('lodash');

const students_schema = fs.readFileSync('./graphql/students/schema.graphql',{encoding:'utf-8'})
const students_resolvers = require('./graphql/students/resolver')

const colleges_schema = fs.readFileSync('./graphql/colleges/schema.graphql',{encoding:'utf-8'})
const colleges_resolvers = require('./graphql/colleges/resolver')

var typeDefs =  students_schema+colleges_schema

var resolvers  = {...students_resolvers, ...colleges_resolvers}


var resolvers = {}; 
const schema = makeExecutableSchema({typeDefs, resolvers: merge(resolvers,students_resolvers,colleges_resolvers)});

module.exports = schema;