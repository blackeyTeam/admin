var brandView = {
	fillPagelist:function(json){
        $.each(json.content,function(i,item){
            var category = "";
            $.each(item.bclist,function(j,bc){
                if(j!=item.bclist.length-1){
                    category += bc.categoryName+",";
                }else{
                    category += bc.categoryName;
                }
            });
            item.category = category;
        });
		var tpl = [
			'{@each content as it ,k}',
				'<tr class="gradeX">',
                    '<td>${it.name}</td>',
                    '<td>${it.enName}</td>',
                    '<td>${it.category}</td>',
                    '<td class="center">',
                        '<img alt="no=" width="100" src="${it.logo}">',
                    '</td>',
                    '<td class="center">',
                        '<img alt="no=" width="100" src="${it.logo2}">',
                    '</td>',
                    '<td class="center">',
                        '<a href="goods-brand-edit.html?id=${it.id}" class="btn btn-success btn-circle" title="编辑"><i class="fa fa-edit"></i></a>',
                        '<a data-toggle="modal" href="javascript:;" class="btn-goods-ad btn btn-danger btn-circle" id="${it.id}" title="推荐"><i class="fa fa-level-up"></i></a>',
                        '<a href="javascript:;" class="btn-brand-del btn btn-warning btn-circle" title="删除" id="${it.id}"><i class="fa fa-trash"></i></a>',
                    '</td>',
                '</tr>',
			'{@/each}',
		].join('\n');
		$('#brand-list').html(juicer(tpl,json));
		$("#page-info").html(data_page(json.totalElements,json.totalPages,json.number,"loadBrandList","brand-size"));
        $("#brand-size option[value="+json.size+"]")[0].selected=true;
        $("#brand-size").change(function(){
             loadBrandList(0);
         });
	}
};