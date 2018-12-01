const assert = require('chai').assert
const {add, multiply, minus, divide} = require('./calculator')

describe('calculator ', () => {
  it('可以add', ()=> {
    assert.equal(add(1, 2), 3)
  })

  it('可以multiply', () => {
    assert.equal(multiply(2, 3), 6)
    assert.typeOf(multiply(1,2), 'number')
  })

  it('可以minus', () => {
    assert.equal(minus(5, 2), 3)
  })

  it('可以divide', () => {
    assert.equal(divide(5, 2), 2.5)
  })
})