/**
 * @file testMain 测试脚本载入器
 * @author harttle(yangjvn@126.com)
 */
var allTestFiles = [];
var TEST_REGEXP = /test\/.*\.js$/i;

Object.keys(window.__karma__.files).forEach(function (file) {
    if (TEST_REGEXP.test(file)) {
        var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
        allTestFiles.push(normalizedTestModule);
    }
});

require.config({
    baseUrl: '/base',
    paths: {
        test: '/base/test',
        apmjs: '/base/amd_modules'
    }
});

require.config({
    baseUrl: '/base',
    deps: allTestFiles,
    paths: {
        '@searchfe/assert': 'amd_modules/@searchfe/assert',
        '@searchfe/underscore': 'src/index'
    },
    callback: window.__karma__.start
});
