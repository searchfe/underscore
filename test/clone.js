define(function (require) {
    var _ = require('@searchfe/underscore');

    describe('.clone()', function () {
        it('should handle null', function () {
            expect(_.clone(null)).to.equal(null);
        });
        it('should handle false', function () {
            expect(_.clone(false)).to.equal(false);
        });
        it('should handle number', function () {
            expect(_.clone(432)).to.equal(432);
        });
        it('should handle array', function () {
            var ret = _.clone([8, '9']);
            expect(ret).to.deep.equal([8, '9']);
            expect(ret.forEach).to.be.a('function');
        });
        it('should clone object', function () {
            var a = {foo: 'FOO'};
            var b = _.clone(a);
            b.foo = 'BAR';
            expect(a.foo).to.equal('FOO');
        });
        it('should do shallow copy', function () {
            var a = {foo: {bar: 'bar'}};
            var b = _.clone(a);
            expect(a.foo).to.equal(b.foo);
        });
        it('should handle function', function () {
            function a () {}
            a.foo = 'FOO';
            var b = _.clone(a);
            a.foo = 'BAR';
            expect(b.foo).to.equal('FOO');
        });
    });
});
