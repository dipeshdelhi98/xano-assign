const express=require('express');
const { add, getAll, getById, update, deletebyid,getToken } = require('../controllers/user.controller');
const { onlyAdminCanAccess, AdminAndUserCanAccess } = require('../middlewares/user.middlewares');

const route=express.Router();


route.post('/add',add);

route.get('/gettoken/:id',getToken)

route.get('/',onlyAdminCanAccess,getAll)

route.get('/:id',AdminAndUserCanAccess,getById)

route.put('/:id',onlyAdminCanAccess,update)

route.delete('/:id',onlyAdminCanAccess,deletebyid)

module.exports=route;