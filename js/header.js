define(function(require, exports, module) {
    var $ = require('jquery');
    require('../css/header.css');

    function init() {
       $('.header').html('header.js初始化完毕')
    }
    module.exports.init = init;

});
