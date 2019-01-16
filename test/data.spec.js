// require('../src/data.js');
//
//
// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });
//
//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });

global.window = global;
global.chai = require('chai');
global.expect = require("chai").expect;
global.assert = require("chai").assert;
require('../src/data/lol/lol.js')
require('../src/data.js');

describe('window.LOL', () => {
  it('debería ser un objeto', () => {
    window.assert.equal(typeof window.LOL, 'object' );
  })
})

describe('window.LOL.computeStats', () => {
  it('debería ser una función', () => {
    window.assert.equal(typeof window.LOL.computeStats, 'function');
  })
})
describe('window.LOL.filterByType', () => {
  it('debería ser una función', () => {
    window.assert.equal(typeof window.LOL.filterByType, 'function' );
})

describe('window.LOL.filterByType', () => {
  it('debería devolver "Bulbasaur" al hacer click en "Assassin', () => {
    window.assert.equal(window.LOL.filterByType(window.LOL.data, "Assassin")[0].name, "Ahri")
  })
})

describe('window.LOL.filterByType', () => {
  it('debería devolver "Bulbasaur" al hacer click en "Fighter', () => {
    window.assert.equal(window.LOL.filterByType(window.LOL.data, "Fighter")[0].name, "Aatrox")
  })
})
});

describe('window.LOL.sortData', () => {
  it('debería ser una función', () => {
    window.assert.equal(typeof window.LOL.sortData, 'function' );
  })

  it ('deberia devolver los champion ordenados de la A a la Z', () =>{
    let orderAz = window.LOL.sortData(window.LOL.data,"name", true)
    window.assert.deepEqual([orderAz[0].name, orderAz[1].name, orderAz[2].name],["Aatrox", "Akali", "Alistar"])
  })

  it ('deberia devolver los pokemones ordenados de la Z a la A', () =>{
    let orderAz = window.LOL.sortData(window.LOL.data,"name", false)
    window.assert.deepEqual([orderAz[0].name, orderAz[1].name, orderAz[2].name],["Zyra", "Zilean", "Ziggs"])
  })
});
