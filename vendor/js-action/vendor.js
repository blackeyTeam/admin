$(function($){
	loadVendorList(0);
	$('body').on('click', '#vendorInfo-search', function(){
		loadVendorList(0)
	});
	$('body').on('click','.modal-vendor-del',function(){
		var obj = $(this);
	    var callback = function() {
	    	vendorData.delVendorInfo(obj.attr('id'),function(){
	    		loadVendorList(0);
	    	});
	    };
	    showMsgPane('您确定要删除该商户吗？', 'confirm', callback);		
	});
	$('body').on('click','.btn-account',showAccountModal);
	$('body').on('click','#btn-add-open',openAccount);
});



function loadVendorList(page){
	var data = $.param({'start':page,'size':10}) + '&' + $('#vendor-search-form').serialize()
	vendorData.pagelist(data,function(json){
		vendorView.fillVendorList(json);
	});
}

function showAccountModal(){
	var id = $(this).attr("id");
	$("#vendor-id").val(id);
	vendorData.detail(id,function(json){
		$('#vendor-name').text(json.registName);
		$('#vendor-account').val(json.mobile ? json.mobile : email);
		if(json.hasAccount){
			$('#btn-add-open').addClass('hide');
			$('#vendor-account').val(json.account.mobile?json.account.mobile:json.account.email);
			if(json.account.mobileConfirm){
				$('#channel-mobile').iCheck('check');
			}
			if(json.account.emailComfirm){
				$('#channel-email').iCheck('check');
			}
			$('#vendor-email').attr('readonly',true);
			$('#vendor-mobile').attr('readonly',true);
		}else{
			$('#vendor-email').removeAttr('readonly');
			$('#vendor-mobile').removeAttr('readonly');
			$('#btn-add-open').removeClass('hide');
		}
	});
	$('#modal-vendor-account').modal('show');

}

function openAccount(){
	var account=$("#vendor-account").val();
	var id=$("#vendor-id").val();
	var channel=$("#channel-type input[name=channel]:checked").val();
	
	vendorData.validateType(account,function(rtn){
		if (rtn == "error") {
			alert("请输入正确的手机号码或邮箱");
			return false;
		}else{
			var data = {
				account:account,
				channel:rtn
			}
			vendorData.open(id,data,function(json){
				alert(json.message);
				if(json.code=="success"){
					$('#modal-vendor-account').modal('hide');	
				}
			});
		}
	});
	
}