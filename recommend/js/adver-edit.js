$(document).ready(function() {
    $('#header-l .goods-info').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

    $('body').on('click', ' #btn-right-tree-cancle, #btn-right-tree-save', hideRightTree);

    $('body').on('focus', '#input-catalog', showRightTree);

    $('body').on('click', ' #btn-userInfo-save', function() {
        var obj = $(this);
        var callback = function() {
            window.location.href = "advertisement.html";
        };
        showMsgPane('添加成功！', 'confirm', callback);
        $('.btn-default').css('display','none');
    });
});


function hideRightTree() {
    $('#div-right-tree').hide();
    $('#div-form').removeClass('col-lg-8').removeClass('col-lg-offset-1').addClass('col-lg-6').addClass('col-lg-offset-2');
    $('#div-left-list').addClass('col-lg-12').removeClass('col-lg-9');
}

function showRightTree() {
    $('#div-left-list').addClass('col-lg-9').removeClass('col-lg-12');
    $('#div-form').addClass('col-lg-8').addClass('col-lg-offset-1').removeClass('col-lg-6').removeClass('col-lg-offset-2');
    $('#div-right-tree').show();
}
