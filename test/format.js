define(function (require) {
    var _ = require('@searchfe/underscore');

    describe('.format()', function () {
        it('should support multiple args', function () {
            expect(_.format('foo%sbar%s', 'a', 'b')).to.equal('fooabarb');
        });
        it('should support plain string', function () {
            expect(_.format('foo%sbar%s')).to.equal('foo%sbar%s');
        });
    });
});
