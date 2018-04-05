$(document).ready(function() {
    $('#header-l .recommend-list').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

    $('body').on('click', ' #btn-right-tree-cancle, #btn-right-tree-save', hideRightTree);

    $('body').on('focus', '#input-target-type', showRightTree);

//    $('body').on('click', '#btn-goods-del, .btn-goods-del', function() {
//        var obj = $(this);
//        var callback = function() {
//            obj.parents('tr').remove();
//        };
//        showMsgPane('该操作不可恢复，确认要删除吗？', 'confirm', callback);
//    });

    $('body').on('click', '#chang-atu', function() {
        var obj = $(this);
        var adc = $(this).html();
        var callback = function() {
            if (adc == "开启") {
                obj.html('关闭');
            }
            if (adc == "关闭") {
                obj.html('开启');
            }
        };
        showMsgPane('确认要更改广告当前状态吗？', 'confirm', callback);
    });

//    $('body').on('click', '.btn-circle', function() {
//        var obj = $(this);
//        var callback = function() {
//            window.location.reload();
//        };
//        showMsgPane('确定该广告上架吗？', 'confirm', callback);
//    });
});

function hideRightTree() {
    $('#div-right-tree').hide();
    $('#div-middle-list').addClass('col-lg-12').removeClass('col-lg-9');
}

function showRightTree() {
    $('#div-middle-list').addClass('col-lg-9').removeClass('col-lg-12');
    $('#div-right-tree').show();
}
