$(document).ready(function() {
    $('#header-l .goods-brand').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');

    $('body').on('click', '#btn-right-tree-cancle, #btn-right-tree-save', hideRightTree);

    $('body').on('focus', '#input-target-type', showRightTree);
});

function hideRightTree() {
	var treeObj = $.fn.zTree.getZTreeObj("select-multi-tree");
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
		$('#input-target-type').val(name);
		$('#sys_category_ids').val(ids);
	}
    $('#div-right-tree').hide();
    $('#div-form').removeClass('col-lg-8').removeClass('col-lg-offset-1').addClass('col-lg-6').addClass('col-lg-offset-2');
    $('#div-left-list').addClass('col-lg-12').removeClass('col-lg-9');
}

function showRightTree() {
    $('#div-left-list').addClass('col-lg-9').removeClass('col-lg-12');
    $('#div-form').addClass('col-lg-8').addClass('col-lg-offset-1').removeClass('col-lg-6').removeClass('col-lg-offset-2');
    $('#div-right-tree').show();
}
