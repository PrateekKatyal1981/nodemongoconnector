const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb+srv://prateekkatyal:Scorpio%402910@cluster0.rwis2.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'myDatabase';

async function main() {
  // Use connect method to connect to the server
  try {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  await listCollections(db); 
  await listDatabases(client);
    
  // Perform operations on the database here
  }
  catch (e) {
    console.error(e);
  }
  finally {
    await client.close();
  }

  
}

main().catch(console.error);

async function listCollections(db) {
    const collections = await db.listCollections().toArray();
    console.log('Collections:');
    collections.forEach(collection => console.log(` - ${collection.name}`));
  }
  
  async function listDatabases(client){
      const databasesList = await client.db().admin().listDatabases();
      console.log("Databases:");
      databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  }