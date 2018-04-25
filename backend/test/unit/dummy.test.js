process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();

describe('Dummy Test', () => {
  it('should pass', (done) => {
    const sum = 1 + 1;
    sum.should.eql(2);
    sum.should.not.eql(3);
    done();
  });
});