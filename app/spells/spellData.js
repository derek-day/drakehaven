const spellData = [
  {
    id: '1',
    title: 'Fireball',
    level: '3rd-level',
    school: 'Evocation',
    casttime: '1 action',
    range: '150 feet',
    components: 'V, S, M (a tiny ball of bat guano and sulfur)',
    duration: 'Instantaneous',
    subtitle: "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame.",
    description:
      "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one."
  },
  {
    id: '2',
    title: 'Cure Wounds',
    level: '1st-level',
    school: 'Evocation',
    casttime: '1 action',
    range: 'Touch',
    components: 'V, S',
    duration: 'Instantaneous',
    subtitle: "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier.",
    description:
      "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs."
  },
  {
    id: '3',
    title: 'Mage Hand',
    level: 'Cantrip',
    school: 'Conjuration',
    casttime: '1 action',
    range: '30 feet',
    components: 'V, S',
    duration: '1 minute',
    subtitle: "A spectral, floating hand appears at a point you choose within range.",
    description:
      "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial."
  },
  {
    id: '4',
    title: 'Invisibility',
    level: '2nd-level',
    school: 'Illusion',
    casttime: '1 action',
    range: 'Touch',
    components: 'V, S, M (an eyelash encased in gum arabic)',
    duration: 'Concentration, up to 1 hour',
    subtitle: "A creature you touch becomes invisible until the spell ends.",
    description:
      "A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell."
  },
  {
  id: '5',
  title: 'Shield',
  level: '1st-level',
  school: 'Abjuration',
  casttime: '1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell',
  range: 'Self',
  components: 'V, S',
  duration: '1 round',
  subtitle: "An invisible barrier of magical force appears and protects you.",
  description:
    "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile."
}
];

export default spellData;


// id: '1',
// data: [
//   {
//     "1": {
//       "title": "Fireball",
//       "level": "3rd-level",
//       "school": "Evocation",
//       "casttime": "1 action",
//       "range": "150 feet",
//       "components": "V, S, M (a tiny ball of bat guano and sulfer)",
//       "duration": "Instantaneous",
//       "description": "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one."
//     },
//     "2": {
//       "title": "Fireball",
//       "level": "3rd-level",
//       "school": "Evocation",
//       "casttime": "1 action",
//       "range": "150 feet",
//       "components": "V, S, M (a tiny ball of bat guano and sulfer)",
//       "duration": "Instantaneous",
//       "description": "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one."
//     }
//   }
// ]
