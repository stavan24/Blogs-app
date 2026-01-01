const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Databse connected successfully ! \n DB Host : ${(await connectionInstance).connection.host} \n DB Name : ${connectionInstance.connection.name}`);
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
    process.exit(1);
    }
}

module.exports = connectDB;