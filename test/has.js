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

    describe('.has()', function () {
        it('should return true if direct property exists', function () {
            expect(_.has(obj, 'foo')).to.be.true;
        });
        it('should return true if value is ""', function () {
            expect(_.has({foo: ''}, 'foo')).to.be.true;
        });
        it('should return true if value is null', function () {
            expect(_.has({foo: null}, 'foo')).to.be.true;
        });
        it('should return false if value not defined', function () {
            expect(_.has({}, 'foo')).to.be.false;
        });
        it('should return false obj not defined', function () {
            expect(_.has(undefined, 'foo')).to.be.false;
        });
        it('should return true if deep property exists', function () {
            expect(_.has({foo: {bar: 'coo'}}, 'foo.bar')).to.be.true;
        });
        it('should return false if deep property not exists', function () {
            expect(_.has({foo: {bar: 'coo'}}, 'foo.bar.coo')).to.be.false;
        });
    });
});
