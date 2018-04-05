$(function($){
	loadRoleList();
	$('body').on('click','.btn-role-edit',showRole);
	$('body').on('click','#btn-add-save,#btn-role-edit',saveRole);
	$('body').on('click','#btn-onset',onset);
});

function loadRoleList(){
	roleData.list(function(json){
		roleView.fillList(json);
	});
}

function showRole(){
	var id = $(this).attr('id');
	roleData.detail(id,function(json){
		roleView.detail(json);
	});
}

$('body').on('click', '.btn-role-del', function() {
	var obj = $(this);
    var callback = function() {
    	roleData.delete(obj.attr('id'),function(){
    		loadRoleList();
    	});
    };
    showMsgPane('该身份删除后，所有信息将被删除。您确定要删除吗？', 'confirm', callback);
});

function saveRole(){
	var data = $("#"+$(this).attr('fid')).serialize();
	errorId = "role-add-error";
	if($(this).attr('id')=="btn-role-edit"){
		errorId="role-edit-error";
	}
	roleData.save(data,function(json){
		if(json.code!="success"){
			roleView.error(errorId,json);
		}else{
			$('#modal-role-add').modal('hide');
			$('#modal-role-edit').modal('hide');
			loadRoleList();
		}
	});
}

function onset(){
	roleData.onset(function(json){
		showMsgPane(json.message);
	});
}