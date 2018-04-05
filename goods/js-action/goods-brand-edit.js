var id;
$(function($){
	id = getUrlParam("id");
	if(id!=null&&id.trim()!=""){
		$('#edit-id').val(id)
		editData.detail(id,function(json){
			editView.fillDetail(json);
		});
	}
	initSysSelectMultiTree("root",$('#select-multi-tree'));
	$('body').on('click','#btn-brand-save',saveBrand);
});

function saveBrand(){
	$('#callback-url').val(server + "/server/commodity/admin/basic/brand/update/logo.json");
	 var strFileName = $('#file').val();
     if(strFileName.length>0){
         if(!IsValidFileExtention(strFileName,["jpeg","jpg","png"])){
           alert("文件格式不正确！");
           return false;
     }
 }
	var data = $('#brand-info-form').serialize();
	editData.save(data,function(json){
//		window.location.href = "goods-brand.html";
		uploadFile(json.data);
	});
}

function uploadFile(fileid){
    $('#edit-id').val(fileid);
    var formData = new FormData($( "#brand-info-form" )[0]);
    $.ajax({
        url: url_proxy,
        type: 'POST',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success:function (rtn) {
//      　     window.location.reload();//刷新当前页面.
        },
        error:function(er){
//      　  window.location.reload();//刷新当前页面.
        }
    });
    
}