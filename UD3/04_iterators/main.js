'use strict'

const assert = require('assert').strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];

// function iterateSimple() {
//   for (let i = 0; i < pilots.length; i++) {
//     const element = pilots[nmae];
//   }
// }
function iterateForEach() {
  pilots.forEach(pilot => {console.log('pilotos' + pilot[i]);});
}
function mapIds() {
  return pilots.map(pilot => pilot.id)
}
function rebels() {
  return pilots.filter(pilot => pilot.faction === 'Rebels');
}
function totalFaction(faction) {

}
function avgYears(faction) {
}

// use console.log
iterateSimple()
iterateForEach()
try {
  assert.deepStrictEqual(mapIds(), [2,8,40,66])
  assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]])

  // assert.deepStrictEqual(totalFaction('Rebels'), 2)

  // assert.deepStrictEqual(avgYears('Rebels'), 22.5)
  // assert.deepStrictEqual(avgYears('Empire'), 25)
} catch (error) {
  console.error(error)
}