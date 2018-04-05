$(document).ready(function() {
	showGoodsAuthModal(getUrlParam("id"))
	  $('body').on('click','#prev-step',function(){
	  window.location.href = "goods-info-upload.html?id="+getUrlParam("id");
  });
	  $('body').on('click','#next-step',function(){
		  window.location.href = "goods-info.html";
	  });
});
function showGoodsAuthModal(goodsInfoId){
	infoData.detail(goodsInfoId,function(json){
		infoView.fillAuditDetail(json);
	});
}