$(document).ready(function() {
	var goodsInfoId=getUrlParam("id");
	$('#goodsInfo-id').val(goodsInfoId);
	showGoodsPic(goodsInfoId);
  $('body').on('click', '#btn-pic-upload', uploadFileDialog);
  $('body').on('click','.btn-pic-del',delGoodsPic);
  $('body').on('click','#next-step',function(){
	  window.location.href = "goods-info-preview.html?id="+goodsInfoId;
  });
});
function delGoodsPic(){
	var obj = $(this);
    var callback = function() {
    	goodsPicData.deleted(obj.attr('id'),function(){
    		obj.parents('tr').remove();
    	});
    };
    showMsgPane('您确定要删除吗？', 'confirm', callback);		
}

function showGoodsPic(goodsInfoId){
	goodsPicData.list({goods_id:goodsInfoId},function(json){
		goodsPicView.list(json);
	});
}

function uploadFileDialog() {
	  $('#callback-url').val(server + "/server/commodity/admin/goods/pic/update/logo.json"); 
	    var url = "/server/commodity/admin/goods/pic/save.json";
	    var data = $('#goods-upload-form').serialize();
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
	      var formData = new FormData($( "#goods-upload-form" )[0]);
	      $.ajax({
	          url: url_proxy,
	          type: 'POST',
	          data: formData,
	          cache: false,
	          contentType: false,
	          processData: false,
	          success:function (rtn) {
	        　     window.location.reload();//刷新当前页面.
	          },
	          error:function(er){
	        　  window.location.reload();//刷新当前页面.
	          }
	      });
	      
	}