var addressView={
		pageList:function(json){
			var tpl = [
					'{@each data as it,k}',
						'<tr class="gradeX">',
		                    '<td>商家名称</td>',
		                    '<td>${it.linkman}</td>',
		                    '<td>${it.address}</td>',
		                    '<td>${it.zipcode}</td>',
		                    '<td>${it.mobile}/${it.tel}</td>',
		                    '{@if it._default==false}',
		                    	'<td>否</td>',
		                    '{@/if}',
		                    '{@if it._default==true}',
		                    	'<td>是</td>',
		                    '{@/if}',
//		                    '<td class="center">',
//		                        '<a href="javascript:;" class="btn btn-danger btn-circle" title="收藏"><i class="fa fa-heart"></i></a>',
//		                        '<a data-toggle="modal" href="#modal-address-edit" class="btn btn-success btn-circle" title="编辑"><i class="fa fa-edit"></i></a>',
//		                        '<a href="javascript:;" class="btn btn-warning btn-circle btn-address-del" title="删除"><i class="fa fa-trash"></i></a>',
//		                    '</td>',
		                '</tr>',
					'{@/each}',
				].join('\n');
				$('#address_pagelist').html(juicer(tpl,json));
				$("#page-info").html(data_page(json.totalElements,json.totalPages,json.page.pageNumber,"showAddress","maxsize"));
		        $("#maxsize option[value="+json.page.pageSize+"]")[0].selected=true;
		        $("#maxsize").change(function(){
		             loadVendorList(0);
		         });
		}
};