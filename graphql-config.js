const fs = require("fs");
const { makeExecutableSchema } = require("graphql-tools");
const { merge } = require("lodash");

const members_schema = fs.readFileSync("./graphql/members/schema.graphql", {
  encoding: "utf-8"
});
const folders_schema = fs.readFileSync(
  "./graphql/folders/schema.graphql",
  { encoding: "utf-8" }
);
const projects_schema = fs.readFileSync(
  "./graphql/projects/schema.graphql",
  { encoding: "utf-8" }
);
const spaces_schema = fs.readFileSync(
  "./graphql/spaces/schema.graphql",
  { encoding: "utf-8" }
);
const workspaces_schema = fs.readFileSync(
  "./graphql/workspaces/schema.graphql",
  { encoding: "utf-8" }
);



const members_resolvers = require("./graphql/members/resolver");
const workspaces_resolvers = require("./graphql/workspaces/resolver");
const folders_resolvers = require("./graphql/folders/resolver");
const spaces_resolvers = require("./graphql/spaces/resolver");
const projects_resolvers = require("./graphql/projects/resolver");

var typeDefs =
  members_schema +
  spaces_schema +
  workspaces_schema +
  projects_schema +
  folders_schema;

var resolvers = {};
const schema = makeExecutableSchema({
  typeDefs,
  resolvers: merge(
    resolvers,
    members_resolvers,
    workspaces_resolvers,
    folders_resolvers,
    spaces_resolvers,
    projects_resolvers
  )
});

module.exports = schema;
