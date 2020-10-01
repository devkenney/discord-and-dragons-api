const mongoose = require('mongoose')

const sheetSchema = new mongoose.Schema ({
  playerId: {type: String},
  groupId: {type: String},
  names: {
    character: {type: String},
    player: {type: String}
  },
  characterInfo: {
    descriptors: {
      description: {type: String},
      gender: {type: String},
      age: {type: Number},
      height: {type: String},
      weight: {type: Number},
      hair: {type: String},
      skin: {type: String}
    },
    alignment: {type: String},
    background: {type: String},
    race: {type: String},
    charClass: {type: String},
    level: {type: Number},
    experience: {type: Number}
  },
  stats: {
    strength: {
      name: {type: String, default: 'strength'},
      score: {type: Number},
      modifier: {type: Number}
    },
    dexterity: {
      name: {type: String, default: 'dexterity'},
      score: {type: Number},
      modifier: {type: Number}
    },
    constitution: {
      name: {type: String, default: 'constitution'},
      score: {type: Number},
      modifier: {type: Number}
    },
    intelligence: {
      name: {type: String, default: 'intelligence'},
      score: {type: Number},
      modifier: {type: Number}
    },
    wisdom: {
      name: {type: String, default: 'wisdom'},
      score: {type: Number},
      modifier: {type: Number}
    },
    charisma: {
      name: {type: String, default: 'charisma'},
      score: {type: Number},
      modifier: {type: Number}
    }
  },
  proficiencies: {
    otherProficiencies: [{type: String}],
    skillProficiencies: [{type: String}]
  },
  combat: {
    attacks: [{type: String}],
    spells: {
      cantrips: {
        totalSlots: {type: Number},
        currentSlots: {type: Number},
        spellList: [{type: String}]
      },
      levelOne: {
        totalSlots: {type: Number},
        currentSlots: {type: Number},
        spellList: [{type: String}]
      },
      levelTwo: {
        totalSlots: {type: Number},
        currentSlots: {type: Number},
        spellList: [{type: String}]
      },
      levelThree: {
        totalSlots: {type: Number},
        currentSlots: {type: Number},
        spellList: [{type: String}]
      },
      levelFour: {
        totalSlots: {type: Number},
        currentSlots: {type: Number},
        spellList: [{type: String}]
      },
      levelFive: {
        totalSlots: {type: Number},
        currentSlots: {type: Number},
        spellList: [{type: String}]
      },
      levelSix: {
        totalSlots: {type: Number},
        currentSlots: {type: Number},
        spellList: [{type: String}]
      },
      levelSeven: {
        totalSlots: {type: Number},
        currentSlots: {type: Number},
        spellList: [{type: String}]
      },
      levelEight: {
        totalSlots: {type: Number},
        currentSlots: {type: Number},
        spellList: [{type: String}]
      },
      levelNine: {
        totalSlots: {type: Number},
        currentSlots: {type: Number},
        spellList: [{type: String}]
      },
      other: {
        ability: {type: Number},
        spellSave: {type: String},
        atkBonus: {type: Number}
      }
    },
    hitPoints: {
      totalHitPoints: {type: Number},
      tempHitPoints: {type: Number},
      hitDice: {type: String},
    },
    savingThrows: [{type: String}],
    initiative: {type: String},
    speed: {type: Number}
  },
  features: [{type: String}]
});

const Sheet = mongoose.model('Sheet', sheetSchema);

module.exports = Sheet;