$(function($) {
	loadGoodsList(0);
	$('body').on('click', '.btn-goods-price', function() {
		var id = $(this).attr("id");
		showprice(id);
	});
	$('body').on('click', '#btn-goods-search', function() {
		loadGoodsList(0);
	});
	$('body').on('click', '.btn-goods-class-del', function() {
		var id = $(this).attr("id");
		var obj = $(this);
		deleteBlock(id, obj);
	});
	$('body').on('click', '#btn-first-param-save', saveParamFormFirst);
	$('body').on('click', '#btn-S-param-save', saveParamFormSecond);
	$('body').on('click', '.btn-other-param-save', function() {
		var shopGoodsId = $('#shopGooodsId').val();
		var title = $(this).parents('form').find('.other-title').val();
		var type = $(this).parents('form').find('input[name=shopClassParamType]').val();
		var paramId = $(this).parents('form').find('input[name=paramId]').val();
		var tr = $(this).parents('form').find('.other-common');
		saveParamFormOther(shopGoodsId, title, type, paramId, tr);
	});
	$('body').on('click', '.btn-goods-param-del', function() {
		var id = $(this).attr("id");
		// alert(id);
		// deleteGoodsParam(id);
		var obj = $(this);
		deleteBox(id, obj);
	});
});

function loadGoodsList(page) {
	var size = $("#goods-size").val() ? $("#goods-size").val() : 10;
	var data = $.param({
		'start': page,
		'size': size
	}) + '&' + $('#goods-info-search-form').serialize();
	infoData.pagelist(data, function(json) {
		infoView.fillPagelist(json);
	});
}

function showprice(id) {
	$('#shopGooodsId').val(id);
	var url = "/server/commodity/admin/goods/info/detailManyParam/" + id + ".json";
	$.getJSON(url, function(rtn) {
		if (rtn == null || rtn.sgcb == null) {
			$('#modal-tmpl').modal("show");
		} else {
			$(".dd-for-price").remove();
			$(".dd-for-stock").remove();
			$(".other-param").remove();
			showExistParam(rtn.sgcb);
			var objs = $(".dd-for-price").find('.c-i');
			var objss = $(".dd-for-stock").find('.c-i');
			addInput(objs);
			addInput(objss);
			$('#modal-tmpl').modal("show");
		}
	});
}

function addInput(obj) {
	$.each(obj, function(i, it) {
		$(it).html('<input type="text" name="' + $(it).attr('data-attr') + '" class="form-control" value="' + $(it).text().trim() + '">');
		$(it).removeClass('c-i');
	});
}


function saveParamFormFirst() {
	var shopGoodsId = $('#shopGooodsId').val();
	var title = $("#firstprice").val();
	var type = $(this).parents('form').find('input[name=shopClassParamType]').val();
	var paramId = $(this).parents('form').find('input[name=paramId]').val();
	//	alert(title);
	//	alert(type);
	var values = [];
	var tr = $(this).parents('form').find('.dd-for-price');
	$.each(tr, function(i, item) {
		var value = "";
		value += $(item).find('td').eq(0).find('input').val() + ";";
		value += $(item).find('td').eq(1).find('input').val() + ";";
		value += $(item).find('td').eq(2).find('input').val() + ";";
		value += $(item).find('td').eq(3).find('input').val();
		// value+=$(item).find('input[name=id]').val();
		values.push(value);
		// alert(value);
	});
	jQuery.ajaxSettings.traditional = true;
	var url = "/server/commodity/admin/goods/class/save.json";
	var data = {
		id: paramId,
		values: values,
		title: title,
		shopClassParamType: type,
		goodsId: shopGoodsId
	};
	$.post(url, data, function(rtn) {
		alert("添加成功");
		window.location.reload();
	});
}

function saveParamFormSecond() {

	var shopGoodsId = $('#shopGooodsId').val();
	var title = $("#Sprice").val();
	var type = $(this).parents('form').find('input[name=shopClassParamType]').val();
	var paramId = $(this).parents('form').find('input[name=paramId]').val();
	//	alert(title);
	//	alert(type);
	var values = [];
	var tr = $(this).parents('form').find('.dd-for-stock');
	$.each(tr, function(i, item) {
		var value = "";
		value += $(item).find('td').eq(0).find('input').val() + ";";
		value += $(item).find('td').eq(1).find('input').val();
		// value+=$(item).find('input[name=id]').val();
		values.push(value);
		// alert(value);
	});
	jQuery.ajaxSettings.traditional = true;
	var url = "/server/commodity/admin/goods/class/save.json";
	var data = {
		id: paramId,
		values: values,
		title: title,
		shopClassParamType: type,
		goodsId: shopGoodsId
	};
	$.post(url, data, function(rtn) {
		alert("添加成功");
	});

}

