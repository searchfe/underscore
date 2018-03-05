define(function (require) {
    var _ = require('@searchfe/underscore');
    function func (a, b, c) {
        return a + '1' + b + '2' + c;
    }

    describe('.partialRight()', function () {
        it('should support zero partials', function () {
            var g = _.partialRight(func);
            expect(g('a', 'b', 'c')).to.equal('a1b2c');
        });
        it('should support one partials', function () {
            var g = _.partialRight(func, 'c');
            expect(g('a', 'b')).to.equal('a1b2c');
        });
        it('should support two partials', function () {
            var g = _.partialRight(func, 'b', 'c');
            expect(g('a')).to.equal('a1b2c');
        });
    });
});
