var id;
$(function(){
	id = getUrlParam("id");
	if(id!=null&&id.trim()!=""){
		showOrderDetail();
	}
});

function showOrderDetail(){
	detailData.detail(id,function(json){
		detailView.fillDetail(json);
	});
}