const express = require('express');
const { AddUser, ShowUser, DeleteUser, UpdateUser, ShowOneUser } = require('../controllers/Users');
const route = express.Router();


route.get('/', ShowUser);

 route.delete('/:id', DeleteUser);

 route.put('/:id', UpdateUser);
 route.get('/:id',ShowOneUser)



module.exports = route 