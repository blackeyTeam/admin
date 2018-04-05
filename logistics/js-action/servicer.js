$(function(){
	showExpressageCompany(0);
	$('body').on('click','.save_expressage',addExpressageCompany);
	$('body').on('click','.btn-serarch',function(){
		showExpressageCompany(0);
	});
});

function showExpressageCompany(page){
	var size = $("#expressage-size").val() ? $("#expressage-size").val() : 10;
	var data = $.param({pageSize:size,pageNumber:page})+ '&' + $('#expressageCompany-search-form').serialize();
	expressageCompanyData.pageList(data,function(json){
		expressageCompanyView.pageList(json);
	});
}

function addExpressageCompany(){
	text = $("input:checkbox[name='expressageType']:checked").map(function(index,elem) {		
		return $(elem).val();		
	}).get().join(',');		
	var data = $('#expressage-form').serialize()+"&types="+text;
	expressageCompanyData.save(data,function(json){
		showMsgPane(json.message);
		$('#modal-servicer-add').modal('hide');
		showExpressageCompany(0);
	});
}