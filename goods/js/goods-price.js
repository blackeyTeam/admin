$(document).ready(function() {
    $('#header-l .goods-price').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

    $('body').on('click', ' #btn-right-tree-cancle, #btn-right-tree-save', hideRightTree);

    $('body').on('focus', '#input-target-type', showRightTree);

    $('body').on('click', '#btn-goods-del, .btn-goods-del', function() {
        var obj = $(this);
        var callback = function() {
            obj.parents('tr').remove();
        };
        showMsgPane('确认删除吗？', 'confirm', callback);
    });

    $('body').on('click', '.btn-tmpledit', function() {
        var objs = $(this).parents('tr').find('.c-i');
        showInput(objs);
    });

    $('body').on('click', '.add-can-1', function() {
        $("#table-tmpl").append("<tr class='gradeX dd-for-price' >" +
            "</td>" +
            "<td class='c-i'>" +
            "</td>" +
            // "大" +
            "<td class='c-i'>" +
            // "500" +
            "</td>" +
            "<td class='c-i'>" +
            // "500" +
            "</td>" +
            "<td class='c-i'>" +
            // "100" +
            "</td>" +
            "<td class='center'>" +
            "<a href='javascript:;' class='btn-tmpledit btn btn-success btn-circle' title='编辑'><i class='fa fa-edit'></i></a>" +
            "<a href='javascript:;' class='btn-goods-del btn btn-warning btn-circle' title='删除'><i class='fa fa-trash'></i></a>" +
            "</td>" +
            "</tr>");
    })

    $('body').on('click', '.add-can-2', function() {
        $("#table-tmpl-2").append("<tr class='gradeX dd-for-stock'>" +
            "</td>" +
            "<td class='c-i'>" +
            "</td>" +
            // "红色" +
            "<td class='c-i'>" +
            // "500" +
            "</td>" +
            // "<td class='c-i'>" +
            // // "500" +
            // "</td>" +
            // "<td class='c-i'>" +
            // // "100" +
            // "</td>" +
            "<td class='center'>" +
            "<a href='javascript:;' class='btn-tmpledit btn btn-success btn-circle' title='编辑'><i class='fa fa-edit'></i></a>" +
            "<a href='javascript:;' class='btn-goods-del btn btn-warning btn-circle' title='删除'><i class='fa fa-trash'></i></a>" +
            "</td>" +
            "</tr>");
    })

    $('body').on('click', '.add-stand', function() {
        var tpl = "<dl class='dl-horizontal fullscreen-dl other-param'>"+
                "<form class='goodsparam-form'>"+
                "<dt><label>可选规格</label></dt>"+
                "<dd><div class='display-inline input-md'><input type='hidden' name='paramId' class='other-paramId'>"+
                "<input type='text' name='title' class='other-title'>"+
                "<input type='hidden' value='common' name='shopClassParamType'></div></dd>"+
                "<dt><label>可选参数</label></dt>"+
                "<dd><div class='table-responsive'>"+
                "<table id='table-tmpl' class='table table-striped table-bordered table-hover table-tmpl-other'>"+
                "<thead><tr><tr><th width='100'>规格</th><th width='100'>操作</th></tr></tr></thead>"+
                "<tbody><tr class='gradeX other-common'><td class='c-i' data-attr='a'></td><td class='center'>"+
                "<a href='javascript:;' class='btn-tmpledit btn btn-success btn-circle' title='编辑''><i class='fa fa-edit'></i></a>"+
                "<a href='javascript:;' class='btn-goods-del btn btn-warning btn-circle' title='删除''><i class='fa fa-trash'></i></a>"+
                "</td></tr></tbody></table></div></dd>"+
                "<dt></dt>"+
                "<dd><a href='javascript:;' class='add-can-3'><code>+添加参数</code></a></dd>"+
                "<div class='modal-footer foot-foot'>"+
                "<button class='btn btn-sm btn-primary pull-right m-t-n-xs btn-other-param-save' type='button'><strong>保存</strong></button>"+
                "<button class='btn btn-sm btn-default pull-right m-t-n-xs mr10' data-dismiss='modal'><strong>取消</strong></button>"+
                "</div></form></dl>";
        $(".form-group-define").append(tpl);
    })

    $('body').on('click', '.add-can-3', function() {
        $(this).parents('form').find('.table-tmpl-other').append(
            "<tr class='gradeX other-common'><td class='c-i' data-attr='a'></td><td class='center'>"+
                "<a href='javascript:;' class='btn-tmpledit btn btn-success btn-circle' title='编辑''><i class='fa fa-edit'></i></a>"+
                "<a href='javascript:;' class='btn-goods-del btn btn-warning btn-circle' title='删除''><i class='fa fa-trash'></i></a>"+
                "</td></tr>"
            );
    });
});



function hideRightTree() {
    $('#div-right-tree').hide();
    $('#div-middle-list').addClass('col-lg-12').removeClass('col-lg-9');
}

function showRightTree() {
    $('#div-middle-list').addClass('col-lg-9').removeClass('col-lg-12');
    $('#div-right-tree').show();
}

function showInput(obj){
            $.each(obj, function(i, it) {
            $(it).html('<input type="text" name="' + $(it).attr('data-attr') + '" class="form-control" value="' + $(it).text().trim() + '">');
            $(it).removeClass('c-i');
        });
}
