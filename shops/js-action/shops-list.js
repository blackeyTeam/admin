$(document).ready(function() {
	shopInfoList(0);
	$('body').on('click','.btn-shops-del',delShopInfo);
	$('body').on('click','#shopInfo-search',function(){
		shopInfoList(0);
	});
	$('body').on('click','.btn-goods-ad',showAdModal);
	$('body').on('click','#btn-save-recommend',saveRecInfo);
});
function saveRecInfo(){
	var id = $('#objectId').val();
	if($('#positionId').val()==""){
		$('#recommend-add-error').text("请选择推荐位置");
		return false;
	}
	var data = $('#recommend-position-form').serialize();
	saveRecommemd(data,function(json){
		if(json.code=="exsit"){
			$('#recommend-add-error').text("已存在");
		}else{
			loadRecommendList(id,$('#recommend-list'));
		}
	});
}

function showAdModal(){
	var id = $(this).attr('id');
	$('#objectId').val(id);
	$.getJSON("/server/commodity/admin/shop/info/detail/"+id+".json",function(json){
		var categoryIds = "";
		$.each(json.shopkc,function(i,item){
			categoryIds += item.categoryId + ";";
		});
		$('#categoryIds').val(categoryIds);
	});
	$('#recommend-url').val("detail.html?id="+id);
	loadPosition("root",$('#tag-content-1'));
	$('#modal-goods-ad').modal('show');
	loadRecommendList(id,$('#recommend-list'));
}

function shopInfoList(page){
	var data = $.param({'start':page,'size':10}) + '&' + $('#shopInfo-search-form').serialize()
	shopInfoData.pagelist(data,function(json){
		shonInfoView.shopInfoPageList(json);
	});
}

function delShopInfo(){
	var obj = $(this);
    var callback = function() {
    	shopInfoData.delShopInfo(obj.attr('id'),function(){
    		shopInfoList(0);
    	});
    };
    showMsgPane('您确定要删除该商户吗？', 'confirm', callback);		
}