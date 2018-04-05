$(function($){
	loadVendorCerList(0);
	$('body').on('click', '#vendorCert-search', function(){
		loadVendorCerList(0)
	});
});



function loadVendorCerList(page){
	var data = $.param({'start':page,'size':10}) + '&' + $('#vendor-search-form').serialize()
	vendorData.pagelist(data,function(json){
		vendorView.fillVendorCerList(json);
	});
}