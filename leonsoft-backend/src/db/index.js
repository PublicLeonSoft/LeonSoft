const mongoose = require('mongoose');

const {  
    MONGODB_URI:mongodbURI
} = process.env;  



//MongoDB Configuration
const options = {
    autoIndex: false, // Don't build indexes
    reconnectTries: 30, // Retry up to 30 times
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useFindAndModify : false
    
  }


module.exports = (function (){
    
mongoose.Promise = global.Promise;
    
    return{
        connect () {
            
           mongoose.connect(mongodbURI,options
           ).then(
    
                (response) => {
                    
                    console.log('Successfully connected to mongodb');
                }
                 
            ).catch(e =>{
                console.error(e);
            });
        }
    }
})();
