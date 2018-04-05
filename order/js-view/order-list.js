var orderView = {
	fillOrderList:function(json){
		var tpl = [
			'{@each data as it ,k}',
				'<tr class="gradeX">',
                    '<td>${it.createTime|date_build}<br>${it.createTime|time_build}</td>',
                    '<td>${it.vendorName}',
                        '<br>订单号：${it.orderID}</td>',
                    '<td>￥${(it.totalFee/100).toFixed(2)}</td>',
                    '<td class="center">',
                        '${it.shipDest.consignee}',
                        '<br>(${it.shipDest.tel})',
                    '</td>',
                    '<td class="center">${it.status.name}</td>',
                    '<td class="center">',
                        '<a href="javascript:;" class="btn btn-info btn-circle btn-order-detail" title="明细" orderID="${it.orderID}"><i class="fa fa-bars"></i></a>',
                    '</td>',
                    '<td class="center">',
                        '<a href="order-detail.html?id=${it.orderID}" class="btn btn-success btn-circle" title="详情"><i class="fa fa-eye"></i></a>',
                        // '{@if it.status.value=="waitship"||it.status.value=="waittake"}',
                            '<a href="javascript:;" class="btn btn-primary btn-circle btn-order-ship" title="发货" orderID="${it.orderID}"><i class="fa fa-cubes"></i></a>',
                        // '{@/if}',
                    '</td>',
                '</tr>',
			'{@/each}',
		].join('\n');
        var date = function(e) {
            var date = new Date(e);
            return date.getFullYear() + '-' + addZero(date.getMonth() * 1 + 1 * 1) + '-' + addZero(date.getDate());
        }
        juicer.register('date_build', date);
        var time = function(e) {
            var date = new Date(e);
            return addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
        }
        juicer.register('time_build', time);
		$('#order-list').html(juicer(tpl,json));
		$("#page-info").html(data_page(json.totalElements,json.totalPages,json.page.pageNumber,"loadOrderList","order-size"));
        $("#order-size option[value="+json.page.pageSize+"]")[0].selected=true;
        $("#order-size").change(function(){
             loadOrderList(0);
         });
        
	},
    fillItemList:function(json){
        var list ={
            'content': json
        };
        var tpl = [
            '{@each content as it ,k}',
                '<tr class="gradeX">',
                    '<td>${it.goodsName} </td>',
                    '<td>${(it.price/100).toFixed(2)}</td>',
                    '<td class="center">${it.amount}</td>',
                    '<td class="center">${(it.subtotal/100).toFixed(2)}</td>',
                '</tr>',
            '{@/each}',
        ].join('\n');
        $('#item-list').html(juicer(tpl,list));
    },
    fillAmount:function(json){
        $.each(json,function(i,item){
            $('#amount-' + item.status.value).text(item.amount);
        });
    }
};

