var editView = {
	fillDetail:function(json){
		$('#goods-name').val(json.name);
		$('#goods-shopWeight').val(json.shopWeight);
		$('#demo-input-facebook-theme').tokenInput("add", {id: json.brandId, name: json.brandName});
        $('#goods-remark').val(json.remark);
        $('#input-catalog').val(json.syskc[0].categoryName);
        $('#goods-syscategoryId').val(json.syskc[0].categoryId);
        $('#auditStatus').val(json.auditStatus.value);
        $('#shopId').val(json.shopId);
        $('#shop-name').text(json.shopName);
        $('#input-catalog-2').val(json.shopkc[0].categoryName);
        $('#shop-category-id').val(json.shopkc[0].categoryId);
        initSPKCSelectTree("root",$('#shop-category-tree'),json.shopId);
        var node = {};
        node.name = json.syskc[0].categoryName;
        node.id = json.syskc[0].categoryId
        showCategoryparam(node,json.params);
	},
	fillParamTable:function(json,param){
		var list = {};
		list.content = json;
		var tpl=[
                '{@each content as it,k}',
                    '<tr>',
                        '<td width="40%">${it.name}</td>',
                        '<td><label class="select">',
                            '<select class="paramValue-select form-control" name="paramValue-${k}" id="paramValue-${it.id}">',
                                '{@each it.values as it1,j}',
                                    '<option value="${it1.id}">${it1.value}</option>',
                                '{@/each}',
                            '</select>',
                            '</label>',
                         '</td>',
                    '</tr>',
                '{@/each}',
            ].join('\n');
           $('#param-table').html(juicer(tpl,list));
           if(param!=null){
                $.each(param,function(i,item){
                   $("#paramValue-"+item.paramId+" option[value="+item.valueId+"]")[0].selected=true;
                });
           }
	},
    fillShopTable:function(json){
        var tpl = [
            '{@each content as it ,k}',
                '<tr class="gradeX">',
                    '<td>',
                        '<div class="i-checks">',
                            '<label>',
                                '<input type="radio" name="shop" id="${it.id}"> <i></i></label>',
                        '</div>',
                    '</td>',
                    '<td>${it.name}</td>',
                    '<td>${it.linktel}</td>',
                    '<td>${it.linktel}</td>',
                '</tr>',
            '{@/each}',
        ].join('\n');
        $('#shop-list').html(juicer(tpl,json));
         $('.i-checks').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
        });
        $("#shop-page").html(data_page(json.totalElements,json.totalPages,json.number,"loadShopList","shop-size"));
        $("#shop-size option[value="+json.size+"]")[0].selected=true;
        $("#shop-size").change(function(){
             loadShopList(0);
         });
    }
};