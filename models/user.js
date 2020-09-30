const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
  userId: {type: String, required: true},
  password: {type: String, required: true},
  characterSheets: [{
    sheetId: {type: String},
    groupId: {type: String}
  }],
  groupIds: [{type: String}]
});

const User = mongoose.model('User', userSchema);

module.exports = User;