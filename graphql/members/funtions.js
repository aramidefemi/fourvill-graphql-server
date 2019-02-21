const members = require("../../models/members");

class MemberFuctions {
  create(params, password) {
    members.create({
      email: params.email,
      password: password,
      emailVerification: false,
      availability: true,
      workspaceUrl: params.workspaceUrl,
      role: params.role
    });
  }

  findByEmailAndworkspace(email, url) {
    return new Promise((resolve, reject) => {
      var res = members.findOne({ email: email, workspaceUrl: url }).exec();

      res
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

module.exports = MemberFuctions;
