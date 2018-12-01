const {assert} = require('chai')
//mocha会自己找以test结尾的文件
describe('async' , () => {
  it('可以setTimeout add', (done) => {
    setTimeout(function() {
      assert.equal(1+2, 3)
      done()
    }, 1000)
  })

  it('可以promise add', () => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        assert.equal(1+2, 3)
        resolve()
      }, 1000)
    }) 
  })

  it('可以async add', async () => {
    await new Promise(function(resolve, reject) {
      setTimeout(function() {
        assert.equal(1+2, 3)
        resolve()
      }, 1000)
    }) 
  })
})