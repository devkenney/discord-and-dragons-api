const express = require('express');
const router = express.Router();
const Sheet = require('../models/sheet');
const Group = require('../models/group');

// INDEX

// NEW

// DELETE

// UPDATE

// =====INFO===== //
router.put('/update/info', (req, res) => {
  console.log(req.body);
  Sheet.findOneAndUpdate({
      playerId: req.body.playerId
    }, {
      "$set": {
        "characterInfo": req.body.characterInfo,
        "names": req.body.names
      }
    },
    (error, oldSheet) => {
      console.log(oldSheet);
      if (error) {
        console.error(error);
      } else {
        Sheet.findById(oldSheet._id, (error, newSheet) => {
          console.log(newSheet);
          res.send(newSheet);
        });
      }
    }
  )
})

// CREATE

// find the group that the player is in
router.post('/', (req, res) => {
  Group.findOne({
    'playerCharacters.playerId': {
      '$in': [req.body.playerId]
    }
  }, (error, foundGroup) => {
    console.log(foundGroup)
    if (error) {
      console.error(error);
    } else {
      if (foundGroup) {
      for (let pc of foundGroup.playerCharacters) {
        console.log(pc);
        console.log(req.body.playerId);
        if (pc.playerId === req.body.playerId && pc.sheetId != '') {
          res.send({
            error: 'You already have a character sheet associated with your account!'
          })
        } else if (pc.playerId === req.body.playerId) {
          console.log('creating sheet...')
          Sheet.create({
            playerId: req.body.playerId,
            groupId: foundGroup._id
          }, (error, newSheet) => {
            if (error) {
              console.error(error);
            }
            console.log(newSheet);
            let pcIndex = ''
            for (let indexOfPc in foundGroup.playerCharacters) {
              console.log(indexOfPc)
              console.log(req.body.playerId);
              console.log(foundGroup.playerCharacters[indexOfPc].playerId);
              if (foundGroup.playerCharacters[indexOfPc].playerId === req.body.playerId) {
                pcIndex = indexOfPc;
              }
            }
            Group.findOneAndUpdate({
              "_id": foundGroup._id,
              "playerCharacters.playerId": newSheet.playerId
            }, {
              "$set": {
                "playerCharacters.$.sheetId": newSheet._id
              }
            }, (error) => {
              if (error) {
                console.error(error)
              } else {
                console.log('test');
              }
            })
          });

          res.send({
            reply: 'Sheet created successfully!'
          })
        }
      }
    } else {
      res.send({
        error: 'You aren\'t in a group! You should join one!'
      })
    } 
    }
  })
})


// create a new sheet with the group id and player id
// update the group with the sheet id

// SHOW

router.get('/show/:id', (req, res) => {
  Sheet.findOne({
    playerId: req.params.id
  }, (error, foundSheet) => {
    console.log(foundSheet);
    if (foundSheet != undefined) {
      // console.log(foundSheet);
      res.send(foundSheet);
    } else {
      console.log('test');
      res.send({
        error: 'No sheet found. Try joining a group!'
      })
    }
  })
})

module.exports = router;