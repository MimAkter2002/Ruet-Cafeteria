//const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
//const url="mongodb+srv://mimakterkhadiza1045:D8iB6Y%23hSJt94XW@cluster0.h7qrdrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const dbName = "test";
// const collectionName = "menuItems";
// const client = new MongoClient(url);

const connectDB = async () => {

  try {

    // await client.connect();
    // console.log("Connected to MongoDB");

    // // Access the database and collection
    // const database = client.db(dbName);
    // const collection = database.collection(collectionName);

    // // Get data (all documents)
    // const data = await collection.find({}).toArray();
    // console.log("Fetched data:", data);

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`MongoDB Connected: ${process.env.MONGO_URI}`);
    controller.getMenuItems();

  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;