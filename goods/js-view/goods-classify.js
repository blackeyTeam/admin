var categoryView = {
	fillCategoryList:function(json){
		var list = {};
		list.content = json;
		var tpl = [
			'{@each content as it ,k}',
				'<tr class="gradeX">',
                    '<td>',
                        '<div class="i-checks">',
                            '<label>',
                                '<input type="checkbox" class="chk" value="option1" name="a" id="${it.id}"> <i></i> </label>',
                        '</div>',
                    '</td>',
                    '<td>${parseInt(k)+1}</td>',
                    '<td class="center">${it.name}</td>',
                    '<td class="center">${it.auditStatus.name}</td>',
                    '<td>',
                        '<a  href="javascript:;" class="btn btn-sm btn-success btn-circle btn-goods-classify-edit" title="编辑" id="${it.id}"><i class="fa fa-edit"></i></a>',
                        '<a href="javascript:;" class="btn-goods-classify-del btn btn-sm btn-warning btn-circle" title="删除" id="${it.id}"><i class="fa fa-trash"></i></a>',
                    '</td>',
                '</tr>',
			'{@/each}',
		].join('\n');
		$('#syskc-tree-list').html(juicer(tpl,list));
		$('.i-checks').iCheck({
	        checkboxClass: 'icheckbox_square-green',
	        radioClass: 'iradio_square-green',
	    });

	},
	fillDetail:function(json){
		$('#edit-name').val(json.name);
		$('.orderNum').val(json.orderNum);
		$('#edit-auditStatus option[value='+json.auditStatus.value+']')[0].selected=true;
		if(curNode==null){
	        $('.parent-name').html(treeNodes.getNodeByParam("id", "root", null).name);
	    }
	    $('#symbol').val(json.symbol);
	    $('#modal-goods-classify-edit').modal('show');
	},

	reloadTreeAndList:function(pid,treeId,selectTree){
		var treeObj = $.fn.zTree.getZTreeObj(treeId);
		var pnode = treeObj.getNodeByParam("id", pid, null);
		if(!pnode.isParent){
			pnode.isParent = true;
		}
		treeObj.reAsyncChildNodes(pnode, "refresh");
		treeObj.selectNode(pnode);
		if($('#'+selectTree).length>0){
			$.fn.zTree.getZTreeObj(selectTree).reAsyncChildNodes(null, "refresh");
		}
		
	}

};
