const spaces = require("../../models/spaces");
 
 
const Mutation = {
    createSpace: (root, args, context, info) => spaces.create(args.params).then(res=>{
        if(res){
            return {
                status: true,
                message: 'space creation complete',
                payload: res
            }

        }else {
            return {
                status: false,
                message: 'space creation failed',
                payload: null
            }
        }
    })
};
module.exports = Mutation;
 