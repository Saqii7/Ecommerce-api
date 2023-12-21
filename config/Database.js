const mongoose = require('mongoose');
const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL,
        // {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,

        // } 
        ).then(()=> {console.log("MongoDB  Connected")}).catch(()=>{
            console.log("error in connection");
        })
    }
module.exports = connectDatabase;