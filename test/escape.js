define(function (require) {
    var _ = require('@searchfe/underscore');
    var escaped = '&amp;&lt;&gt;&quot;&#39;/';
    var unescaped = '&<>"\'/';

    escaped += escaped;
    unescaped += unescaped;
    describe('.escape()', function () {
        it('should escape values', function () {
            expect(_.escape(unescaped)).to.equal(escaped);
        });
        it('should handle strings with nothing to escape', function () {
            expect(_.escape('abc')).to.equal('abc');
        });
        var arr = ['`', '/'];
        arr.forEach(function (chr) {
            it('should not escape the "' + chr + '" character', function () {
                expect(_.escape(chr)).to.equal(chr);
            });
        });
    });
});
