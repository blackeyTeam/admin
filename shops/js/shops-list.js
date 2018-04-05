$(document).ready(function() {
    $('#header-l .shops-list').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

    $('body').on('click', '.btn-shops-list-del', function() {
        var obj = $(this);
        var callback = function() {
            obj.parents('tr').remove();
        };
        showMsgPane('确认删除吗？该操作无法恢复.', 'confirm', callback);
    });

});
