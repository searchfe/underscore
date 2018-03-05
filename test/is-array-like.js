define(function (require) {
    var _ = require('@searchfe/underscore');

    describe('.isArrayLike()', function () {
        it('should return false for undefined', function () {
            expect(_.isArrayLike(undefined)).to.be.false;
        });
        it('should return false for null', function () {
            expect(_.isArrayLike(null)).to.be.false;
        });
        it('should return false for functions', function () {
            expect(_.isArrayLike(function () {})).to.be.false;
        });
        it('should return true for array', function () {
            expect(_.isArrayLike([])).to.be.true;
        });
        it('should return true for array-like object', function () {
            expect(_.isArrayLike({
                length: 2
            })).to.be.true;
        });
    });
});
