define(function(require, exports, module) {
    var $ = require('jquery');
    require('../css/footer.css')

    function init() {
        $('.footer').html('footer.js初始化完毕')
    }
    module.exports.init = init;

});
