const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

var mongoose = require("mongoose");
const db = mongoose
  .connect("mongodb://localhost/test")
  // .connect("mongodb://aramide:aramide98@ds111065.mlab.com:11065/fourvill")
  .then(() => {
    console.log("Database connection successful");
  })
  .catch(err => {
    console.error("Database connection error");
  });

  
const port = process.env.PORT || 9002;
const app = express();

const schema = require("./graphql-config");

app.use(cors(), bodyParser.json());

const { graphiqlExpress, graphqlExpress } = require("apollo-server-express");
app.use("/graphql", graphqlExpress({ schema }));
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen(port, () => console.info(`Server started on port ${port}`));
