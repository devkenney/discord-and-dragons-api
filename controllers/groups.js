const express = require('express');
const router = express.Router();
const Group = require('../models/group');

// INDEX

// NEW

// DELETE
router.delete('/:dungeonMaster', (req, res) => {
  console.log(req.body);
  Group.findOne({
    dungeonMaster: req.params.dungeonMaster
  }, (error, foundGroup) => {
    if (error) {
      console.error(error);
    } else {
      console.log(foundGroup);
      if (foundGroup) {
        Group.findByIdAndDelete(foundGroup._id, () => {
          res.send({
            reply: 'Your group was deleted successfully.'
          })
        });
      } else {
        res.send({
          error: 'It doesn\'t look like you own a group! Maybe try making one?'
        })
      }
    }
  })
})

// UPDATE

// =====DESCRIPTION=====
router.put('/description/:dungeonMaster', (req, res) => {
  console.log(req.body);
  Group.findOne({
    dungeonMaster: req.params.dungeonMaster
  }, (error, foundGroup) => {
    if (error) {
      console.error(error);
    } else {
      if (foundGroup) {
        Group.findByIdAndUpdate(foundGroup._id, {
          description: req.body.description
        }, (error, updatedGroup) => {
          if (error) {
            console.error(error);
          } else {
            res.send({
              reply: 'description successfully updated!'
            })
          }
        })
      } else {
        res.send({
          error: 'It doesn\'t look like you own a group. Maybe try making one?'
        })
      }
    }
  })
})

// =====PLAYERS=====

router.put('/players/:dungeonMaster', (req, res) => {
  if (req.body.playerId) {
    Group.findOne({
      dungeonMaster: req.params.dungeonMaster
    }, (error, foundGroup) => {
      if (foundGroup) {
        Group.findByIdAndUpdate(foundGroup._id, {
          '$push': {
            playerCharacters: {
              id: req.body.playerId,
              sheetId: ''
            }
          }
        }, (error, updatedGroup) => {
          if (error) {
            console.error(error);
          } else {
            res.send('Player successfully added!')
          }
        })
      } else {
        res.send('It doesn\'t look like you own a group...You should totally make one!')
      }
    })
  }
})

// =====SHEETS=====

router.put('/sheets/:dungeonMaster', (req, res) => {

})

// CREATE

router.post('/', (req, res) => {
  console.log(req.body);
  Group.findOne({
    dungeonMaster: req.body.dungeonMaster
  }, (error, foundGroup) => {
    if (error) {
      console.error(error);
    } else {
      if (foundGroup) {
        res.send({
          error: 'You already own a group! To see info on it use the command ____'
        })
      } else {
        Group.create(req.body, (error, createdGroup) => {
          if (error) {
            console.error(error);
          } else {
            console.log(createdGroup);
            res.send(createdGroup)
          }
        })
      }
    }
  })

});

// SHOW
router.get('/pc/:pc', (req, res) => {
  Group.findOne({
    'playerCharacters.id': {
      '$in': [req.params.pc]
    }
  }, (error, foundGroup) => {
    if (error) {
      console.error(error);
    } else {
      if (foundGroup) {
        res.send(foundGroup)
      } else {
        res.send({
          error: 'It doesn\'t look like you\'re a part of a group! You must join one to use this command.'
        })
      }
    }
  })
})

router.get('/dm/:dm', (req, res) => {
  Group.findOne({
    dungeonMaster: req.params.dm
  }, (error, foundGroup) => {
    if (error) {
      console.error(error);
    } else {
      if (foundGroup) {
        res.send(foundGroup);
      } else {
        res.send({
          error: 'It doesn\'t look like you own any groups! Try making one!'
        })
      }
    }
  })
})

module.exports = router;