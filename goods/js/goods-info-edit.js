$(document).ready(function() {
    $('#header-l .goods-info').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });
    $("#demo-input-facebook-theme").tokenInput("/server/commodity/admin/basic/brand/list.json", {
        theme: "facebook",
        hintText: "请输入品牌名称",
        noResultsText: "没有结果",
        searchingText: "搜索中...",
        tokenLimit:1
    });

    $('body').on('click', ' #btn-right-tree-cancle, #btn-sys-tree-save,#btn-shop-tree-save', hideRightTree);

    $('body').on('focus', '#input-catalog', showRightTree);
     $('body').on('focus', '#input-catalog-2', showRightTree2);
});


function hideRightTree() {
    if(selectNode!=null){
        $('#goods-syscategoryId').val(selectNode.id);
        $('#input-catalog').val(selectNode.name);
        showCategoryparam(selectNode,null);
    }
    if(SPselectNode!=null){
        $('#shop-category-id').val(SPselectNode.id);
        $('#input-catalog-2').val(SPselectNode.name);
    }
    $('#div-right-tree,#div-right-tree-2').hide();
    $('#div-form').removeClass('col-lg-8').removeClass('col-lg-offset-1').addClass('col-lg-6').addClass('col-lg-offset-2');
    $('#div-left-list').addClass('col-lg-12').removeClass('col-lg-9');
}

function showRightTree() {
    $('#div-left-list').addClass('col-lg-9').removeClass('col-lg-12');
    $('#div-form').addClass('col-lg-8').addClass('col-lg-offset-1').removeClass('col-lg-6').removeClass('col-lg-offset-2');
    $('#div-right-tree-2').hide();
    $('#div-right-tree').show();
}
function showRightTree2() {
    if($('#shopId').val()==""){
        showMsgPane("请选择店铺");
        return false;
    }
    $('#div-left-list').addClass('col-lg-9').removeClass('col-lg-12');
    $('#div-form').addClass('col-lg-8').addClass('col-lg-offset-1').removeClass('col-lg-6').removeClass('col-lg-offset-2');
    $('#div-right-tree').hide();
    $('#div-right-tree-2').show();
}
