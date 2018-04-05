$(document).ready(function() {
    $('#header-l .goods-classify').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

    $('body').on('click', ' #btn-right-tree-cancle', hideRightTree);
    $('body').on('click', '#btn-right-tree-save', chooseTarget);

    $('body').on('focus', '#input-target-area', showRightTree);

    $('body').on('click', '#btn-goods-classify-del, .btn-goods-classify-del', deleteSysCategory);
    $('body').on('click','#btn-goods-classify-add',showAddModal);
    $('body').on('click','.btn-goods-classify-edit',showEditModal);
    $('body').on('click','#btn-goods-classify-trans',transCategory);
});

function hideRightTree() {
    $('#div-right-tree').hide();
    $('#div-middle-list').addClass('col-lg-9').removeClass('col-lg-6');
}

function showRightTree() {
    $('#div-middle-list').addClass('col-lg-6').removeClass('col-lg-9');
    $('#div-right-tree').show();
}

function showAddModal(){
    if(curNode==null){
        $('.parent-name').html(treeNodes.getNodeByParam("id", "root", null).name);
    }
    $('.orderNum').val("");
    $('#modal-goods-classify-add').modal('show');
}

