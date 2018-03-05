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

    function func (a, b, c) {
        return a + '1' + b + '2' + c;
    }

    describe('.wrap', function () {
        it('should return a function', function () {
            expect(_.wrap(undefined, func)).to.be.a('function');
        });
        it('should pass arguments', function () {
            var wrapper = sinon.spy();
            _.wrap(obj, wrapper)(1, 2, 3);
            expect(wrapper).to.be.calledWith(obj, 1, 2, 3);
        });
        it('should pass context', function () {
            var wrapper = sinon.spy();
            var context = {};
            _.wrap(obj, wrapper).call(context);
            expect(wrapper).to.be.calledOn(context);
        });
        it('should pass return value', function () {
            var three = _.wrap(1, func)(0, 2);
            expect(three).to.equal('11022');
        });
        it('should throws unless passing a function as wrapper', function () {
            expect(_.wrap.bind(this, undefined, obj)).to.throw(/wrapper should be a function/);
        });
    });
});
