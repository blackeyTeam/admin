$(function($){
	vendorTypeList();
	$('body').on('click','#btn-vendor-type-save,#btn-vendor-type-edit',saveVendorType);
});

function vendorTypeList(){
	typeData.list(function(json){
		typeView.fillTypeList(json);
	});
}

function saveVendorType(){
	var data = $("#"+$(this).attr('fid')).serialize();
	typeData.save(data,function(json){
		$('#modal-vendor-type-add').modal('hide');
		$('#modal-vendor-type-edit').modal('hide');
		vendorTypeList();
	});
}

function showEditModal() {
	var id = $(this).attr('id');
	typeData.detail(id,function(json){
		typeView.typeDetail(json);
		$('#modal-vendor-type-edit').modal('show');
	});
}

function deleteVendorType(){
	var obj = $(this);
	var id = $(this).attr('id');
    var callback = function() {
    	typeData.delete(id,function(){
    		vendorTypeList();
    	});   
    };
    showMsgPane('确认删除当前类型吗?', 'confirm', callback);
}