$(document).ready(function() {
    $('#header-l .goods-info').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

    $('body').on('click', ' #btn-right-tree-cancle, #btn-right-tree-save', hideRightTree);

    $('body').on('focus', '#input-target-type', showRightTree);

    $('body').on('click', '#btn-goods-del',deleteGoods); 

    $('body').on('click','.btn-goods-auth',showGoodsAuthModal);

});

function hideRightTree() {
    if(selectNode!=null){
        $('#system-category-id').val(selectNode.id);
        $('#input-target-type').val(selectNode.name);
    }
    $('#div-right-tree').hide();
    $('#div-middle-list').addClass('col-lg-12').removeClass('col-lg-9');
}

function showRightTree() {
    $('#div-middle-list').addClass('col-lg-9').removeClass('col-lg-12');
    $('#div-right-tree').show();
}
