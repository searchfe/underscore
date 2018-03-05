define(function (require) {
    var _ = require('@searchfe/underscore');
    describe('.isLength()', function () {
        it('should return false for -1', function () {
            expect(_.isLength(-1)).to.be.false;
        });
        it('should return true for 0', function () {
            expect(_.isLength(0)).to.be.true;
        });
        it('should return false for overflowed integer (which is treated as float)', function () {
            expect(_.isLength(99999999999999999999999999999999999999999999)).to.be.false;
        });
        it('should return false for float number', function () {
            expect(_.isLength(1.1)).to.be.false;
        });
    });
});
