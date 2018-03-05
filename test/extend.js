define(function (require) {
    var _ = require('@searchfe/underscore');

    describe('.extend()', function () {
        var extend = _.extend;

        it('.extend(target, source)', function () {
            var a = {x: 1, y: 2};
            var b = {y: 3, z: 4};
            var c = extend(a, b);

            expect(a).to.equal(c);
            expect(a).to.deep.equal({x: 1, y: 3, z: 4});
        });

        it('.extend(target, ...source)', function () {
            var obj1 = {a: 1, b: 2};
            var obj2 = {b: 3, c: 4};
            var obj3 = {c: 4, d: 5};
            var obj = extend(obj1, obj2, obj3);

            expect(obj1).to.equal(obj);
            expect(obj1).to.deep.equal({a: 1, b: 3, c: 4, d: 5});
        });

        it('.extend: with prototype', function () {
            var a = {x: 1, y: 2};

            /**
             * temporary class
             *
             * @class
             */
            var B = function () {};
            B.prototype.hi = function () {};
            var b = new B();
            b.y = 3;
            b.z = 4;

            extend(a, b);
            expect(a).to.deep.equal({x: 1, y: 3, z: 4});
        });

        it('.extend: source is null', function () {
            var a = {x: 1, y: 2};

            extend(a, null);
            expect(a).to.deep.equal({x: 1, y: 2});
        });
    });
});
