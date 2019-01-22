const db = require('../../models/db')
const Query = {
   //resolver function for greeting
   greeting:() => "fourvill graphql api",
   students:() => db.students.find(), 

   //resolver function for studentbyId
   studentById:(root,args,context,info) => {
      //args will contain parameter passed in query
      return db.students.find({"id":args.id});
   }
}
//for each single student object returned,resolver is invoked


const Student = {
   fullName:(root,args,context,info) => {
      return root.firstName+":"+root.lastName
   },
   college:(root) => {
    return db.colleges.find({"id":root.collegeId});
    }
}



//  const Mutation = {
//     createStudent:(root,args,context,info) => {
//        return db.students.create({collegeId:args.collegeId,
//        firstName:args.firstName,
//        lastName:args.lastName})
//     }
//  }
module.exports = {Query,Student}