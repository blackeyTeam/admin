var vendorView = {
		fillVendorCerList:function(json){
		var content={
			content:json.data
		}
		var tpl = [
			'{@each content as it,k}',
				'<tr class="gradeX">',
		            '<td>${it.name}</td>',
		            '<td>${it.code}</td>',
		            '<td>${it.type.name}</td>',
		            '<td>',
		                '<img alt="no=" width="80" height="60" src="${it.pic1}">',
		            '</td>',
		            '<td class="center">',
		                '<img alt="no=" width="80" height="60" src="${it.pic2}">',
		            '</td>',
		            '<td>',
		                '<img alt="no=" width="80" height="60" src="${it.pic3}">',
		            '</td>',
		            '<td>${it.status.name}</td>',
		            '<td class="center">',
		                '<a href="javascript:;" class="btn-auth-ok btn btn-success btn-circle" name="ok" id="${it.id}" title="通过"><i class="fa fa-check"></i></a>',
		                '<a href="javascript:;" class=" btn-auth-remove btn btn-warning btn-circle" id="${it.id}" name="fail" title="不通过"><i class="fa fa-remove"></i></a>',
		            '</td>',
		        '</tr>',
			'{@/each}',
		].join('\n');
		$('#vendor-list').html(juicer(tpl,content));
		$("#page-info").html(data_page(json.totalElements,json.totalPages,json.page.pageNumber,"loadVendorCerList","maxsize"));
        $("#maxsize option[value="+json.page.pageSize+"]")[0].selected=true;
        $("#maxsize").change(function(){
        	loadVendorCerList(0);
         });
	}
};