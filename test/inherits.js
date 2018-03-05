define(function (require) {
    var _ = require('@searchfe/underscore');

    describe('.inherits()', function () {
        var inherits = _.inherits;

        it('.inherits(subClass, superClass)', function () {
            // eslint-disable-next-line
            function Func1(name) {
                this.name = name;
            }
            Func1.prototype.say = function () {
                return 'hi, ' + this.name;
            };

            // eslint-disable-next-line
            function Func2(name) {
                this.name = name + '!';
            }
            inherits(Func2, Func1);

            var instance1 = new Func1('saber');
            var instance2 = new Func2('baidu');

            expect(instance1.say()).to.equal('hi, saber');
            expect(instance2.say()).to.equal('hi, baidu!');

            expect(instance1.constructor).to.equal(Func1);
            expect(instance2.constructor).to.equal(Func2);

            expect(instance1 instanceof Func1).to.be.ok;
            expect(instance2 instanceof Func2).to.be.ok;
            expect(instance2 instanceof Func1).to.be.ok;
        });
    });
});
