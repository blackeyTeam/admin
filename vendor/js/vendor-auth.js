$(document).ready(function() {
    $('#header-l .vendor-auth').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

    $('body').on('click', '.btn-circle', function() {
        var obj = $(this);
		var data={
				id:obj.attr('id'),
				status:obj.attr('name')
		}
		$.getJSON("/server/commerce/admin/user/vendor/cert/audit.json",data,function(json){
			showMsgPane('操作成功!');
			loadVendorCerList(0);
		});
        
    });
});
