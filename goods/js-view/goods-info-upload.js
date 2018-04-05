var goodsPicView = {
	list:function(json){
		var tpl = [
			'{@each content as it ,k}',
				'<tr>',
			        '<td hidden="">${it.id}</td>',
			        '<td><img src="${it.url}" width="120" height="80" class="img-rounded"></td>',
			        '<td>${it.position.name}</td>',
			        '<td>',
			        '{@if it.cover==true}是{@/if}',
     		        '{@if it.cover==false}否{@/if}',
			        '</td>',
			        '<td>',
//			            '<a href="javascript:;" class="btn btn-circle btn-primary" title="审核"><i class="fa fa-check"></i></a>',
//			            '<a href="javascript:;" class="btn btn-danger btn-circle btn-pic-unuse" title="下架"><i class="fa fa-warning"></i></a>',
			            '<a href="javascript:;" class="btn-pic-del btn btn-warning btn-circle" id="${it.id}" title="删除"><i class="fa fa-trash"></i></a>',
			        '</td>',
			    '</tr>',
			'{@/each}',
		].join('\n');
		$('#goods-pic').html(juicer(tpl,json));
	}
};