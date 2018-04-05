var expressageCompanyView={
		pageList:function(json){
			var tpl = [
					'{@each data as it,k}',
						'<tr class="gradeX">',
			                '<td>{@each it.type as ty,j}${ty.name},{@/each}</td>',
			                '<td>${it.name}</td>',
			                '<td>${it.code}</td>',
			                '<td>${it.tel}</td>',
			                '<td><a href="${it.website}">${it.website}</a></td>',
//			                '<td class="center">',
//			                    '<a data-toggle="modal" href="#modal-servicer-edit" class="btn btn-success btn-circle" title="编辑"><i class="fa fa-edit"></i></a>',
//			                    '<a href="javascript:;" class="btn btn-warning btn-circle btn-servicer-del" title="删除"><i class="fa fa-trash"></i></a>',
//			                '</td>',
			            '</tr>',
					'{@/each}',
				].join('\n');
				$('#expressage_pagelist').html(juicer(tpl,json));
				$("#page-info").html(data_page(json.totalElements,json.totalPages,json.page.pageNumber,"showExpressageCompany","maxsize"));
		        $("#maxsize option[value="+json.page.pageSize+"]")[0].selected=true;
		        $("#maxsize").change(function(){
		             loadVendorList(0);
		         });
		}
};