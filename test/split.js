define(function (require) {
    var _ = require('@searchfe/underscore');

    describe('.split()', function () {
        it('should support string separator', function () {
            expect(_.split('abcb', 'b')).to.deep.equal(['a', 'c', '']);
        });
        it('should support RegExp separator', function () {
            expect(_.split('abcb', /b/)).to.deep.equal(['a', 'c', '']);
        });
    });
});
