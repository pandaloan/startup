const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const scoreCollection = db.collection('score');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addScore(score) {
  const result = await scoreCollection.insertOne(score);
  return result;
}

function getScores() {
    
    const options = { limit: 10}
    const cursor = scoreCollection.find( {} , options);
    return cursor.toArray();
}

function getHighScores() {
    //const query = { score: { $gt: 0, $lt: 900 } }; // ??
  const query = { score: {$lt: 0, $gt: 900} };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

module.exports = { addScore, getScores }; // module.exports = { addScore }; module.exports = { addScore, getScores }; 