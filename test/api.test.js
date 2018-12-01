const request = require('supertest')
const app = require('../server')
const {assert} = require('chai')

describe('api', () => {
  it('可以get /', (done)=> {
    request(app)
      .get('/')
      // .expect('Content-Type', 'text\/html') //text/html; charset=utf-8
      .expect('Content-Length', '2')
      .expect(200)
      .end(function(err, response) {
        if(err) {
          throw err
        }
        assert.equal(response.text, 'ok')
        done()
      })
  })

  it('可以 post /', (done) => {
    request(app)
    .post('/')
    .type('form')
    .send({name: 'zhangsan'})
    .expect(200)
    .end(function(err, response) {
      assert.deepEqual(response.body, {name: 'zhangsan'})
      done()
    })
  })
})