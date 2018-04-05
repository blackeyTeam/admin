$(function($){
	loadBrandList(0);
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
	$.getJSON("/server/commodity/admin/basic/brand/detail/"+id+".json",function(json){
		var categoryIds = "";
		$.each(json.bclist,function(i,item){
			categoryIds += item.categoryId + ";";
		});
		$('#categoryIds').val(categoryIds);
	});
	$('#recommend-url').val("detail.html?id="+id);
	loadPosition("root",$('#tag-content-1'));
	$('#modal-goods-ad').modal('show');
	loadRecommendList(id,$('#recommend-list'));
}


function loadBrandList(page){
	var size = $("#brand-size").val() ? $("#brand-size").val() : 10;
	var data = $.param({'start':page,'size':size}) + '&' + $('#brand-search-form').serialize();
	brandData.pagelist(data,function(json){
		brandView.fillPagelist(json);
	});
}

function deleteBrand(){
    var obj = $(this);
    var callback = function() {
        obj.parents('tr').remove();
        var id  = obj.attr("id");
        brandData.delete(id,function(json){
        	loadBrandList(0);
        });
    };
    showMsgPane('确认删除吗？', 'confirm', callback);
}
