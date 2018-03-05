define(function (require) {
    var _ = require('@searchfe/underscore');

    describe('.cloneDeep()', function () {
        it('should handle null', function () {
            expect(_.cloneDeep(null)).to.equal(null);
        });
        it('should handle false', function () {
            expect(_.cloneDeep(false)).to.equal(false);
        });
        it('should handle number', function () {
            expect(_.cloneDeep(432)).to.equal(432);
        });
        it('should handle array', function () {
            var ret = _.cloneDeep({nums: [8, '9']});
            expect(ret).to.deep.equal({nums: [8, '9']});
            expect(ret.nums.forEach).to.be.a('function');
        });
        it('should clone object', function () {
            var a = {foo: 'FOO'};
            var b = _.cloneDeep(a);
            b.foo = 'BAR';
            expect(a.foo).to.equal('FOO');
        });
        it('should do deep copy', function () {
            var a = {foo: {bar: 'bar'}};
            var b = _.cloneDeep(a);
            a.foo.bar = 'BAR';
            expect(b.foo.bar).to.equal('bar');
        });
        it('should handle function', function () {
            var foo = {
                a: function () {}
            };
            foo.a.b = 'b';
            var bar = _.cloneDeep(foo);
            expect(foo.a).to.equal(bar.a);
        });
    });
});
