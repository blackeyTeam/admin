var infoView = {
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
            $.each(json.params,function(i,item){
              $('#param-list').append(item.paramName + ": "  + item.paramValue + "<br>");
            });
          }
          if(json.detailPics!=null){
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
    }
};