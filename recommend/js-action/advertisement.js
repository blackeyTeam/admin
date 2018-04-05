$(function($) {
	recommendList(0);
	$('body').on('click', '.btn-recommend-del', function() {
		var obj = $(this);
		var callback = function() {
			recommendData.del(obj.attr('id'), function() {
				recommendList(0);
			});
		};
		showMsgPane('您确定要删除吗？', 'confirm', callback);
	});
	$('body').on('click', '#add-advertisement', showAddModal);
	$('body').on('click', '#btn-save-advertisement', saveAdvertisement);
	$('body').on('click', '.btn-recommend-edit', showAdvertisementInfo);
});

function recommendList(page) {
	var data = $.param({
		'start': page,
		'size': 10
	}) + '&' + $('#recommend-search-form').serialize()
	recommendData.pagelist(data, function(json) {
		recommendView.recommendPageList(json);
	});
}

function showAddModal() {
	$("#file").val("");
	$("#advertisement-title").val("");
	$("#advertisement-url").val("");
	$("#advertisement-description").val("");
	$('#advertisement-position').val("")
	loadPosition("root", $('#tag-content-1'));
	$('.advertisement').addClass("hide");
	$("#modal-advertisement-add").modal('show');
}

function saveAdvertisement() {
	var id = $("#member-add-id").val();
	if (id == "") {
		if ($('#positionId').val() == "") {
			$('#recommend-add-error').text("请选择推荐位置");
			return false;
		}
	}
	var data = $('#advertisement-position-form').serialize();
	saveRecommemd(data, function(json) {
		if (json.code == "exsit") {
			$('#recommend-add-error').text("已存在");
		} else {

		}
	});
}

function showAdvertisementInfo() {
	$("#file").val("");
	$("#advertisement-title").val("");
	$("#advertisement-url").val("");
	$("#advertisement-description").val("");
	$('#advertisement-position').val("")
	var id = $(this).attr("id");
	loadPosition("root", $('#tag-content-1'));
	$('.advertisement').removeClass("hide");
	recommendData.detail(id, function(json) {
		$("#advertisement-title").val(json.title);
		$("#advertisement-url").val(json.url);
		$("#advertisement-description").val(json.description);
		$('#advertisement-position').val(json.positionBo.description)
			// $('#tree-tag-choose .label-current').append('<label data-tag="'+ $("#tree-tag-choose .tag-content label").parent().attr('data-label') +'" class="label label-info label-remove" data-id="'+$("#tree-tag-choose .tag-content label").attr(json.positionBo.parentId)+'">'+ $("#tree-tag-choose .tag-content label").text(json.positionBo.name) +'<i class="fa fa-remove"></i></label>');
	});
	$("#member-add-id").val(id);

	$("#modal-advertisement-add").modal('show');

}