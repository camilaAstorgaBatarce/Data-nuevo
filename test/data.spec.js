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
    window.assert.equal(typeof window.dataLol, 'object' );
  })
})

describe('window.data.computeStats', () => {
  it('debería ser una función', () => {
    window.assert.equal(typeof window.data.computeStats, 'function');
  })
})
describe('window.data.filter', () => {
  it('debería ser una función', () => {
    window.assert.equal(typeof window.data.filter, 'function' );
})

describe('window.data.filter', () => {
  it('debería devolver "Ahri" al hacer click en "Assassin', () => {
    window.assert.equal(window.data.filterByType(window.dataLol, "Assassin")[0].name, "Ahri")
  })
})

describe('window.data.filter', () => {
  it('debería devolver "Aatrox" al hacer click en "Fighter', () => {
    window.assert.equal(window.data.filterByType(window.dataLol, "Fighter")[0].name, "Aatrox")
  })
})
});

describe('window.data.sortData', () => {
  it('debería ser una función', () => {
    window.assert.equal(typeof window.LOL.sortData, 'function' );
  })

  it ('deberia devolver los champion ordenados de la A a la Z', () =>{
    let orderAz = window.data.sortData(window.dataLol,"name", true)
    window.assert.deepEqual([orderAz[0].name, orderAz[1].name, orderAz[2].name],["Aatrox", "Akali", "Alistar"])
  })

  it ('deberia devolver los pokemones ordenados de la Z a la A', () =>{
    let orderAz = window.data.sortData(window.dataLol,"name", false)
    window.assert.deepEqual([orderAz[0].name, orderAz[1].name, orderAz[2].name],["Zyra", "Zilean", "Ziggs"])
  })
});
