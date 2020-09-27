const mongoose = require('mongoose')

const sheetSchema = new mongoose.Schema ({
  discordId: {type: String, required: true},
  names: {
    character: {type: String, required: true},
    player: {type: String, required: true}
  },
  characterInfo: {
    descriptors: {
      description: {type: String, required: true},
      sex: {type: String, required: true},
      age: {type: Number},
      height: {type: String},
      weight: {type: Number},
      hair: {type: String},
      skin: {type: String}
    },
    alignment: {type: String, required: true},
    background: {type: String, required: true},
    race: {type: String, required: true},
    class: {type: String, required: true},
    level: {type: Number, required: true},
    experience: {type: Number}
  },
  stats: {
    strength: {
      score: {type: Number, required: true},
      modifier: {type: Number, required: true}
    },
    dexterity: {
      score: {type: Number, required: true},
      modifier: {type: Number, required: true}
    },
    constitution: {
      score: {type: Number, required: true},
      modifier: {type: Number, required: true}
    },
    intelligence: {
      score: {type: Number, required: true},
      modifier: {type: Number, required: true}
    },
    wisdom: {
      score: {type: Number, required: true},
      modifier: {type: Number, required: true}
    },
    charisma: {
      score: {type: Number, required: true},
      modifier: {type: Number, required: true}
    }
  },
  proficiencies: {
    otherProficiencies: [{type: String, required: true}],
    skillProficiencies: [{type: String, required: true}]
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
      totalHitPoints: {type: Number, required: true},
      tempHitPoints: {type: Number},
      hitDice: {type: String},
    },
    initiative: {type: String},
    speed: {type: Number}
  }
});

const Sheet = mongoose.model('Sheet', sheetSchema);

module.exports = Sheet;