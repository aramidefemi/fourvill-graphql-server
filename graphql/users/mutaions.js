const users = require("../../models/users"); 
const emailer = require('../../service/emailer');
const bcrypt = require("bcrypt");
const saltRounds = 10;
 
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
        emailVerification: false,
        // profilePicture: args.params.profilePicture,
        timezone: args.params.timezone,
        authenticationType: args.params,
        availability: true,
        workspaceUrls: args.params.workspaceUrls,
        businessType: args.params.businessType,
        role: args.params.role
      });

      emailer({
        receiver: args.params.email,
        subject: 'Welcome to fourvill',
        body: 'So.... hey ya!'
      });
    
      return {
        status: true,
        message: "registration complete",
        // payload: person
      };
    }
  },
  verifyEmail: (root, args, context, info) => {
    var email =  args.email;
    users.update({email:email},{emailVerification: true});
    return {
        status: true,
        message: "verification complete"
    }
  }
};
module.exports = Mutation;

// MyModel.update({ age: { $gt: 18 } }, { oldEnough: true }, fn);