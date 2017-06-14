
define(function(require, exports, module) {

    console.log('我是js程序');
    var header = require('header');
    var content = require('content');
    var footer = require('footer');

    header.init();
    content.init();
    footer.init();

});