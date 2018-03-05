define(function (require) {
    var _ = require('@searchfe/underscore');

    describe('.assign', function () {
        it('should handle null dst', function () {
            expect(_.assign(null, {
                foo: 'bar'
            })).to.deep.equal({
                foo: 'bar'
            });
        });
        it('should assign 2 objects', function () {
            var src = {
                foo: 'foo',
                bar: 'bar'
            };
            var dst = {
                foo: 'bar',
                kaa: 'kaa'
            };
            expect(_.assign(dst, src)).to.deep.equal({
                foo: 'foo',
                bar: 'bar',
                kaa: 'kaa'
            });
        });
        it('should assign 3 objects', function () {
            expect(_.assign({
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
        it('should only assign to the dst object', function () {
            var dst = {
                foo: 'bar'
            };
            var src1 = {
                bar: 'coo'
            };
            var src2 = {
                coo: 'foo'
            };
            _.assign(dst, src1, src2);
            expect(src1).to.deep.equal({
                bar: 'coo'
            });
        });
    });
});
