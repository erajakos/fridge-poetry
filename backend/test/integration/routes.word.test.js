process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../src/index.js');

describe('GET /api/v1/words/all', () => {
  it('should return all words', (done) => {
    chai.request(server)
      .get('/api/v1/words/all')
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.equal(200);
        res.type.should.equal('application/json');
        res.body.status.should.eql('success');
        done();
      });
  });
});
