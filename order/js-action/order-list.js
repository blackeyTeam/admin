var status = "waitpay";
$(function(){
	ordersStatus();
	loadOrderList(0);
	$('body').on('click','.btn-order-detail',showDetailModal);
	$('body').on('click','.amount-status',function(){
		status = $(this).attr('status');
		loadOrderList(0);
	});
	$('body').on('click','.btn-order-ship',showOrderShipModal);
	$('body').on('click','#btn-order-sendout',orderSendOut);
});

function loadOrderList(page){
	var size = $("#order-size").val() ? $("#order-size").val() : 10;
	var data = {pageSize:size,pageNumber:page,status:status};
	orderData.pagelist(data,function(json){
		orderView.fillOrderList(json);
	});
}

function showDetailModal(){
	var orderId = $(this).attr('orderID');
	orderData.itemList(orderId,function(json){
		orderView.fillItemList(json);
	});
	$('#modal-order-info').modal('show');
}

function ordersStatus(){
	orderData.statisAmount(function(json){
		orderView.fillAmount(json);
	});
}

function showOrderShipModal(){
	showOrder($(this).attr('orderID'));
	deliveryCompany();
	showWayBillList($(this).attr('orderID'));
	$('#modal-order-ed').modal('show');
}

function orderSendOut(){
	var orderId = $('#order-id').text();
 	var obj = document.getElementById("delivery-company");
    var index=obj.selectedIndex;   
	var coname=obj.options[index].innerText; 
	$('#coname').val(coname); 
	var item = [];
	var num = [];
	var chk  = $('#ship-item-list').find('input.chk:checked');
	if(chk.length==0){
		alert("请选择发货项");
		return false;
	}
	chk.each(function (i, o) {
		item.push($(o).attr('item'));
		num.push($(o).attr('num'));
    });
    $('#send-item').val(item);
    $('#send-num').val(num);
	var data = $('#order-sendout-form').serialize() ;
	orderDelivery(orderId,data);
}