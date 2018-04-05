$(function(){
	showAddress(0);
	$('body').on('click','.save_address',addAddress);
//	$('body').on('click','.btn-serarch',function(){
//		showExpressageCompany(0);
//	});
});

function showAddress(page){
	var size = $("#address-size").val() ? $("#address-size").val() : 10;
	var data = $.param({pageSize:size,pageNumber:page})+ '&' + $('#address-search-form').serialize();
	addressData.pageList(data,function(json){
		addressView.pageList(json);
	});
}

function addAddress(){
	var options1=$("#rootLevel-location option:selected");
	var options2=$("#2Level-location option:selected");
	var options3=$("#3Level-location option:selected");
	var address=$("#address").val();
	var areaName=options1.text()+"-"+options2.text()+"-"+options3.text();
	var data = $('#address-form').serialize()+"&"+ $.param({'address':areaName+"-"+address,'areaName':areaName}) ;
	addressData.save(data,function(json){
		showMsgPane(json.message);
		$('#modal-address-add').modal('hide');
		showAddress(0);
	});
}