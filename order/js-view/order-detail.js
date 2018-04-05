var detailView = {
	fillDetail:function(json){
		$('#shipDest-info').text(json.shipDest.consignee+"," + json.shipDest.tel+"," + json.shipDest.address);
		$('#order-status').text(json.status.name);
		$('#order-timeCreated').text(formatDate(json.createTime));
		var tpl = [
			'{@each goods as it ,k}',
				'<tr class="gradeX">',
                    '<td><img alt="image" src="${it.goodsPic}" style="height: 64px;"></td>',
                    '<td>${it.goodsName}</td>',
                    '<td>￥${(it.price/100).toFixed(2)}</td>',
                    '<td class="center">${it.amount} </td>',
                    '<td class="center"></td>',
                    '<td class="center">${status.name} </td>',
                '</tr>',
			'{@/each}',
		].join('\n');
		$('#item-list').html(juicer(tpl,json));
	}
};