define(function (require) {
    var _ = require('@searchfe/underscore');

    function func (a, b, c) {
        return a + '1' + b + '2' + c;
    }

    describe('.partial()', function () {
        it('should support zero partials', function () {
            var g = _.partial(func);
            expect(g('a', 'b', 'c')).to.equal('a1b2c');
        });
        it('should support one partials', function () {
            var g = _.partial(func, 'a');
            expect(g('b', 'c')).to.equal('a1b2c');
        });
        it('should support two partials', function () {
            var g = _.partial(func, 'a', 'b');
            expect(g('c')).to.equal('a1b2c');
        });
    });
});
