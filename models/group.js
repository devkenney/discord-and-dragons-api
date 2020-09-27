const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema ({
  playerCharacters: [{
    id: {type: String},
    sheetId: {type: String}
  }],
  dungeonMaster: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String},
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;