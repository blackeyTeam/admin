var roleEditView = {
	fillModuleList:function(json){
		$list = $('#role-access-list-edit');
		var tpl = [
			'{@each content as it,k}',
				'<tr>',
                    '<td rowspan="${it.resources.length}">',
                        '<div class="i-checks">',
                            '<label>',
                                '<input type="checkbox" class="first-lvl" id="${it.id}"> <i></i>&nbsp;&nbsp;${it.moduleName} </label>',
                        '</div>',
                    '</td>',
                    '<td>',
                        '<div class="i-checks">',
                            '<label>',
                                '<input type="checkbox" class="second-lvl" id="${it.resources[0].id}" sid="${it.id}"> <i></i>&nbsp;&nbsp;${it.resources[0].moduleName} </label>',
                        '</div>',
                    '</td>',
                    '<td>',
                    	'{@if it.resources[0].resources.length>0}',
                    		'{@each it.resources[0].resources as it1,q}',
	                    		'<div class="i-checks">',
	                                '<label>',
	                                    '<input type="checkbox" class="third-lvl" id="${it1.id}" mid="${it.resources[0].id}" sid="${it.id}"> <i></i>&nbsp;&nbsp;${it1.moduleName} </label>',
	                            '</div>',
	                         '{@/each}',
                    	'{@/if}',
                    '</td>',
                '</tr>',
                '{@if it.resources.length>=2}',
                '{@each it.resources as it2, j}',
                	'{@if j != 0}',
                	'<tr>',
                        '<td>',
                            '<div class="i-checks">',
                                '<label>',
                                    '<input type="checkbox" class="second-lvl" id="${it2.id}" sid="${it.id}"> <i></i>&nbsp;&nbsp;${it2.moduleName} </label>',
                            '</div>',
                        '</td>',
                        '<td>',
                        	'{@if it2.resources.length>0}',
                        		'{@each it2.resources as it3,p}',
                        			'<div class="i-checks">',
                                        '<label>',
                                            '<input type="checkbox" class="third-lvl" id="${it3.id}" mid="${it2.id}" sid="${it.id}"> <i></i>&nbsp;&nbsp;${it3.moduleName} </label>',
                                    '</div>',
                        		'{@/each}',
                        	'{@/if}',
                        '</td>',
                    '</tr>',
                    '{@/if}',
                    '{@/each}',
                '{@/if}',
			'{@/each}',
		].join('\n');
		$list.html(juicer(tpl,json));
		$('.i-checks').iCheck({
	        checkboxClass: 'icheckbox_square-green'
	    });
	},
	fillAccessList:function(json){
		$.each(json,function(i,item){
			$('#' + item.id).iCheck("check");
		});
	},
	fillRoleList:function(json){
		$select = $('#other-role-select')[0];
		$.each(json,function(i,item){
			var option = document.createElement('option');
            $select.appendChild(option);
            option.text = item.roleName;
            option.value = item.id;
		});
	}
}