import moogoose from 'mongoose';

const connectToMongoose = async () => {
    try {
        console.log("Connecting to Mongoose...")
        await moogoose.connect(process.env.MONGO_URI) // Convert MONGO_URI to string
        console.log(`Mongoose is connected`)
    } catch (error) {
        console.log("Internal Server Mongoose Error", error.message)
    }
}

export default connectToMongoose