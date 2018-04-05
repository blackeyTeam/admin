var freightRateView={
		pageList:function(json){
			var tpl = [
					'{@each data as it,k}',
						'<tr class="gradeX">',
			                '<td>商家名称</td>',
			                '<td>${it.type.name}</td>',
			                '<td>名称</td>',
//			                '<td></td>',
			                '{@if it.type.value=="weight"}',
			                '<td>${it.startAmount}公斤以内${it.startPrice}元，每增加${it.stepAmount}件，运费增加${it.stepPrice}元</td>',
			                '{@/if}',
			                '{@if it.type.value=="quantity"}',
			                '<td>${it.startAmount}斤以内${it.startPrice}元，每增加${it.stepAmount}斤，运费增加${it.stepPrice}元</td>',
			                '{@/if}',
			                '{@if it.type.value=="volume"}',
			                '<td>${it.startAmount}立方米以内${it.startPrice}元，每增加${it.stepAmount}立方米，运费增加${it.stepPrice}元</td>',
			                '{@/if}',
//			                '<td class="center">',
//			                    '<a data-toggle="modal" href="#modal-servicer-edit" class="btn btn-success btn-circle" title="编辑"><i class="fa fa-edit"></i></a>',
//			                    '<a href="javascript:;" class="btn btn-warning btn-circle btn-servicer-del" title="删除"><i class="fa fa-trash"></i></a>',
//			                '</td>',
			            '</tr>',
					'{@/each}',
				].join('\n');
				$('#freightRate_pagelist').html(juicer(tpl,json));
				$("#page-info").html(data_page(json.totalElements,json.totalPages,json.page.pageNumber,"showFreightRate","maxsize"));
		        $("#maxsize option[value="+json.page.pageSize+"]")[0].selected=true;
		        $("#maxsize").change(function(){
		             loadVendorList(0);
		         });
		}
};