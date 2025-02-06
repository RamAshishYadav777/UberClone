const useModel = require('../models/user.model');


module.exports.createUser = async ({
  firstname, lastname, email, password
}) => {
   if (!firstname || !email || !password) {
    throw new Error('All field are required');
   }
   const user = useModel.create({
    fullname: {
      firstname,
      lastname
    },
    email,
    password
   })

   return user;
}