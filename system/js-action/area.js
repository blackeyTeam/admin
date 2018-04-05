var parentId = "100000";
$(function($){
	 initLocTree(parentId,areaView.listLocationNode,$("#location-tree"));
	 $('body').on('click','.btn-area-edit',showEdit);
	 $('body').on('click','#btn-area-save',saveArea);
});

function showEdit(){
	var id=$(this).attr('id');
	areaData.AreaDetail(id,function(json){
		$('#parentName').text(json.parentName);
		$('#area-name').val(json.name);
		$('#area-enName').val(json.nameEn);
		$('#area-code').val(json.code);
	});
	$('#modal-area-edit').modal('show');
}

function saveArea(){
	$('#modal-area-edit').modal('hide');
}