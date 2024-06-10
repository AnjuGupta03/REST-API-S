const mongoose = require('mongoose');

//connection of mongos

async function connectMonogoDb(url) {
  return mongoose.connect(url);
}

module.export = {
  connectMonogoDb,
};