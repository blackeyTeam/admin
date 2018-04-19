var adminView = {
	fillAdminList:function(json){
        var $list = $("#business-list");
        var tpl = [
        	'{@each data.content as it,k}',
        		'<tr class="gradeX">',
                    '<td hidden="hidden">${it.id}</td>',
                    '<td>${it.name}</td>',
                    '<td>${it.address}</td>',
                    '<td>${it.mobile}</td>',
                    '<td>${it.telephone}</td>',
                    '<td><img alt="image" class="img-circle" src="${it.imagePath}" style="height: 64px;"></td>',
                    '<td class="center">${it.discount}</td>',
                    '<td class="center">${it.saleCode}</td>',
                    '<td class="center">${it.remark}</td>',
                    '<td class="center">',
                        '<a href="javascript:;" id="${it.id}" name ="${it.name}" class="btn btn-success btn-circle btn-admin-edit" title="编辑"><i class="fa fa-edit"></i></a>',
                        '<a href="javascript:;" id="${it.id}" class="btn btn-warning btn-circle btn-admin-del" title="删除"><i class="fa fa-trash"></i></a>',
                        // '<a href="javascript:;" id="${it.id}" name ="${it.name}" class="btn btn-info btn-circle btn-account" title="开设账户"><i class="fa fa-user"></i></a>',
                    '</td>',
                '</tr>',
        	'{@/each}',
        ].join('\n');
        $list.html(juicer(tpl,json));
        $("#page-info").html(data_page(json.data.totalElements,json.data.totalPages,json.data.pageable.pageNumber,"loadAdminList","max-size"));
        $("#max-size option[value="+json.data.pageable.pageSize+"]")[0].selected=true;
        $("#max-size").change(function(){
             loadAdminList(0);
         });
        
    },
    validateError:function(rtn){
    	$('#admin-save-error').html(rtn);
    }
}