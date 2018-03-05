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

    describe('.keysIn()', function () {
        it('should return array of keys', function () {
            expect(_.keysIn(obj)).to.deep.equal(['foo', 'bar', 'coo']);
        });
        it('should include inherited keys', function () {
            var foo = Object.create({bar: 'bar'});
            foo.coo = 'coo';
            expect(_.keysIn(foo)).to.deep.equal(['coo', 'bar']);
        });
    });
});
