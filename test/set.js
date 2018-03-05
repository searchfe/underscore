define(function (require) {
    var _ = require('@searchfe/underscore');

    describe('.set()', function () {
        var obj;
        beforeEach(function () {
            obj = {foo: 'foo', bar: {haa: 'coo'}};
        });
        it('should set direct property', function () {
            _.set(obj, 'foo', 'bar');
            expect(obj.foo).to.equal('bar');
        });
        it('should not throw if obj undefined', function () {
            expect(function () {
                _.set(undefined, 'foo', 'bar');
            }).to.not.throw();
        });
        it('should set deep property', function () {
            _.set(obj, 'bar.haa', 'COO');
            expect(obj.bar.haa).to.equal('COO');
        });
        it('should create if not exist', function () {
            _.set(obj, 'doo', 'DOO');
            expect(obj.doo).to.equal('DOO');
        });
        it('should create if deep property not exist', function () {
            _.set(obj, 'coo.eww.2', 3);
            expect(obj.coo.eww[2]).to.equal(3);
        });
    });
});
