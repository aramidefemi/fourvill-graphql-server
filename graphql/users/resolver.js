const users = require("../../models/users");

const Query = {
  users: () => users.find(),

  //resolver function for studentbyId
  userById: (root, args, context, info) => {
    //args will contain parameter passed in query
    return users.find({ id: args.id });
  }
};

// db.students.find()[0]['_id'].valueOf()
const User = {

};
const Mutation = {
  createUser: (root, args, context, info) => {
    users.create(
      {
        email: args.email
        
      },
      err => console.log(err)
    );

    return users.find({ email: args.email });
  }
};
module.exports = { Query, Mutation, User };
