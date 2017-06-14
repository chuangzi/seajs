define(function(require, exports, module) {

    var $ = require('jquery');
    require('../css/content.css');
    var Slide = require('Slide');

    function init() {
        var slide = new Slide({
            $target: $('#slide')
        });
    }
    module.exports.init = init;

});
