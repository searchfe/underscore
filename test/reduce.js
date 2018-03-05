define(function (require) {
    var _ = require('@searchfe/underscore');
    describe('.reduce()', function () {
        it('should call iteratee for Array type collection', function () {
            var spy = sinon.spy();
            var arr = ['a', 'b', 'c'];
            _.reduce(arr, spy);
            expect(spy).to.have.been.calledTwice;
            expect(spy.args[0]).to.deep.equal(['a', 'b', 1, arr]);
            expect(spy.args[1]).to.deep.equal([undefined, 'c', 2, arr]);
        });
        it('should call iteratee for Object type collection', function () {
            var spy = sinon.spy();
            var obj = {a: 'x', b: 'y', c: 'z'};
            _.reduce(obj, spy);
            expect(spy).to.have.been.calledTwice;
            expect(spy.args[0]).to.deep.equal(['x', 'y', 'b', obj]);
            expect(spy.args[1]).to.deep.equal([undefined, 'z', 'c', obj]);
        });
        it('should respect init value', function () {
            var spy = sinon.spy();
            var obj = {a: 'x'};
            _.reduce(obj, spy, 'b');
            expect(spy).to.have.been.calledOnce;
            expect(spy.args[0]).to.deep.equal(['b', 'x', 'a', obj]);
        });
        it('should pass return value', function () {
            var obj = {a: 'x'};
            var ret = _.reduce(obj, function (prev, curr) {
                return prev + curr;
            }, 'b');
            expect(ret).to.equal('bx');
        });
    });
});
