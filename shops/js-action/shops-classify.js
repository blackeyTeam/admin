var parentId = "root";
$(function($){
//	alert(getUrlParam("shopId"));
	var shopId=getUrlParam("shopId");
	if(shopId!=null){
		$('#shopId').val(shopId);
		initSPKCTree(parentId,categoryView.fillCategoryList,$("#syskc-tree"),shopId);	
	}
	 $('body').on('click','#shopCategory_save',shopCategory_save);
	 $('body').on('click','.btn-shops-classify-edit',shop_classify_edit);
	 $('body').on('click','.btn-shops-classify-del',shop_classify_del);
});
function shop_classify_del(){
	var id = $(this).attr("id");
    var obj = $(this);
	var callback = function() {
		shopsClassData.delete(id,function(json){
			obj.parents('tr').remove();
        });
	 };
	 showMsgPane('确认删除吗？', 'confirm', callback);
}

function shop_classify_edit(){
	var id = $(this).attr('id');
	if(id==null){
		$("#categoryId").val("");
		$("#categoryName").val("");
	}else{
		shopsClassData.detail(id,function(json){
			categoryView.edit(json);
		});
	}
	$('#modal-shops-classify-add').modal('show');
}

function shopCategory_save(){
	 var data = $('#shopClassFrom').serialize();
		var categoryId=$('#nowCategoryId').val();
		var paramId=$("#paramId").val();
		if(categoryId==""){
			showMsgPane("请选择分类！");
			return;
		}
	 shopsClassData.save(data,function(json){
		 showMsgPane("添加成功！");
	 });
}