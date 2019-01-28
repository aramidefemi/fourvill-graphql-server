const users = require("../../models/users");
var jwt = require("jsonwebtoken"); 
const bcrypt = require("bcrypt"); 
const key = "ALLMYTHOUGHTSARELOCKEDUP";


const Query = {
  users: () => users.find(), 

  userById: (root, args, context, info) =>
    users.findOne({
      _id: args.id
    }),
  userByEmail: (root, args, context, info) =>
    users.findOne({
      email: args.email
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

 
module.exports = Query;
