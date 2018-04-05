$(document).ready(function() {
    $('#header-l .recommend-position').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

    $('body').on('click', ' #btn-right-tree-cancle, #btn-right-tree-save', hideRightTree);

    $('body').on('focus', '#input-target-area', showRightTree);

    $('body').on('click', '#btn-position-classify-del, .btn-position-classify-del', function() {
        var obj = $(this);
        var callback = function() {
            obj.parents('tr').remove();
        };
        showMsgPane('确认删除吗？该操作会导致分类下的所有商品一起删除.', 'confirm', callback);
    });

});

function hideRightTree() {
    $('#div-right-tree').hide();
    $('#div-middle-list').addClass('col-lg-9').removeClass('col-lg-6');
}

function showRightTree() {
    $('#div-middle-list').addClass('col-lg-6').removeClass('col-lg-9');
    $('#div-right-tree').show();
}
