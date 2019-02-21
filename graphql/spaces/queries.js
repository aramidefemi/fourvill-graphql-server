const spaces = require("../../models/spaces");


const Query = {
    spaces:()=> spaces.find(),
    spaceById: (root, args, context, info) => spaces.findOne({_id:args.id}),
    workspaceSpaces: (root, args, context, info) => spaces.findOne({workspaces:args.id}),
}
 
module.exports = Query;
