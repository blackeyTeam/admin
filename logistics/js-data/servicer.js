var expressageCompanyData={
		pageList:function(data,callback){
			$.getJSON("/server/logistics/admin/company/page.json",data,function(json){
				callback(json);
			});
		},
		save:function(data,callback){
			$.getJSON("/server/logistics/admin/company/save.json",data,function(json){
				callback(json);
			});
		}
};