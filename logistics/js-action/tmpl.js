$(function(){
	showFreightRate(0);
	$('body').on('click','.save_freightRate',addFreightRate);
//	$('body').on('click','.btn-serarch',function(){
//		showExpressageCompany(0);
//	});
});

function showFreightRate(page){
	var size = $("#freightRate-size").val() ? $("#freightRate-size").val() : 10;
	var data = $.param({pageSize:size,pageNumber:page})+ '&' + $('#freightRate-search-form').serialize();
	freightRateData.pageList(data,function(json){
		freightRateView.pageList(json);
	});
}

function addFreightRate(){
	var data = $('#freightRate-form').serialize();
	freightRateData.save(data,function(json){
		showMsgPane(json.message);
		$('#modal-tmpl-add').modal('hide');
//		showExpressageCompany(0);
		showFreightRate(0);
	});
}