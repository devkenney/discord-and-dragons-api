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

module.exports = router;