function saveParamFormOther(shopGoodsId, title, type, paramId, tr) {
	var values = [];
	$.each(tr, function(i, item) {
		var value = "";
		value = $(item).find('td').eq(0).find('input').val();
		// value+=$(item).find('input[name=id]').val();
		values.push(value);
		// alert(value);
	});
	jQuery.ajaxSettings.traditional = true;
	var url = "/server/commodity/admin/goods/class/save.json";
	var data = {
		id: paramId,
		values: values,
		title: title,
		shopClassParamType: type,
		goodsId: shopGoodsId
	};
	$.post(url, data, function(rtn) {
		alert("添加成功");
	});


}

function showExistParam(paramList) {
	$("#edit-paramId").val("");
	$("#firstprice").val("");
	$("#edit-stock-paramId").val("");
	$("#Sprice").val("");
	$.each(paramList, function(i, item) {
		if (item.shopClassParamType.value == "price") {
			$("#edit-paramId").val(item.id);
			$("#firstprice").val(item.title);
			for (var j = 0; j < item.goodsClassParams.length; j++) {
				if (j == 0) {
					var aa = "<a href='javascript:;' class='btn-tmpledit btn btn-success btn-circle' title='编辑'><i class='fa fa-edit'></i></a>"
				} else {
					var aa = "<a href='javascript:;' class='btn-tmpledit btn btn-success btn-circle' title='编辑'><i class='fa fa-edit'></i></a><a href='javascript:;' class='btn-goods-param-del btn btn-warning btn-circle' title='删除' id=" + item.goodsClassParams[j].id + "><i class='fa fa-trash'></i></a>"
				}
				$("#table-tmpl").append("<tr class='gradeX dd-for-price' >" +
					"</td>" +
					"<td class='c-i'>" + item.goodsClassParams[j].value + "</td><td class='c-i'>" + item.goodsClassParams[j].price1 + "</td>" +
					"<td class='c-i'>" +
					item.goodsClassParams[j].price2 +
					"</td>" +
					"<td class='c-i'>" +
					item.goodsClassParams[j].price3 +
					"</td>" +
					"<td class='center'>" + aa +
					// "<a href='javascript:;' class='btn-tmpledit btn btn-success btn-circle' title='编辑'><i class='fa fa-edit'></i></a>" +
					// "<a href='javascript:;' class='btn-goods-param-del  btn btn-warning btn-circle' title='删除' id='" + item.goodsClassParams[j].id + "'><i class='fa fa-trash'></i></a>" +
					"</td>" +
					"</tr>");
			}
		}
		if (item.shopClassParamType.value == "stock") {
			$("#edit-stock-paramId").val(item.id);
			$("#Sprice").val(item.title);
			for (var j = 0; j < item.goodsClassParams.length; j++) {
				if (j == 0) {
					var aa = "<a href='javascript:;' class='btn-tmpledit btn btn-success btn-circle' title='编辑'><i class='fa fa-edit'></i></a>"
				} else {
					var aa = "<a href='javascript:;' class='btn-tmpledit btn btn-success btn-circle' title='编辑'><i class='fa fa-edit'></i></a><a href='javascript:;' class='btn-goods-param-del btn btn-warning btn-circle' title='删除' id=" + item.goodsClassParams[j].id + "><i class='fa fa-trash'></i></a>"
				}
				$("#table-tmpl-2").append("<tr class='gradeX dd-for-stock'>" +
					"</td>" +
					"<td class='c-i'>" +
					item.goodsClassParams[j].value + "</td>" +
					"<td class='c-i'>" +
					item.goodsClassParams[j].stock +
					"</td>" +
					// "<td class='c-i'>" +
					// // "500" +
					// "</td>" +
					// "<td class='c-i'>" +
					// // "100" +
					// "</td>" +
					"<td class='center'>" +
					aa +
					"</td>" +
					"</tr>");

			}
		}
		if (item.shopClassParamType.value == "common") {
			if (item.goodsClassParams.length == 1) {
				for (var j = 0; j < item.goodsClassParams.length; j++) {
					$(".form-group-define").append(
						"<dl class='dl-horizontal fullscreen-dl other-param'>" +
						"<form class='input_box goodsparam-form" + item.title + "'>" +
						"<dt><label>可选规格</label></dt>" +
						"<dd><div class='display-inline input-md'><input type='hidden' name='paramId' class='other-paramId' value='" + item.id + "'>" +
						"<input type='text' name='title' class='other-title' value='" + item.title + "'>" +
						"&nbsp<a style='line-height:1' href='javascript:;' class='btn-goods-class-del btn btn-warning' title='删除' id='" + item.id + "'><i class='fa fa-trash'></i></a>" +
						"<input type='hidden' value='common' name='shopClassParamType'></div></dd>" +
						"<dt><label>可选参数</label></dt>" +
						"<dd><div class='table-responsive'>" +
						"<table id='table-tmpl' class='table table-striped table-bordered table-hover table-tmpl-other'>" +
						"<thead><tr><tr><th width='100'>规格</th><th width='100'>操作</th></tr></tr></thead>" +
						"<tbody><tr class='gradeX other-common'><td class='c-i' data-attr='a'>" + item.goodsClassParams[j].value + "</td><td class='center'>" +
						"<a href='javascript:;' class='btn-tmpledit btn btn-success btn-circle' title='编辑'><i class='fa fa-edit'></i></a>" +
						// "<a href='javascript:;' class='btn-goods-param-del btn btn-warning btn-circle' title='删除' id='" + item.goodsClassParams[j].id + "'><i class='fa fa-trash'></i></a>" +
						"</td></tr></tbody></table></div></dd>" +
						"<dt></dt>" +
						"<dd><a href='javascript:;' class='add-can-3'><code>+添加参数</code></a></dd>" +
						"<div class='modal-footer foot-foot'>" +
						"<button class='btn btn-sm btn-primary pull-right m-t-n-xs btn-other-param-save' type='button'><strong>保存</strong></button>" +
						"<button class='btn btn-sm btn-default pull-right m-t-n-xs mr10' data-dismiss='modal'><strong>取消</strong></button>" +
						"</div></form></dl>"
					);
				}
				var objs = $('.goodsparam-form' + item.title).find('.c-i');
				showInput(objs);
			}
			if (item.goodsClassParams.length > 1) {
				$(".form-group-define").append(
					"<dl class='dl-horizontal fullscreen-dl other-param'>" +
					"<form class='input_box  goodsparam-form" + item.title + "'>" +
					"<dt><label>可选规格</label></dt>" +
					"<dd><div class='display-inline input-md'><input type='hidden' name='paramId' class='other-paramId' value='" + item.id + "'>" +
					"<input type='text' name='title' class='other-title' value='" + item.title + "'>" +
					"&nbsp;<a style='line-height:1'  href='javascript:;' class='btn-goods-class-del btn btn-warning' title='删除' id='" + item.id + "'><i class='fa fa-trash'></i></a>" +
					"<input type='hidden' value='common' name='shopClassParamType'></div></dd>" +
					"<dt><label>可选参数</label></dt>" +
					"<dd><div class='table-responsive'>" +
					"<table id='table-tmpl' class='table table-striped table-bordered table-hover table-tmpl-other'>" +
					"<thead><tr><tr><th width='100'>规格</th><th width='100'>操作</th></tr></tr></thead>" +
					"<tbody><tr class='gradeX other-common'><td class='c-i' data-attr='a'>" + item.goodsClassParams[0].value + "</td><td class='center'>" +
					"<a href='javascript:;' class='btn-tmpledit btn btn-success btn-circle' title='编辑'><i class='fa fa-edit'></i></a>" +
					// "<a href='javascript:;' class='btn-goods-param-del btn btn-warning btn-circle' title='删除' id='" + item.goodsClassParams[0].id + "'><i class='fa fa-trash'></i></a>" +
					"</td></tr></tbody></table></div></dd>" +
					"<dt></dt>" +
					"<dd><a href='javascript:;' class='add-can-3'><code>+添加参数</code></a></dd>" +
					"<div class='modal-footer foot-foot'>" +
					"<button class='btn btn-sm btn-primary pull-right m-t-n-xs btn-other-param-save' type='button'><strong>保存</strong></button>" +
					"<button class='btn btn-sm btn-default pull-right m-t-n-xs mr10' data-dismiss='modal'><strong>取消</strong></button>" +
					"</div></form></dl>"
				);
				for (var j = 1; j < item.goodsClassParams.length; j++) {
					$('.goodsparam-form' + item.title).find('.table-tmpl-other').append(
						"<tr class='gradeX other-common'><td class='c-i' data-attr='a'>" + item.goodsClassParams[j].value + "</td><td class='center'>" +
						"<a href='javascript:;' class='btn-tmpledit btn btn-success btn-circle' title='编辑'><i class='fa fa-edit'></i></a>" +
						"<a href='javascript:;' class='btn-goods-param-del btn btn-warning btn-circle' title='删除' id='" + item.goodsClassParams[j].id + "'><i class='fa fa-trash'></i></a>" +
						"</td></tr>"
					);
				}
				var objs = $('.goodsparam-form' + item.title).find('.c-i');
				showInput(objs);
			}
		}

	});
}

function deleteGoodsParam(ids) {
	var id = ids;
	if (id != null) {
		var url = "/server/commodity/admin/goods/class/param/delete.json?id=" + id;
		$.post(url, function(rtn) {})
	}
}

function deleteBox(id, obj) {
	var callback = function() {
		obj.parents('tr').remove();
		deleteGoodsParam(id);
	};
	showMsgPane('确认删除吗？', 'confirm', callback);
}

function showInput(obj) {
	$.each(obj, function(i, it) {
		$(it).html('<input type="text" name="' + $(it).attr('data-attr') + '" class="form-control" value="' + $(it).text().trim() + '">');
		$(it).removeClass('c-i');
	});
}

function deleteBlock(id, obj) {
	var callback = function() {
		// alert(1);
		obj.parents('div').parents('dd').parents('form').parents('dl').remove();
		deleteGoodsClass(id);
	};
	showMsgPane('确认删除吗？', 'confirm', callback);
}

function deleteGoodsClass(ids) {
	var id = ids;
	if (id != null) {
		var url = "/server/commodity/admin/goods/class/delete.json?id=" + id;
		$.post(url, function(rtn) {})
	}
}