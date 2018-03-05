define(function (require) {
    var _ = require('@searchfe/underscore');
    var obj = {
        foo: 'bar',
        bar: false,
        coo: {
            doo: 'cool',
            eww: ['wow']
        }
    };

    describe('.keys()', function () {
        it('should return array of keys', function () {
            expect(_.keys(obj)).to.deep.equal(['foo', 'bar', 'coo']);
        });
        it('should not include inherited keys', function () {
            var foo = Object.create({bar: 'bar'});
            foo.coo = 'coo';
            expect(_.keys(foo)).to.deep.equal(['coo']);
        });
    });
});
