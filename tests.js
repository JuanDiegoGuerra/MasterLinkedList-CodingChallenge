const LinkedList = require('./challenge')
const assert = require('assert')

describe('UnitTests', function () {
    it('add_at_from_empty_LinkedList', function () {
    // Failure message: 
    // The methods were called in this order: list.add_at(0, 8) -> list.get(0)
    list = new LinkedList()
    list.addAt(0, 8)
    assert(list.get(0) === 8)
  })

  it('multiple_adds_and_gets', function () {
    // Failure message: 
    // The methods were called in this order: list.add(8) -> list.add(3) -> list.add_at(1, 5)
    // Expected list: [8, 5, 3]
    list = new LinkedList()
    list.add(8)
    list.add(3)
    list.addAt(1, 5)

    assert(list.get(0) === 8)
    assert(list.get(1) === 5)
    assert(list.get(2) === 3)
  })

  it('adds_gets_and_removes', function () {
    // Failure message: 
    // The methods were called in this order: list.add(8) -> list.add(3) -> list.add_at(1, 5) -> list.add_at(2, 4) -> list.remove(1)
    // Expected list: [8, 4, 3]
    list = new LinkedList()
    list.add(8)
    list.add(3)
    list.addAt(1, 5)
    list.addAt(2, 4)
    list.remove(1)

    assert(list.get(0) === 8)
    assert(list.get(1) === 4)
    assert(list.get(2) === 3)
  })
})
