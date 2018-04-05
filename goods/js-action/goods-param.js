var parentId = "root";
$(function($){
	initSysKCSelectTree(parentId,$("#location-tree"));
	$('body').on('click', '#addinput', addInput);
	$('body').on('click','#removeinput',remvolast);
	$('body').on('click','.add-param-show',function(){
		$("#admin dd").remove();
		$("#admin dt").remove();
		var id = $(this).attr('id');
		if(id!=null){
			editParamVlaue(id);//修改
		}else{
			$("#param-name").val("");
			$("#nameEn").val("");
			$("#paramId").val("");//添加时，清除主键id
		}
		$('#modal-goods-param-add').modal('show');
	});
	$('body').on('click','#params-add',params_add);
	$('body').on('click','.paramval-del',paramVal_del);//删除参数值
	$('body').on('click','.btn-goods-param-del',param_del);//删除参数
});
function param_del(){
	var id = $(this).attr("id");
    var obj = $(this);
	var callback = function() {
		paramData.delete(id,function(json){
			obj.parents('tr').remove();
        });
	 };
	 showMsgPane('确认删除吗？', 'confirm', callback);
}

function paramVal_del(){
	var paramValueId = $(this).attr("id");
	var url="/server/commodity/admin/basic/paramValue/delete.json";
	var data={id:paramValueId}
	$.post(url,data,function(rtn){
		showMsgPane("删除成功！");
		editParamVlaue($("#paramId").val());	
	});
}

function editParamVlaue(id){
//	$("#removeinput").hide();
//	$("#addinput").hide();
	paramData.detail(id,function(json){
		paramView.editParam(json);
	});
}

function params_add(){
	var name=$('#param-name').val();
	var categoryId=$('#categoryId').val();
	var paramId=$("#paramId").val();
	if(categoryId==""){
		showMsgPane("请选择分类！");
		return;
	}
	var nameEn=$('#nameEn').val();
	var values=[];
	$("input[name='paramv']").each(function() {
		var value="";
		value+=$(this).val()+":";
		value+=$(this).attr("id");
		values.push(value);
	});
	jQuery.ajaxSettings.traditional = true;
		var url="/server/commodity/admin/basic/param/save.json";
		var data={
			id:paramId,
			name:name,
			categoryId:categoryId,
			nameEn:nameEn,
			auditStatus:"wait",
			paramValue :values
		 }
		 $.post(url,data,function(){
			 showMsgPane("sucess");
			 $('#modal-goods-param-add').modal('hide');
			 window.location.reload();//刷新当前页面.
		 });
}

function ztreeNodeClick(node){
	$(".nowCategory").text(node.name)
	$("#categoryId").val(node.id);
	paramData.list({catalogId:node.id},function(json){
		paramView.listParams(json);
	});
};

function addInput(){//添加参数框
	paramView.addInput();
}

function remvolast(){//移除元素框
	$("#admin dd:last").remove();
	$("#admin dt:last").remove();
}