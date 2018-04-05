$(function($){
	initSysKCSelectTree("root",$("#kc-tree-select"));
	loadGoodsList(0);
	$('body').on('click','#btn-goods-search',function(){
		loadGoodsList(0);
	});
	$('body').on('click','.btn-audit',auditGoods);
	$('body').on('click','.btn-goods-ad',showAdModal);
	$('body').on('click','#btn-save-recommend',saveRecInfo);
});

function loadGoodsList(page){
	var size = $("#goods-size").val() ? $("#goods-size").val() : 10;
	var data = $.param({'start':page,'size':size}) + '&' + $('#goods-info-search-form').serialize();
	infoData.pagelist(data,function(json){
		infoView.fillPagelist(json);
	});
}

function deleteGoods(){
	var ids = [];
	if($(this).hasClass('btn-goods-del')){
		ids.push($(this).attr('id'))
	}else{
		var table = $('#goods-list');
		var chkBoxes = table.find('input.chk:checked');
		if (chkBoxes.length==0) {
			showMsgPane("请选择要删除商品！");
			return false;
		};
		chkBoxes.each(function (i, o) {
			ids.push($(o).attr('id'));
	    });
	}
    var obj = $(this);
    var callback = function() {
    	infoData.delete({id:ids},function(json){
    		// obj.parents('tr').remove();
    		loadGoodsList(0);
    	});
        
    };
    showMsgPane('确认删除吗？', 'confirm', callback);
}

function showGoodsAuthModal(){
	var id = $(this).attr('id');
	infoData.detail(id,function(json){
		infoView.fillAuditDetail(json);
	});
}

function auditGoods(){
	var btnId = $(this).attr('id');
	var status = "fail";
	if(btnId=="btn-success"){
		status = "success";
	}
	var data = {id:$('#goods-id').val(),status:status}
	infoData.audit(data,function(json){
		loadGoodsList(0);
		$('#modal-goods-auth').modal('hide');
	});
}

function showAdModal(){
	var id = $(this).attr('id');
	$('#objectId').val(id);
	$.getJSON("/server/commodity/admin/goods/info/detail/"+id+".json",function(json){
		var categoryIds = "";
		$.each(json.syskc,function(i,item){
			categoryIds += item.categoryId + ";";
		});
		$('#categoryIds').val(categoryIds);
	});
	$('#recommend-url').val("../goods/detail.html?id="+id);
	loadPosition("root",$('#tag-content-1'));
	$('#modal-goods-ad').modal('show');
	loadRecommendList(id,$('#recommend-list'));
}

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