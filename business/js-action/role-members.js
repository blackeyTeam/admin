var id
$(function($){
	id = getUrlParam("id");
	initPage();
	
});

function showAdminSearchModal(){
	AdminList(0 );
	$('#modal-user-list').modal('show');
}

function initPage(){
	roleList();
	if(id!=null&&id.trim!=""){
		showRoleInfo();
		roleMemberList();
	}
	
}
function roleList(){
	memberData.RoleList(function(json){
		memberView.fillRoleList(json);
	});
}

function roleMemberList(){
	memberData.RoleMemberList(id,function(json){
		memberView.fillRoleMemberList(json);
	});
}

function showRoleInfo(){
	memberData.RoleDetail(id,function(json){
		$('#role-member-name').text(json.roleName);
	});
}

function deleteRoleMember(){
	var table = $('#role-member-list');
	var chkBoxes = table.find('input.chk:checked');
	if(chkBoxes.length==0){
		showMsgPane('请至少选择一条数据');
		return false;
	} 
	var ids = [];
	$(chkBoxes).each(function() {
    	ids.push($(this).attr('id'));
	});
	var data = {rid:id,adminid:ids};
	memberData.DeleteMember(data,function(json){
		if(json.code!="success"){
			showMsgPane(json.message);
		}
		roleMemberList();
		$(".chkall").iCheck("uncheck");
	});
}

function transRoleMember(){
	var table = $('#role-member-list');
	var chkBoxes = table.find('input.chk:checked');
	if(chkBoxes.length==0){
		showMsgPane('请至少选择一条数据');
		return false;
	}
	var otherRole = $('#other-role-select').val();
	if(otherRole==""||otherRole==null||otherRole==id){
		showMsgPane('请选择其他身份');
		return false;
	}
	var ids = [];
	$.each(chkBoxes, function(i, o) {
		ids.push($(o).attr("id"));
	});
	var data ={srid:id,trid:otherRole,adminid:ids};
	memberData.TransMember(data,function(json){
		showMsgPane(json.message);
		roleMemberList();
	});
}

function addRoleMember(){
	var admins = $('#input-search-admin').tokenInput("get");
	var  ids = [];
	$.each(admins,function(i,item){
		ids.push(item.id);
	});
	if(ids.length==0){
		showMsgPane("请选择用户。");
		return false;
	}
	var data = {rid:id,adminid:ids};
	memberData.AddMember(data,function(json){
		if(json.code !="success"){
			showMsgPane("所选用户中有用户已经属于其他组，不能重复选择.");
		}
		$('#input-search-admin').tokenInput('clear');
		roleMemberList();
	});
}

function AdminList(page){
	var name = $('#admin-name').val();
	var mobile = $('#admin-mobile').val();
	var email = $('#admin-email').val();
	var size = $("#admin-size").val() ? $("#admin-size").val() : 10;
	var data = {size:size,start:page,name:name,mobile:mobile,email:email};
	memberData.AdminList(data,function(json){
		memberView.fillAdminList(json);
	});
}

function chooseAdmin(){
	var table = $('#admin-list');
	var chkBoxes = table.find('input.chk:checked');
	if(chkBoxes.length==0){
		showMsgPane('请至少选择一条数据');
		return false;
	}
    $(chkBoxes).each(function() {
    	$('#input-search-admin').tokenInput("add", {id: $(this).attr('id'), name: $(this).parents('td').next().next().text()});
	});
	 $('#modal-user-list').modal('hide');
}