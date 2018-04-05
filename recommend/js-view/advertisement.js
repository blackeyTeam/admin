var recommendView = {
		recommendPageList:function(json){
		var tpl = [
			'{@each content as it,k}',
				'<tr class="gradeX">',
		            '<td>',
		                '<div class="i-checks">',
		                    '<label>',
		                       ' <input type="checkbox" class="chk" value="option1" name="a"> <i></i> </label>',
		                '</div>',
		            '</td>',
		            '<td>${it.title}</td>',
		            '<td>${it.positionBo.description}</td>',
		            '<td>${it.width}</td>',
		            '<td>',
		                '${it.height}',
		            '</td>',
//		            '<td class="center">',
//		                '${it.type}',
//		            '</td>',
		            '<td class="center">${it.url}</td>',
		            '<td class="center">${it.picurl}</td>',
		            '<td class="center">${it.description}</td>',
//		            '<td class="center">${it.startDate}</td>',
//		            '<td class="center">${it.endDate}</td>',
		            '<td class="center">',
		                '<a href="#" class="btn btn-success btn-circle btn-recommend-edit" id="${it.id}" title="编辑"><i class="fa fa-edit"></i></a>',
//		                '<a href="javascript:;" class="btn btn-circle btn-primary" title="上架"><i class="fa fa-check"></i></a>',
		                '<a href="javascript:;" class="btn-recommend-del btn btn-warning btn-circle" id="${it.id}" title="删除"><i class="fa fa-trash"></i></a>',
		            '</td>',
		        '</tr>',
			'{@/each}',
		].join('\n');
		$('#recommend-list').html(juicer(tpl,json));
		$("#page-info").html(data_page(json.totalElements,json.totalPages,json.number,"recommendList","maxsize"));
        $("#maxsize option[value="+json.size+"]")[0].selected=true;
        $("#maxsize").change(function(){
             loadVendorList(0);
         });
	}
};