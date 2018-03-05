define(function (require) {
    var _ = require('@searchfe/underscore');
    describe('.defaultsDeep()', function () {
        it('should handle null dst', function () {
            expect(_.defaultsDeep(null, {
                foo: 'bar'
            })).to.deep.equal({
                foo: 'bar'
            });
        });
        it('should replace null value', function () {
            expect(_.defaultsDeep({
                foo: {
                    foo: 'foo'
                }
            }, {
                foo: null
            })).to.deep.equal({
                foo: {
                    foo: 'foo'
                }
            });
        });
        it('should merge 2 objects', function () {
            expect(_.defaultsDeep({
                foo: {
                    foo: 'foo'
                }
            }, {
                foo: {
                    bar: 'bar'
                }
            })).to.deep.equal({
                foo: {
                    foo: 'foo',
                    bar: 'bar'
                }
            });
        });
    });
});
