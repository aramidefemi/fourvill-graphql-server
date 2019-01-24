const users = require("../../models/users");

const Query = {
  users: () => users.find(),

  //resolver function for studentbyId
  userById: (root, args, context, info) => users
                      .findOne({ 
                        email: args.params.email,
                        password: args.params.password
                      }),
  login: (root, args, context, info) => users
                      .findOne({ 
                        email: args.params.email,
                        password: args.params.password
                       }),
  
};

// db.students.find()[0]['_id'].valueOf()
const User = {};
const Mutation = {
  createUser: async (root, args, context, info) => {
    var res = users.findOne({ email: args.params.email }).exec();
    var body = await res.then(res => {
      return res;
    });

    if (body) {
      return {
        status: false,
        message: "this email is already in use"
      };
    } else {
      users.create(
        {
          email: args.params.email,
          userName: args.params.userName,
          fullName: args.params.fullName,
          password: args.params.password,
          // profilePicture: args.params.profilePicture,
          timezone: args.params.timezone,
          authenticationType: args.params,
          availability: true,
          workspaceUrls: args.params.workspaceUrls,
          businessType: args.params.businessType,
          role: args.params.role
        },
      );

      return {
        status: true,
        message: "registration complete"
      };
    }
  }
};
module.exports = { Query, Mutation, User };
