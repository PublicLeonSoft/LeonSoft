// load environment variables
require('dotenv').config();
const {
    LEON_PORT: port,
    MONGODB_URI:mongodbURI
} = process.env; 

const Koa = require('koa'); 
const Router = require('koa-router');
const mongoose = require('mongoose'); 
   
const db = require('./db'); 
 
db.connect(); 
 
const api = require('./api'); 

const app = new Koa();
  
const router = new Router();
router.use('/api', api.routes()); 
 
   
app.use(router.routes());
app.use(router.allowedMethods()); 
 
app.listen(port, () => {  
    console.log('leonsoft server is listening to port '+process.env.LEON_PORT);
});   
 