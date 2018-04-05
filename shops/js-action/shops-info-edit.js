$(document).ready(function() {
	$('body').on('click', '#btn-shopInfo-save', uploadFileDialog);
	var venderId=getUrlParam("vendorId");
	var shopId=getUrlParam("id");
	if(shopId!=null){
		shopDeltail(shopId)
	}
	if(venderId!=null){
		judgeShopInfo(venderId);//从商户页面进入判断是否开通过店铺
	}
	locationInitLocSelectTree("100000",$("#location-tree"));
//	initSysKCSelectTree("root",$("#location-tree"))
	initSysSelectMultiTree("root",$('#system-tree')); 
});

function shopDeltail(shopId){
	  var url = "/server/commodity/admin/shop/info/detail/"+shopId+".json";
	    $.post(url,function(rtn) {
	    	$("#member-add-id").val(rtn.id);
	    	$("#vendorInfoId").val(rtn.vInfoBo.id);
	    	$("#shopName").val(rtn.name);
	    	$("#gp_location").val(rtn.locationBo.id);
	    	$("#input-location").val(rtn.locationBo.name);
	    	$("#address").val(rtn.address);
	    	$("#briefInfo").val(rtn.briefInfo);
	    	$("#domain").val(rtn.domain);
	    	$("#demo-input-facebook-theme").val(rtn.sortnum);
	    	var name = "";
	    	var ids = "";
	    	$.each(rtn.shopkc,function(i,skc){
	    		if(i!=skc.length-1){
	    			name+= skc.categoryName+",";
	    			ids+= skc.categoryId+",";
	    		}else{
	    			name+= skc.categoryName;
	    			ids+=skc.categoryId;
	    		}
	    	});
	    	$('#input-system').val(name);
			$('#gp_system').val(ids);
	    });
}

function uploadFileDialog() {
	  $('#callback-url').val(server + "/server/commodity/admin/shop/info/update/logo.json"); 
	    var url = "/server/commodity/admin/shop/info/save.json";
	    var data = $('#shopInfo-add').serialize();
	    var strFileName = $('#file').val();
	        if(strFileName.length>0){
	            if(!IsValidFileExtention(strFileName,["jpeg","jpg","png"])){
	              alert("文件格式不正确！");
	              return false;
	        }
	    }
	    $.post(url,data,function(rtn){
	        uploadFile(rtn.data);
	    });
	}
function uploadFile(fileid){
	      $('#member-add-id').val(fileid);
//	      alert("fileid:"+$('#member-add-id').val());
	      var formData = new FormData($( "#shopInfo-add" )[0]);
	      $.ajax({
	          url: url_proxy,
	          type: 'POST',
	          data: formData,
	          cache: false,
	          contentType: false,
	          processData: false,
	          success:function (rtn) {
	        　    window.location.href = "shops-list.html";
	          },
	          error:function(er){
	        　 window.location.href = "shops-list.html";
	          }
	      });
	      
	}

//function save() {
//    var url = "/server/shop/info/save.json";
//    var data = $('#shopInfo-add').serialize();
//    $.post(url, data, function(rtn) {
//    	showMsgPane("保存成功！");
//        window.location.href = "shops-list.html";
//    });
//}

function judgeShopInfo(venderId){
	var url="/server/commodity/admin/shop/info/list.json?vendorId="+venderId;
	$.post(url,function(rtn){
		if(rtn.length>0){
			 var callback = function(){
				 window.location.href = "shops-list.html";
			 }
			showMsgPane('您已经开通过店铺了,请前往店铺列表中查询！', 'alert', callback);		
		}else{
			$("#vendorInfoId").val(venderId);
		}
	})
}
function chooseLocation(){
    if ($('#gp_location').val() && selectNode == null) {
        $('#gp_location').val("100000");
    } else {
        if (selectNode != null) {
            $('#gp_location').val(selectNode.id);
            $('#input-location').val(selectNode.name);
        }
    }
    hideRightTree();
}