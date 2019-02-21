const members = require("../../models/members");
const workspaces = require("../../models/workspaces");

const MF = require("./funtions");

MemberFuctions = new MF();

const emailer = require("../../service/emailer");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const Mutation = {
  createMember: (root, args, context, info) => {
    return new Promise((resolve, reject) => {
      MemberFuctions.findByEmailAndworkspace(
        args.params.email,
        args.params.workspaceUrl
      ).then(res => {
        if (res) {
          reject({
            status: false,
            message: "this email is already in use within this workspace"
          });
        } else {
          bcrypt
            .hash(args.params.password, saltRounds)
            .then(hash => {
              MemberFuctions.create(args.params, hash);
              resolve({
                status: true,
                message: "registration complete",
                payload: {
                  helper:
                    "make a simple login request to get user token and login, you could hav done this in a batch"
                }
              });
            })
            .catch(err => {
              reject({
                status: false,
                message: "sorry password could not be secured, please try again"
              });
            });
        }
      });
    })
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  },

  verifyEmail: (root, args, context, info) => {
    var email = args.email;
    members.update({ email: email }, { emailVerification: true });
    return {
      status: true,
      message: "verification complete"
    };
  }
};
module.exports = Mutation;
// emailer({
//   receiver: args.params.email,
//   subject: 'Welcome to fourvill',
//   body: 'So.... hey ya!'
// });
// MyModel.update({ age: { $gt: 18 } }, { oldEnough: true }, fn);
