const workspaces = require("../../models/workspaces");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const key = "ALLMYTHOUGHTSARELOCKEDUP";

const Mutation = {
  createWorkspace:(root,args,context,info) => {
       const value = args.params;

       return  workspaces.create(value)
        .then(res=> {

          return {
            status : true,
            message: 'completed',
            payload: res._id
          }
        })
    }
 }

const Query = {
  workspaces: () => workspaces.find(),
  workspaceByUrl: (root, args, context, info) =>
    workspaces
      .findOne({
        url: args.url
      })
      .populate("users"),
  integrationsList: () =>integrations.find(),
  workspaceLogin: async (root, args, context, info) => {
    const { workspaceUrl, email, password } = args.params;

    var workspaces = await workspaces
      .findOne({
        url: workspaceUrl
      })
      .populate({
        path: "users",
        match: { email: email },
        options: { limit: 5 }
      })
      .exec()
      .then(res => res);

      if(workspaces){
         return {
            status:  false,
            message: 'user does not exist on this workspace',
         }
      }
 
    var passwordVerification = await bcrypt
      .compare(password, user.password)
      .then(res => res);

    if (passwordVerification) {
      return {
         status:  false,
         message: 'password does not match the password on this account',
      }
    }

      var token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 72,
          data: user
        },
        key
      );

      return {
        user: workspaces,
        token: token,
        status: true
      };
    } 
  
};


 

module.exports = { Query, Mutation };
