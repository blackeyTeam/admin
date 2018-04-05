$(function(){
    $('body').on('click', '#tree-tag-choose .label-remove',function () {
    	$('#positionId').val($(this).prev().attr('data-id'));
        $(this).next().remove();
        $(this).next().remove();
        $(this).remove();
        $('#tree-tag-choose .tag-content').hide();
        $('.'+$(this).attr('data-tag')).show();
    });

    $('body').on('click', '#tree-tag-choose .tag-content label',function () {
        $('#tree-tag-choose .label-current').append('<label data-tag="'+ $(this).parent().attr('data-label') +'" class="label label-info label-remove" data-id="'+$(this).attr("data-id")+'">'+ $(this).text() +'<i class="fa fa-remove"></i></label>');
        $(this).parent().hide();
        $(this).parent().next().show();
        $('#positionId').val($(this).attr("data-id"));
        loadPosition($(this).attr("data-id"),$('#'+$(this).parent().next().attr('id')));
    });

    $('body').on('click','.btn-recommend-del',deleteRecommend);
});
function loadPosition(parentId,anchor){
	var url = "/server/recommend/admin/recommend/position/list.json";
	var data = {parentId:parentId};
	$.getJSON(url,data,function(json){
		var list = {};
		list.content = json;
		anchor.html(positionHtml(list));
	});
}
function positionHtml(list){
	var tpl = [
		'{@each content as it ,k}',
			'<label class="label label-white" data-id="${it.id}">${it.name}</label>',
		'{@/each}',
	].join('\n');
	return juicer(tpl,list);
}

function saveRecommemd(data,callback){
	var url = "/server/recommend/admin/recommend/info/save.json";
	$.post(url,data,function(json){
		callback(json);
	});
}

function saveRecommemd(data,callback) {
	  $('#callback-url').val(server + "/server/recommend/admin/recommend/info/update/picurl.json"); 
	    var url = "/server/recommend/admin/recommend/info/save.json";
//	    var data = $('#shopInfo-add').serialize();
	    var strFileName = $('#file').val();
	        if(strFileName.length>0){
	            if(!IsValidFileExtention(strFileName,["jpeg","jpg","png"])){
	              alert("文件格式不正确！");
	              return false;
	        }
	    }
	    $.post(url,data,function(rtn){
	        uploadFile(rtn.data);
	        callback(rtn);
	    });
	}
function uploadFile(fileid){
	      $('#member-add-id').val(fileid);
//	      alert("fileid:"+$('#member-add-id').val());
	      var formData = new FormData($( "#recommend-position-form" )[0]);
	      $.ajax({
	          url: url_proxy,
	          type: 'POST',
	          data: formData,
	          cache: false,
	          contentType: false,
	          processData: false,
	          success:function (rtn) {
	        　   window.location.reload();
	          },
	          error:function(er){
	        　window.location.reload();
	          }
	      });
	}

function loadRecommendList(id,anchor){
	var url = "/server/recommend/admin/recommend/info/list.json";
	var data = {objectId:id};
	$.getJSON(url,data,function(json){
		var list = {};
		list.content = json;
		anchor.html(recommendListHtml(list));
	});
}

function recommendListHtml(list){
	var tpl = [
		'{@each content as it,k}',
			 '<tr>',
                '<td>${it.title}</td>',
                '<td>${it.picurl}</td>',
                '<td>${it.url}</td>',
                '<td>${it.positionBo.name}</td>',
                '<td><a href="javascript:;" class="btn-recommend-del btn btn-warning btn-circle" title="删除" id="${it.id}"><i class="fa fa-trash"></i></a>',
                '</td>',
            '</tr>',
		'{@/each}',
	].join('\n');
	return juicer(tpl,list);
}

function deleteRecommend(){
	var tr = $(this).parent().parent();
	var url = "/server/recommend/admin/recommend/info/delete.json";
	var id = $(this).attr('id');
	$.post(url,{id:id},function(){
		tr.remove();
	});
}