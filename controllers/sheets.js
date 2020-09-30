const express = require('express');
const router = express.Router();
const Sheet = require('../models/sheet');
const Group = require('../models/group');

// INDEX

// NEW

// DELETE

// UPDATE

// CREATE

// find the group that the player is in
router.post('/', (req, res) => {
  Group.findOne({
    'playerCharacters.id': {
      '$in': [req.body.pc]
    }
  }, (error, foundGroup) => {
    if (error) {
      console.error(error);
    } else {
      for (let pc of foundGroup.playerCharacters) {
        if (pc.id === req.params.pc && pc.sheetId != '') {
          res.send({
            error: 'You already have a character sheet associated with your account!'
          })
        } else {
          Sheet.create({
            playerId: req.body.pc,
            groupId: foundGroup._id
          })
        }
      }
    }
  })
})


// create a new sheet with the group id and player id
// update the group with the sheet id

// SHOW