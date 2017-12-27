'use strict';

const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server', () => {

  describe('GET /', () => {
    it('should return Hello World response', (done) => {
      request(app)
        .get('/')
        // .expect(200)
        .expect(404)
        // .expect('Hello world!')
        // .expect({
        //   error: 'Page not found.'
        // })
        .expect((res) => {
          expect(res.body).toInclude({
            error: "Page not found."
          });
        })
        .end(done);
    });
  });

  describe("GET /users", () => {
    it('should return correct user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toBeA('array').toInclude({
            name: "Bob",
            age: 30
          });
        })
        .end(done);
    });
  });

});
