define(function (require) {
    var _ = require('@searchfe/underscore');
    describe('.isEmpty()', function () {
        it('should return true for empty array', function () {
            expect(_.isEmpty([])).to.equal(true);
        });
        it('should return true for empty string', function () {
            expect(_.isEmpty('')).to.equal(true);
        });
    });
});
