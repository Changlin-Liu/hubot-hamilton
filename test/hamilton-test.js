  var chai = require('chai');
  var sinon = require('sinon');
  chai.use(require('sinon-chai'));
  var expect = chai.expect;

  describe('hamilton', function() {
    beforeEach(function() {
      this.robot = {
        respond: sinon.spy(),
        hear: sinon.spy()
      };
      require('../src/hamilton')(this.robot);
    });

    it('registers a hear listener', function() {
      expect(this.robot.hear).to.have.been.calledWith(/hamilton/i);
    });
  });
