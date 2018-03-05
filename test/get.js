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

    describe('.get()', function () {
        it('should get direct property', function () {
            expect(_.get(obj, 'foo')).to.equal('bar');
        });
        it('should get deep property', function () {
            expect(_.get(obj, 'coo.doo')).to.equal('cool');
        });
        it('should get array property', function () {
            expect(_.get(obj, 'coo.eww.0')).to.equal('wow');
        });
        it('should return undefined if not exist', function () {
            expect(_.get(obj, 'doo')).to.be.undefined;
        });
        it('should return undefined if deep property not exist', function () {
            expect(_.get(obj, 'coo.eww.2')).to.be.undefined;
        });
    });
});
