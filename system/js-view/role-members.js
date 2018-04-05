var memberView = {
	fillRoleList:function(json){
		$select = $('#other-role-select')[0];
		$.each(json,function(i,item){
			var option = document.createElement('option');
            $select.appendChild(option);
            option.text = item.roleName;
            option.value = item.id;
		});
	},
	fillRoleMemberList:function(json){
		$list = $('#role-member-list');
		var tpl = [
			'{@each content as it ,k}',
				'<tr class="gradeX">',
                    '<td>',
                        '<div class="i-checks">',
                            '<label>',
                                '<input type="checkbox" class="chk" id="${it.id}" value="${it.name}"> <i></i> </label>',
                        '</div>',
                    '</td>',
                    '<td>${parseInt(k)+1}</td>',
                    '<td>${it.name}</td>',
                    '<td class="center">${it.email}</td>',
                    '<td class="center">${it.mobile}</td>',
                '</tr>',
			'{@/each}',
		].join('\n');
		$list.html(juicer(tpl,json));
		$('.i-checks').iCheck({
	        checkboxClass: 'icheckbox_square-green'
	    });
	},
	fillAdminList:function(json){
		$list = $('#admin-list');
		var tpl = [
			'{@each data as it ,k}',
				'<tr class="gradeX">',
                    '<td>',
                        '<div class="i-checks">',
                            '<label>',
                                '<input type="checkbox" class="chk" id="${it.id}"> <i></i> </label>',
                        '</div>',
                    '</td>',
                    '<td>${parseInt(k)+1}</td>',
                    '<td>${it.name}</td>',
                    '<td class="center">${it.email}</td>',
                    '<td class="center">${it.mobile}</td>',
                '</tr>',
			'{@/each}',
		].join('\n');
		$list.html(juicer(tpl,json));
		$("#page-info").html(data_page(json.totalElements,json.totalPages,json.page.pageNumber,"AdminList","admin-size"));
        $("#admin-size option[value="+json.page.pageSize+"]")[0].selected=true;
        $("#admin-size").change(function(){
             AdminList(0);
         });
        $('.i-checks').iCheck({
            checkboxClass: 'icheckbox_square-green'
        });
	}
};