$(document).ready(function() {
    $('#header-l .shops-classify').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

    $('body').on('click', ' #btn-right-tree-cancle,#btn-system-tree-cancle', hideRightTree);

    $('body').on('focus', '#input-location', showRightTree1);
    $('body').on('focus','#input-system',showRightTree2);

    $('body').on('click','#btn-right-tree-save',chooseLocation);
    
    $('body').on('click','#btn-system-tree-save',hideRightTree1);

    $('body').on('click', '#btn-shops-classify-del, .btn-shops-classify-del', function() {
        var obj = $(this);
        var callback = function() {
            obj.parents('tr').remove();
        };
        showMsgPane('确认删除吗？该操作会导致分类下的所有商品一起删除.', 'confirm', callback);
    });

});

function hideRightTree1() {
	var treeObj = $.fn.zTree.getZTreeObj("system-tree");
	var nodes = treeObj.getCheckedNodes(true);
	var name = "";
	var ids = "";
	$.each(nodes,function(i,node){
		if(i!=nodes.length-1){
			name += node.name+",";
			ids+= node.id+",";
		}else{
			name+= node.name;
			ids+=node.id;
		}
	});
	if(name!=""&&ids!=""){
		$('#input-system').val(name);
		$('#gp_system').val(ids);
	}
	$('#system-right-tree').hide();
    $('#div-form').removeClass('col-lg-8').removeClass('col-lg-offset-1').addClass('col-lg-6').addClass('col-lg-offset-2');
    $('#div-left-list').addClass('col-lg-12').removeClass('col-lg-9');
}

function hideRightTree() {
	$('#system-right-tree').hide();
    $('#div-right-tree').hide();
    $('#div-form').removeClass('col-lg-8').removeClass('col-lg-offset-1').addClass('col-lg-6').addClass('col-lg-offset-2');
    $('#div-left-list').addClass('col-lg-12').removeClass('col-lg-9');
}

function showRightTree1() {
    $('#div-left-list').addClass('col-lg-9').removeClass('col-lg-12');
    $('#div-form').addClass('col-lg-8').addClass('col-lg-offset-1').removeClass('col-lg-6').removeClass('col-lg-offset-2');
    $('#div-right-tree').show();
    $('#system-right-tree').hide();
}

function showRightTree2() {
    $('#div-left-list').addClass('col-lg-9').removeClass('col-lg-12');
    $('#div-form').addClass('col-lg-8').addClass('col-lg-offset-1').removeClass('col-lg-6').removeClass('col-lg-offset-2');
    $('#system-right-tree').show();
    $('#div-right-tree').hide();
}
