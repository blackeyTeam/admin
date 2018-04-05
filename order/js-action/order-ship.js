function showOrder(id){
	$.getJSON("/server/shoporders/admin/orders/detail/"+id+".json",function(json){
		$('#order-id').text(id);
		$('#send-orderID').val(id);
		$('#send-toLinkman').val(json.shipDest.consignee);
		$('#send-toTel').val(json.shipDest.tel);
		$('#shipDest-address').val(json.shipDest.address);
		var tpl = [
			'{@each goods as it ,k}',
				'<tr class="gradeX">',
                    '<td>${it.goodsName} </td>',
                    '<td>${it.amount}</td>',
                    '<td class="center">',
                        '<div class="i-checks">',
                            '<label>',
                                '<input type="checkbox" class="chk" item="${it.i}" num="${it.amount}"> <i></i> </label>',
                        '</div>',
                    '</td>',
                '</tr>',
			'{@/each}',
		].join('\n');
		$('#ship-item-list').html(juicer(tpl,json));
		$('.i-checks').iCheck({
	        checkboxClass: 'icheckbox_square-green',
	        radioClass: 'iradio_square-green',
	    });
	});
}

function deliveryCompany(){
	$.getJSON("/server/logistics/admin/company/list.json",function(json){
		$('#delivery-company').empty();
		$.each(json,function(i,item){
			$('#delivery-company').append('<option value="'+item.id+'">'+item.name+'</option>');
		});
	});
}

function orderDelivery(orderId,data){
	var url = "/server/shoporders/admin/deliver/sendout/"+orderId+".json";
	jQuery.ajaxSettings.traditional = true;
	$.post(url,data,function(json){
		
	});
}

function showWayBillList(oederId){
	var url = "/server/shoporders/admin/deliver/waybill/list/"+oederId+".json";
	$.getJSON(url,function(json){
		var list = {content:json};
		var tpl = [
			'{@each content as it ,k}',
				'<tr>',
                    '<td>${it.number}</td>',
                    '<td >',
                        '${it.company}',
                    '</td>',
                    '<td style="text-align: center;">',
                       '<a href="javascript:;" class="waybill-item " title="明细" id="${it.id}"><i class="fa fa-bars"></i></a>',
                    '</td>',
                '</tr>',
			'{@/each}',
		].join('\n');
		$('#waybill-list').html(juicer(tpl,list));
	});
}

function waybillItem(){
	var waybill_id = $(this).attr('id');
	if($('.detail-'+waybill_id).length>0){
		$('.detail-'+waybill_id).remove();
		return false;
	}
	var tr = $(this).parent().parent();
	$.getJSON("/server/shoporders/admin/deliver/waybill/items/"+waybill_id+".json",function(json){
		var list = {content:json};
		list.waybill = waybill_id;
		var tpl = [
				'<tr class="detail-${waybill}">',
	                '<td colspan="3">',
	                '{@each content as it,k}',
	                	'${it.goodsName}(${it.num}/${it.amount})<br/>',
	                '{@/each}',
	                '</td>',
	            '</tr>',
		].join('\n');
		tr.after(juicer(tpl,list));
	});
}
$(function(){
	$('body').on('click','.waybill-item',waybillItem);
});