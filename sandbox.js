const { MongoClient, ServerApiVersion } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "lecture-demo";

const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = async () => {
  try {
    await client.connect();
    // await client.db(dbName).command({ ping: 1 });

    const usersCollection = client.db(dbName).collection("users");
    // const users = await usersCollection.findOne({ name: "rule" });
    const users = await usersCollection.find().toArray();
    console.log(users);
    console.log("success");
  } catch (err) {
  } finally {
    await client.close();
  }
};

run().catch(console.dir);
