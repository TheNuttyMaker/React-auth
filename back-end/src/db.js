// const { MongoClient } = require('mongodb');
import { MongoClient } from 'mongodb';


let client;

export const initializeDbConnection = async () => {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    
    const uri = process.env.DB_URI + '?retryWrites=true&w=majority';

    client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);

        const user = await findOneListingByName(client, "ALPINE");
        // const db = getDbConnection('sample_trainings');
        // const user = await db.collection('zips').findOne({city: 'ALPINE'});
        console.log(user);
 
    } catch (e) {
        console.error(e);
    }
}

// initializeDbConnection().catch(console.error);

async function findOneListingByName(client, nameOfListing) {
    const listing = await client.db("sample_training").collection("zips")
        .findOne({city: nameOfListing});

    if(listing) {
        console.log(`Found a listing with a name of ${nameOfListing} /n`);
        console.log(listing);
    } else {
        console.log(`No Listing found with name of ${nameOfListing} `);
    }
}

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    if(databasesList.length >= 1) {
        databasesList?.databases?.forEach(db => console.log(` - ${db.name}`));
    };
};


export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}

export async function closeDbConnection() {
    await client.close();
}
