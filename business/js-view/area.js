var areaView = {
	listLocationNode:function(json){
		var list = {};
		list.content = json;
		var tpl = [
			'{@each content as it,k}',
			'<tr class="gradeX">',
                '<td>',
                    '<div class="i-checks">',
                        '<label>',
                            '<input type="checkbox" class="chk" value="${it.id}" name="a"> <i></i> </label>',
                    '</div>',
                '</td>',
                '<td>${parseInt(k)+1}</td>',
                '<td class="center">${it.name}(${it.nameEn})</td>',
                '<td class="center">(${it.lng} , ${it.lat})</td>',
                '<td>',
                    '<a data-toggle="modal" href="#" class="btn btn-sm btn-success btn-circle btn-area-edit" title="编辑" id="${it.id}"><i class="fa fa-edit"></i></a>',
                '</td>',
            '</tr>',
            '{@/each}',
		].join('\n');
		$('#location-list').html(juicer(tpl,list));
		$('.i-checks').iCheck({
	        checkboxClass: 'icheckbox_square-green',
	        radioClass: 'iradio_square-green',
	    });
	}
};