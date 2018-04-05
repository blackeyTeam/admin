var adminView = {
	fillAdminList:function(json){
        var $list = $("#admin-list");
        var tpl = [
        	'{@each data as it,k}',
        		'<tr class="gradeX">',
                    '<td>${it.name}</td>',
                    '<td><img alt="image" class="img-circle" src="${it.portrait}" style="height: 64px;"></td>',
                    '<td class="center">',
                        '{@if it.hasAccount}',
                            '${it.account.mobile?it.account.mobile:it.account.email}',
                        '{@/if}',
                    '</td>',
                     '<td class="center">',
                        '<a href="javascript:;" id="${it.id}" name ="${it.name}" class="btn btn-success btn-circle btn-admin-edit" title="编辑"><i class="fa fa-edit"></i></a>',
                        // '<a href="javascript:;" id="${it.id}" class="btn btn-warning btn-circle btn-admin-del" title="删除"><i class="fa fa-trash"></i></a>',
                        '<a href="javascript:;" id="${it.id}" name ="${it.name}" class="btn btn-info btn-circle btn-account" title="开设账户"><i class="fa fa-user"></i></a>',
                    '</td>',
                '</tr>',
        	'{@/each}',
        ].join('\n');
        $list.html(juicer(tpl,json));
        $("#page-info").html(data_page(json.totalElements,json.totalPages,json.page.pageNumber,"loadAdminList","max-size"));
        $("#max-size option[value="+json.page.pageSize+"]")[0].selected=true;
        $("#max-size").change(function(){
             loadAdminList(0);
         });
        
    },
    validateError:function(rtn){
    	$('#admin-save-error').html(rtn);
    }
}