var infoView = {
	fillPagelist:function(json){
		var tpl = [
			'{@each content as it ,k}',
				'<tr class="gradeX">',
                    '<td>',
                        '<div class="i-checks">',
                            '<label>',
                                '<input type="checkbox" class="chk" value="option1" name="a" id="${it.id}"> <i></i> </label>',
                        '</div>',
                    '</td>',
                    '<td>${it.name}</td>',
                    '<td>${it.brandName}</td>',
                    '<td>${it.syskc[0].categoryName}</td>',
                    '<td>',
                        '<img alt="no Pic" width="80" height="50" src="${it.coverPic}">',
                    '</td>',
                    '<td class="center">',
                        '${it.timeCreated}',
                    '</td>',
                    '<td class="center">${it.auditStatus.name}</td>',
                    '<td class="center">',
                        '<a href="goods-info-edit.html?id=${it.id}" class="btn btn-success btn-circle" title="编辑"><i class="fa fa-edit"></i></a>',
                        '<a href="javascript:;" class="btn btn-circle btn-primary btn-goods-auth" title="审核" id="${it.id}"><i class="fa fa-check"></i></a>',
                        '<a href="javascript:;" class="btn-goods-ad btn btn-danger btn-circle" title="推荐" id="${it.id}"><i class="fa fa-level-up"></i></a>',
                        '<a href="javascript:;" class="btn-goods-del btn btn-warning btn-circle" title="删除" id="${it.id}"><i class="fa fa-trash"></i></a>',
                    '</td>',
                '</tr>',
			'{@/each}',
		].join('\n');
		$('#goods-list').html(juicer(tpl,json));
		$("#page-info").html(data_page(json.totalElements,json.totalPages,json.number,"loadGoodsList","goods-size"));
        $("#goods-size option[value="+json.size+"]")[0].selected=true;
        $("#goods-size").change(function(){
             loadGoodsList(0);
         });
        $('.i-checks').iCheck({
	        checkboxClass: 'icheckbox_square-green',
	        radioClass: 'iradio_square-green',
	    });
	},
    fillAuditDetail:function(json){
         $('#goods-name').text(json.name);
         $('#goods-id').val(json.id);
         if(json.syskc!=null){
             $('#goods-syscategory').text(json.syskc[0].categoryName);
          }
          $('#goods-shopWeight').text(json.shopWeight);
          $('#goods-brandName').text(json.name);
          $('#goods-remark').text(json.remark==null?"":json.remark);
          $("#param-list").empty();
          if(json.params!=null){
            $('#param-list').empty();
            $.each(json.params,function(i,item){
              $('#param-list').append(item.paramName + ": "  + item.paramValue + "<br>");
            });
          }
          if(json.detailPics!=null){
             $('#goods-pic-list').empty();
              $.each(json.detailPics,function(i,item){
                  if(item.cover==false){
                      var cover = '否';
                    } else {
                      var cover = '是';
                    }
                $('#goods-pic-list').append( "<tr>"+
                "<td><img src='"+item.url+"' width='120' height='80' class='img-rounded'></td>"+
                "<td>"+item.position.name+"</td>"+
                "<td>"+cover+"</td>"+
                "</tr>");
              });
            }
          if(json.pics!=null){
            $('#goods-pic-list').empty();
              $.each(json.pics,function(i,item){
                  if(item.cover==false){
                      var cover = '否';
                    } else {
                      var cover = '是';
                    }
                $('#goods-pic-list').append( "<tr>"+
                "<td><img src='"+item.url+"' width='120' height='80' class='img-rounded'></td>"+
                "<td>"+item.position.name+"</td>"+
                "<td>"+cover+"</td>"+
                "</tr>");
              });
            }
          $('#modal-goods-auth').modal('show');
          
    }
};