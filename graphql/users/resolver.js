const users = require("../../models/users");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const key = "ALLMYTHOUGHTSARELOCKEDUP";

const Query = {
  users: () => users.find(),

  userById: (root, args, context, info) =>
    users.findOne({
      _id: args.id
    }),

  login: async (root, args, context, info) => {
    var user = await users
      .findOne({
        email: args.params.email
      })
      .exec()
      .then(res => res);

    var passwordVerification = await bcrypt.compare(
      args.params.password,
      user.password,
    ).then(res=>res)

    if(passwordVerification){
      var token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 72,
          data: user
        },
        key
      );
  
      return {
        user: user,
        token: token,
        status: true
      };
    }else {
      return { 
        status: false
      };
    }

  },
  unlockToken: (root, args, context, info) =>
    jwt.verify(args.token, key)["data"]
};

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

      var password = await bcrypt.hash(
        args.params.password,
        saltRounds,
      ).then( (hash) => {
        return hash;
      })
      console.log(password)

      users.create({
        email: args.params.email,
        userName: args.params.userName,
        fullName: args.params.fullName,
        password: password,
        // profilePicture: args.params.profilePicture,
        timezone: args.params.timezone,
        authenticationType: args.params,
        availability: true,
        workspaceUrls: args.params.workspaceUrls,
        businessType: args.params.businessType,
        role: args.params.role
      });

      return {
        status: true,
        message: "registration complete"
      };
    }
  }
};
module.exports = { Query, Mutation, User };
