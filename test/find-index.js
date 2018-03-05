define(function (require) {
    var _ = require('@searchfe/underscore');

    describe('.findIndex()', function () {
        it('should find item with respect to the provided predicate', function () {
            expect(_.findIndex(['a', 'b', 'c'], function (item) {
                return item === 'b';
            })).to.equal(1);
        });
        it('should find the first occurrance', function () {
            expect(_.findIndex(['a', 'b', 'b', 'c'], function (item) {
                return item === 'b';
            })).to.equal(1);
        });
        it('should return -1 when not found', function () {
            expect(_.findIndex(['a', 'b', 'b', 'c'], function (item) {
                return item === 'd';
            })).to.equal(-1);
        });
    });
});
