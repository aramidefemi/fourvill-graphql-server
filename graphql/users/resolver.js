const users = require('../../models/users');

const Query = { 
   users:() => users.find(), 

   //resolver function for studentbyId
   userById:(root,args,context,info) => {
      //args will contain parameter passed in query
      return users.find({"id":args.id});
   }
}
 
//db.students.find()[0]['_id'].valueOf()
//  const Mutation = {
//     createStudent:(root,args,context,info) => {
//        return db.students.create({collegeId:args.collegeId,
//        firstName:args.firstName,
//        lastName:args.lastName})
//     }
//  }
module.exports = {Query}