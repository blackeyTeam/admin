var id;
var vendorType;
var typeCode;

$(function($) {
	id = getUrlParam('id');
	 if(id!=""&&id!=null){
    	$('#vendor-cert-id').val(id);
   	 }
	// $("#vendor-cert-id").val(getUrlParam('vendorId'));
	$('body').on('click', '#prev-step', prevStep);
	$('body').on('click', '#next-step111', nextStepz);
	$('body').on('click', '#btn-pic-upload', uploadFileDialog);
	showImg();
	$('body').on('click', '.btn-pic-del', function() {
		var id = $(this).attr('id');
		deleteone(id);
	});
});

function nextStepz() {
	window.location.href = "vendor.html";
}

function prevStep() {
	window.location.href = "vendor-edit-step1.html?id=" + id;
}

function deleteone(id) {
	var id = id;


	var url = "/server/commerce/admin/user/vendor/cert/delete.json";
	var data = {
		id: id
	};
	$.post(url, data, function() {
		window.location.reload();
	});

}

function showImg() {
	var url = "/server/commerce/admin/user/vendor/cert/list.json";
	var vendor_id = getUrlParam('id');
	var data = {
		vendorId: vendor_id
	};

	$("#table-goodsPic tbody").empty();
	$.post(url, data, function(json) {
		for (var i = 0; i < json.length; i++) {
			// alert(json[i].id);
			$("#table-goodsPic tbody").append(
				'<tr>' +
				'<td hidden>' + json[i].id + '</td>' +
				'<td><img src=' + json[i].pic1 + ' width="120" height="80" class="img-rounded"></td>' +
				'<td><img src=' + json[i].pic2 + ' width="120" height="80" class="img-rounded"></td>' +
				'<td><img src=' + json[i].pic3 + ' width="120" height="80" class="img-rounded"></td>' +
				'<td>' + json[i].code + '</td>' +
				'<td>' + json[i].name + '</td>' +
				'<td>' + json[i].type.name + '</td>' +
				'<td>' +
				'<span class="btn btn-default btn-xs btn-pic-del"id="' + json[i].id + '">删除</span>' +
				'</td>' +
				'</tr>')
		}
	});
}

function uploadFileDialog() {
	$('#callback-url').val(server + "/server/commerce/admin/user/vendor/cert/logo.json");
	var url = "/server/commerce/admin/user/vendor/cert/save.json";
	var data = $('#vendorPic-checkout-form').serialize();
	var strFileName = $('#file').val();
	if (strFileName.length > 0) {
		if (!IsValidFileExtention(strFileName, ["jpeg", "jpg", "png"])) {
			alert("文件格式不正确！");
			return false;
		}
	}
	$.post(url, data, function(rtn) {
		uploadFile(rtn.data);
	});
}

function uploadFile(fileid) {
	$('#member-add-id').val(fileid);

	alert("fileid:" + $('#member-add-id').val());
	var formData = new FormData($("#vendorPic-checkout-form")[0]);

	$.ajax({
		url: url_proxy,
		type: 'POST',
		data: formData,
		cache: false,
		contentType: false,
		processData: false,
		success: function(rtn) {　
			alert('上传成功！');
			$('#member-add-id').val('');
			window.location.reload();
		},
		error: function(er) {　
			alert('上传完成！');
			$('#member-add-id').val('');
			window.location.reload();
		}
	});
}