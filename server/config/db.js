
const mongoose = require("mongoose")
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database Connected');
    } catch(error) {
        console.error("Database not connected", error.message);
        process.exit(1);
    }
}

module.exports =  connectDB