var id ;
$(function($){
	id = getUrlParam("id");
	initPage();
	$("#other-role-select").change(function(){
		var rid = $(this).val();
		roleAccessAllremove();
		accessList(rid);
	  });
	$('body').on('click', '#btn-roleaccess-edit', roleAccessEdit);
});

function initPage(){
	moduleList();
	roleList();
	if(id!=null&&id.trim!=""){
		showRoleInfo();
	}
}

function showRoleInfo(){
	roleEditData.RoleDetail(id,function(json){
		$('#role-access-name').text(json.roleName);
	});
}

function moduleList(){
	roleEditData.ModuleList(function(json){
		var list = {};
		list.content = json;
		roleEditView.fillModuleList(list)
		if(id!=null&&id.trim()!=""){
			accessList(id);
		}
	});
}

function accessList(rid){
	roleEditData.AccessList(rid,function(rtn){
		roleEditView.fillAccessList(rtn);
	});
}

function roleList(){
	roleEditData.RoleList(function(json){
		roleEditView.fillRoleList(json);
	});
}

function roleAccessEdit(){
	var table = $('#role-access-list-edit');
	var chkBoxes = table.find('input:checked');
	if (chkBoxes.length==0) {
		showMsgPane("请至少选择1个后台模块！");
		return false;
	};
	var ids = [];
	chkBoxes.each(function (i, o) {
    	ids.push($(o).attr('id'));
    });
    ids = unique(ids);
    var data = {rid:id,modid:ids};
    roleEditData.RoleEdit(data,function(rtn){
    	showMsgPane("保存成功");
    });
    
}

function unique(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}