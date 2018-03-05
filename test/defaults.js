define(function (require) {
    var _ = require('@searchfe/underscore');

    describe('.defaults()', function () {
        it('should handle null dst', function () {
            expect(_.defaults(null, {
                foo: 'bar'
            })).to.deep.equal({
                foo: 'bar'
            });
        });
        it('should merge 2 objects', function () {
            var src = {
                foo: 'foo',
                bar: 'bar'
            };
            var dst = {
                foo: 'bar',
                kaa: 'kaa'
            };
            expect(_.defaults(dst, src)).to.deep.equal({
                kaa: 'kaa',
                foo: 'bar',
                bar: 'bar'
            });
        });
        it('should merge 3 objects', function () {
            expect(_.defaults({
                foo: 'foo'
            }, {
                bar: 'bar'
            }, {
                car: 'car'
            })).to.deep.equal({
                foo: 'foo',
                bar: 'bar',
                car: 'car'
            });
        });
    });
});
