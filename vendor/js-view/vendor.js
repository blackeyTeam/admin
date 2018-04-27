var vendorView = {
	fillVendorList:function(json){

            var content={
                content:json.content
            }
		var tpl = [
			'{@each content as it,k}',
				'<tr class="gradeX">',
                    '<td>${it.name}</td>',
                    '<td>${it.intro}</td>',
                    '<td>${it.salePrice}</td>',
                    '<td>${it.discountPrice}</td>',
                    '<td>${it.lowPrice}</td>',
                    '<td>${it.stock}</td>',
                    '<td class="center">${it.saleOut}</td>',
                    '<td>${it.attention}</td>',
                    '<td class="center">',
                        '<a href="vendor-edit-step1.html?id=${it.id}" class="btn btn-success btn-circle" title="编辑"><i class="fa fa-edit"></i></a>',
                        '<a data-toggle="modal" href="#modal-vendor-del" id="${it.id}" class="btn btn-warning btn-circle modal-vendor-del" title="删除"><i class="fa fa-trash"></i></a>',
                        // '<a href="javascript:;" id="${it.id}" class="btn btn-default btn-circle btn-account" title="账户信息"><i class="fa fa-user"></i></a>',
                    '</td>',
                '</tr>',
			'{@/each}',
		].join('\n');
		$('#vendor-list').html(juicer(tpl,content));
		$("#page-info").html(data_page(json.totalElements,json.totalPages,json.page.pageNumber,"loadVendorList","maxsize"));
        $("#maxsize option[value="+json.page.pageSize+"]")[0].selected=true;
        $("#maxsize").change(function(){
             loadVendorList(0);
         });
	}
};