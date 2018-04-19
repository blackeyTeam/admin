var email;
var mobile;
$(function($) {
	initPage();
	$('body').on('click', '#btn-admin-search', function() {
		loadAdminList(0);
	});
	$('body').on('click', '.btn-admin-edit', showEditModal);
	$('body').on('click', '#btn-account-info-save', editPassword);
	$('body').on('click','#add-business',showAddModal);
	$('body').on('click','.btn-account',showBindAccount);
	$('body').on('click','#btn-add-open',openAccount);
});

function initPage() {
	loadAdminList(0);
}

function loadAdminList(page) {
	var name = $('#admin_name').val();
	var size = $("#max-size").val() ? $("#max-size").val() : 10;
	var data = {
		pageSize: size,
		offset: page,
		name: name
	};
	adminData.pagelist(data, function(json) {
		adminView.fillAdminList(json);
	});
}

function showAddModal(){
	$("#business-id").val("");
	// $("#admin-name").val("");
	$('#modal-business-add').modal('show');
}

function showEditModal() {
	//修改从后台调用

	$("#admin-id").val("");
	$("#admin-name").val("");
	$('#modal-business-add').modal('show');
	var id=	$(this).parents("tr").children("td").eq(0).text();
    var name=	$(this).parents("tr").children("td").eq(1).text();
    var mainPage=	$(this).parents("tr").children("td").eq(5).text();
    var discount=	$(this).parents("tr").children("td").eq(6).text();
    var saleCode=	$(this).parents("tr").children("td").eq(7).text();
    var address=	$(this).parents("tr").children("td").eq(8).text();
    var mobile=	$(this).parents("tr").children("td").eq(2).text();
    var telephone=	$(this).parents("tr").children("td").eq(3).text();
    var remark=	$(this).parents("tr").children("td").eq(4).text();

    $("#business-id").val(id);
	$("#business-name").val(name);
    $("#business-name").val(address);
    $("#business-name").val(mobile);
    $("#business-name").val(telephone);
    $("#business-mainPage").val(mainPage);
    $("#business-discount").val(discount);
    $("#business-saleCode").val(saleCode);
    $("#business-remark").val(remark);
}

$('#btn-business-save').click(function() {
	var formData= new FormData($('#business-info')[0]);

	$.ajax({
		url: "/server/business/save",
		type: 'POST',
		data: formData,
		cache: false,
		contentType: false,
		processData: false,
		success: function(rtn) {　
			initPage();
		},
		error: function(er) {　
			initPage();
		}
	});
	// adminData.save(data, function(json) {
	// 	if (json.code != "success") {
	// 		// var meg = "";
	// 		// adminView.validateError(meg);
	// 	} else {
	// 		$('#modal-admin-add').modal('hide');
	// 		initPage();
	// 	}
	// });
	// adminData.validateType(inputVal, function(rtn) {
	// 	if (rtn == "error") {
	// 		adminView.validateError("请输入正确的手机号码或邮箱");
	// 		return false;
	// 	} else {
	// 		var data = {
	// 			accountType: rtn,
	// 			accountInput: inputVal,
	// 			name: name
	// 		};
	// 		adminData.save(data, function(json) {
	// 			if (json.code != "success") {
	// 				var meg = "";
	// 				if (json.code == "2") meg = json.message;
	// 				if (json.code == "exist_mobile" || json.code == "exist_email") meg = "该账号已存在，请激活后再开通管理员！";
	// 				adminView.validateError(meg);
	// 			} else {
	// 				$('#modal-admin-add').modal('hide');
	// 				initPage();
	// 			}
	// 		});
	// 	}
	// });
});

function showBindAccount(){
	var name=$(this).attr("name");
	var id=$(this).attr("id");
	$("#admin-id").val(id);
	adminData.detail(id,function(json){
		$('#admin-account').val(json.mobile ? json.mobile : email);
		if(json.hasAccount){
			$('#btn-add-open').addClass('hide');
			$('#admin-account').val(json.account.mobile?json.account.mobile:json.account.email);
			if(json.account.mobileConfirm){
				$('#channel-type input[value="mobile"]').attr("checked", true);
			}
			if(json.account.emailComfirm){
				$('#channel-type input[value="email"]').attr("checked", true);
			}
			$('#channel-email').attr('readonly',true);
			$('#channel-mobile').attr('readonly',true);
		}else{
			$('#channel-email').removeAttr('readonly');
			$('#channel-mobile').removeAttr('readonly');
			$('#btn-add-open').removeClass('hide');
		}
	});
	$("#admin-account-name").text(name);
	$("#modal-admin-account").modal("show");

}

$('.btn-admin-save').click(function() {
	var data=$("#edit-admin-info").serialize();
	adminData.save(data, function(json) {
		if (json.code != "success") {
			var meg = "";
			adminView.validateError(meg);
		} else {	
			uploadFile(json.data);
			$('#modal-admin-edit').modal('hide');
			
		}
	});

});

function openAccount(){
	var account=$("#admin-account").val();
	var id=$("#admin-id").val();
	var channel=$("#channel-type input[name=channel]:checked").val();
	var data={
		userid:id,
		channel:channel,
		account:account
	}
	adminData.open(data, function(json) {
		if(json.code=="exist_account"){
			alert(json.message);
			return;
		}
		if(json.code=="fail"){
			alert(json.message);
			return;
		}
		if(json.code=="success"){
			alert(json.message);
			$("#modal-admin-account").modal("hide");
			loadAdminList(0);
		}		

	});
}

function editPassword() {
	var newp = $('#new-password').val();
	var conp = $('#comfirm-password').val();

	if (newp == "" || conp == "") {
		alert('请输入新密码和确认密码');
		return false;
	} else {
		if (newp != conp) {
			alert("两次输入密码不一致，请重新输入");
			return false;
		}
		if (conp.trim().length < 6) {
			alert("请输入大玉6位的密码！");
			$('#new-password').val("");
			$('#comfirm-password').val("");
			return;

		}
		var data = {
			newPassword: newp.trim()
		};
		if (mobile != null && mobile != "") {
			$(data).attr("account", mobile);
		} else if (email != null && email != "") {
			$(data).attr("account", email);
		}
		adminData.change(data, function(rtn) {
			alert("密码修改成功，请牢记自己的密码");
			$('#modal-admin-edit-password').modal('hide');
		});
	}
}

function uploadFile(fileid) {
	$('#info-pic-id').val(fileid);
	var formData = new FormData($("#edit-admin-info")[0]);
	var strFileName = $('#up_img').val();
	if (strFileName.length > 0) {
		if (!IsValidFileExtention(strFileName, ["jpeg", "jpg", "png"])) {
			alert("文件格式不正确！");
			return false;
		}
	}
	$.ajax({
		url: "/server/auth/admin/admin/"+fileid+"/upload/portraits.json",
		type: 'POST',
		data: formData,
		cache: false,
		contentType: false,
		processData: false,
		success: function(rtn) {　
			initPage();
		},
		error: function(er) {　
			initPage();
		}
	});
}