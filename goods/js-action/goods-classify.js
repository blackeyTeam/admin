var parentId = "root";
$(function($){
	 initSysKCTree(parentId,categoryView.fillCategoryList,$("#syskc-tree"));
	 initSysKCSelectTree(parentId,$("#kc-tree-select"));
	 $('body').on('click','#btn-add-save,#btn-edit-save',saveSysCategory);
});

function saveSysCategory(){
	var $inp = $("#"+$(this).attr('fid') +" input[name=parentId]");
	if(curNode==null){
		$inp.val(parentId);
	}else{
		$inp.val(curNode.id);
	}
	var data = $("#"+$(this).attr('fid')).serialize();
	categoryData.save(data,function(json){
		categoryView.reloadTreeAndList(curNode==null?parentId:curNode.id,"syskc-tree","kc-tree-select");
		loadTreeNode(curNode==null?parentId:curNode.id,categoryView.fillCategoryList);
		$('#modal-goods-classify-add').modal('hide');
		$('#modal-goods-classify-edit').modal('hide');
	});
}

function showEditModal(){
	var id = $(this).attr('id');
	$('#edit-id').val(id);
	categoryData.detail(id,function(json){
		categoryView.fillDetail(json);
	});
    
}

function deleteSysCategory(){
    var obj = $(this);
    var ids = [];
	var id = $(this).attr('id');
	if(id=="btn-goods-classify-del"){
		var table = $('#syskc-tree-list');
		var chkBoxes = table.find('input.chk:checked');
		if (chkBoxes.length==0) {
			showMsgPane("请选择要删除目录！");
			return false;
		};
		chkBoxes.each(function (i, o) {
			if(treeNodes.getNodeByParam('id',$(o).attr('id'),null).children.length==0){
				ids.push($(o).attr('id'));
			}
	    });

	}else{	
		if(treeNodes.getNodeByParam('id',$(this).attr('id'),null).subNodesCount==0){

			ids.push(id);

		}	

	}
    var callback = function() {
		categoryData.delete(ids,function(json){
			categoryView.reloadTreeAndList(curNode==null?parentId:curNode.id,"syskc-tree","kc-tree-select");
			loadTreeNode(curNode==null?parentId:curNode.id,categoryView.fillCategoryList);
		});
    };
    showMsgPane('确认删除吗？该节点下有子节点的不能被删除.', 'confirm', callback);
}

function transCategory(){
	var ids = [];
	var table = $('#syskc-tree-list');
	var chkBoxes = table.find('input.chk:checked');
	if (chkBoxes.length==0) {
		showMsgPane("请选择要转移类目！");
		return false;
	};
	chkBoxes.each(function (i, o) {
    	ids.push($(o).attr('id'));
    });
    var oldParentId = curNode==null?parentId:curNode.id;
    var newParentId = $('#input-target-area-id').val();
    if(oldParentId=="root"&&oldParentId==newParentId){
    	showMsgPane("不能转移到当前类目下");
    	return false;
    }else{
    	if(oldParentId==newParentId){
    		showMsgPane("不能转移到当前类目下");
    		return false;
    	}
    }
    var data = {ids:ids,newParentId:newParentId,oldParentId:oldParentId};
   	 categoryData.trans(data,function(json){
   	 	if(json.code=="success"){
    		categoryView.reloadTreeAndList(newParentId,"syskc-tree","kc-tree-select");
    		var treeObj = $.fn.zTree.getZTreeObj("syskc-tree");
    		var treeObjr = $.fn.zTree.getZTreeObj("kc-tree-select");
    		for (var i = 0; i < ids.length; i++) {
				var node = treeObj.getNodeByParam("id", ids[i], null);
					treeObj.removeNode(node);
					treeObjr.moveNode(node);
			};
			treeNodes.selectNode(treeNodes.getNodeByParam("id", oldParentId, null));
			loadTreeNode(oldParentId,categoryView.fillCategoryList);
    	}else{
    		showMsgPane("转移失败,不能转移到本身或子节点下");
    	}
   	 });	
}

function chooseTarget(){
	if(selectNode==null){
		showMsgPane("请选择目标类目");
	}else{
		$('#input-target-area-id').val(selectNode.id)
		$('#input-target-area').val(selectNode.name)
		hideRightTree();
	}
}