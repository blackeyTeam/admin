var shonInfoView = {
	shopInfoPageList:function(json){
		var tpl = [
			'{@each content as it,k}',
				'<tr class="gradeX">',
		            '<td>${it.name}</td>',
		            '<td><img src="${it.portrait}" width="120" height="80" class="img-rounded"></td>',
		            '<td>${it.vInfoBo.mobile}</td>',
		            '<td>${it.address}</td>',
		            '<td>${it.briefInfo}</td>',
		            '<td class="center">',
		                '<a href="shops-info-edit.html?id=${it.id}" class="btn btn-success btn-circle" title="编辑"><i class="fa fa-edit"></i></a>',
		                '<a data-toggle="modal" href="shops-classify.html?shopId=${it.id}" class="btn btn-success btn-circle" title="店铺分类"><i class="fa fa-link"></i></a>',
		                '<a href="shops-info-edit.html" class="btn btn-circle btn-danger" title="禁用"><i class="fa fa-ban"></i></a>',
		                '<a href="javascript:;" class="btn-shops-del btn btn-warning btn-circle" id="${it.id}" title="删除"><i class="fa fa-trash"></i></a>',
		                '<a data-toggle="modal" href="javascript:;" class="btn-goods-ad btn btn-info btn-circle" id="${it.id}" title="推荐"><i class="fa fa-level-up"></i></a>',
		            '</td>',
		        '</tr>',
			'{@/each}',
		].join('\n');
		$('#shopInfo-list').html(juicer(tpl,json));
		$("#page-info").html(data_page(json.totalElements,json.totalPages,json.number,"shopInfoPageList","maxsize"));
        $("#maxsize option[value="+json.size+"]")[0].selected=true;
        $("#maxsize").change(function(){
             loadVendorList(0);
         });
	}
};