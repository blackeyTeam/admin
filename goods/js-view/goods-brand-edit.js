var editView = {
	fillDetail:function(json){
		$('#sequenced').val(json.sequenced);
		$('#name').val(json.name);
		$('#remark').val(json.remark);
		var categoryId="";
		var categoryName="";
		$.each(json.bclist,function(i,item){
			if(i!=json.bclist.length-1){
				categoryId += item.categoryId+",";
				categoryName += item.categoryName+",";
			}else{
				categoryId += item.categoryId;
				categoryName += item.categoryName;
			}
		});
		$('#input-target-type').val(categoryName);
		$('#sys_category_ids').val(categoryId);
		$('#enName').val(json.enName);
		$('#sortnum').val(json.sortnum);
	}
};