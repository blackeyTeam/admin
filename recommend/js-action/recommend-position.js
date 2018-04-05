var parentId = "root";
$(function($){
	initSysKCTree(parentId,areaView.listLocationNode,$("#recommend-tree"));
	$('body').on('click','.recommend-save',saveCategory);
	$('body').on('click','.btn-recommend-edit',recommend_edit);
	$('body').on('click','.btn-recommend-del',recommend_del);
});

function recommend_del(){
	var id = $(this).attr("id");
    var obj = $(this);
	var callback = function() {
		recommendData.delete(id,function(json){
			obj.parents('tr').remove();
        });
	 };
	 showMsgPane('确认删除吗？', 'confirm', callback);
}


function recommend_edit(){
	var id = $(this).attr('id');
	if(id==null){
		$("#recommend_id").val("");
		$("#categoryName").val("");
		$("#recommend-width").val("");
		$("#recommend-height").val("");
		$("#recommend-description").val("");
//		$("#parentId").val("");
	}else{
		recommendData.detail(id,function(json){
			areaView.edit(json);
		});
	}
	$('#modal-position-classify-add').modal('show');
}

function saveCategory(){
	 var data = $('#recommend-form').serialize();
		var categoryId=$('#parentId').val();
		var recommend_id=$('#recommend_id').val();
		if(recommend_id==null){
			if(categoryId==""){
				showMsgPane("请选择分类！");
				return;
			}
		}
		recommendData.save(data,function(json){
		 showMsgPane("操作成功！");
	 });
}
