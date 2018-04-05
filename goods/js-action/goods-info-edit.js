var id;
$(function(){
	id = getUrlParam("id");
	if(id!=null&&id.trim()!=""){
		$('#goods-id').val(id)
		showGoodsDetail();
	}
	initSysKCSelectTree("root",$("#system-category-tree"));
	$('body').on('click','#btn-choose-shop',chooseShop);
	$('body').on('click','#btn-show-shop',showShopListModal);
	$('body').on('click','#btn-goods-save',saveAndNext);
});

function showGoodsDetail(){
	editData.detail(id,function(json){
		editView.fillDetail(json);
	});
}

 function showCategoryparam(node,param){
 	$('#categpry-choose').text(node.name);
 	editData.param({catalogId:node.id},function(json){
 		editView.fillParamTable(json,param);
 	});
 }

 function chooseShop(){
 	var table = $('#shop-list');
 	var chk = table.find('input:checked');
 	if(chk.length==0){
 		showMsgPane("请选择店铺");
 		return false;
 	}
 	var shop = chk[0];
 	$('#shopId').val($(shop).attr('id'));
 	$('#shop-name').text($(shop).parents('td').next().text())
 	$('#modal-shops-list').modal('hide');
 	initSPKCSelectTree("root",$('#shop-category-tree'),$(shop).attr('id'));
 }

 function showShopListModal(){
 	loadShopList(0);
 	$('#modal-shops-list').modal('show');
 }

 function loadShopList(page){
 	var size = $("#shop-size").val() ? $("#shop-size").val() : 10;
	var data = $.param({'start':page,'size':size}) + '&' + $('#shop-info-search-form').serialize();
 	editData.shoplist(data,function(json){
 		editView.fillShopTable(json);
 	});
 }

 function saveAndNext(){
 	var paramSelect = $('.paramValue-select');
    var paramValue = "";
    $.each(paramSelect,function(i,item){
        paramValue += $(item).val()+";";
    });
    if(paramValue.length>0){
        paramValue = paramValue.substring(0,paramValue.length-1);
    }
    $('#input-paramValue').val(paramValue);
 	var data = $('#goods-info-form').serialize();
 	editData.save(data,function(json){
 		location.href = "goods-info-upload.html?id="+ json.data;
 	});

 }