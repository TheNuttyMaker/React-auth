const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_URI;
let mongoClient; 

// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });


// let client;

export const initializeDbConnection = async () => {
    try {
        mongoClient = await connectToCluster(uri);
    } finally {
        await mongoClient.close();
    }

    // client = await MongoClient.connect('mongodb://localhost:27017', {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // });
}

export async function connectToCluster(uri) {
    let mongoClient;
 
    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
 
        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
 }

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}





// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://pygold:<password>@react-auth-cluster.qxsdvw2.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
