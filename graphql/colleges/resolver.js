const db = require('../../models/db')
const Query = { 
   colleges:() => db.students.find(), 

   //resolver function for studentbyId
   collegeById:(root,args,context,info) => {
      //args will contain parameter passed in query
      return db.students.find({"id":args.id});
   }
}
 

//  const Mutation = {
//     createStudent:(root,args,context,info) => {
//        return db.students.create({collegeId:args.collegeId,
//        firstName:args.firstName,
//        lastName:args.lastName})
//     }
//  }
module.exports = {Query}