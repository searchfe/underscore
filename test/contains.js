define(function (require) {
    var _ = require('@searchfe/underscore');

    describe('.contains()', function () {
        it('should return false when not exist in string', function () {
            expect(_.contains('abc', 'd')).to.be.false;
        });
        it('should return false when passed in string', function () {
            expect(_.contains('abc', 'a', 1)).to.be.false;
        });
        it('should return true when found in string', function () {
            expect(_.contains('abc', 'a')).to.be.true;
            expect(_.contains('abc', 'c')).to.be.true;
            expect(_.contains('abc', 'c', 1)).to.be.true;
        });
        it('should return false when not exist in array', function () {
            expect(_.contains([1, 2, 3], 4)).to.be.false;
        });
        it('should return false when passed in array', function () {
            expect(_.contains([1, 2, 3], 1, 1)).to.be.false;
        });
        it('should return true when found in array', function () {
            expect(_.contains([1, 2, 3], 1)).to.be.true;
            expect(_.contains([1, 2, 3], 3)).to.be.true;
            expect(_.contains([1, 2, 3], 3, 1)).to.be.true;
        });
    });
});
