$(document).ready(function() {
    $('#header-l .goods-info').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

//    $('body').on('click', '.btn-pic-del', function() {
//        var obj = $(this);
//        var callback = function() {
//            obj.parents('tr').remove();
//        };
//        showMsgPane('确认吗', 'confirm', callback);
//    });
//
//    $('body').on('click', '.btn-pic-unuse', function() {
//        var obj = $(this);
//        var callback = function() {
//        };
//        showMsgPane('确认下架吗', 'confirm', callback);
//    });


});
