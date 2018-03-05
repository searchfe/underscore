/**
 * @file testMain 测试脚本载入器
 * @author harttle(yangjvn@126.com)
 */

require.config({
    baseUrl: '/base',
    paths: {
        test: '/base/test',
        apmjs: '/base/amd_modules'
    }
});

require.config({
    baseUrl: '/base',
    deps: ['test/index'],
    paths: {
        '@searchfe/assert': 'amd_modules/@searchfe/assert',
        '@searchfe/underscore': 'src/index'
    },
    callback: window.__karma__.start
});
