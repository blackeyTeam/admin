var activity = new Vue({

    el:"#activity-form",

    data:{
        id:null,
        name:null,
        salePrice:null,
        discountPrice:null,
        rushPrice:null,
        stock:null,
        saleOut:null,
        attention:null,
        business_id:1,
    },

    mounted:function(){
        if (getUrlParam("id") != null)
            this.showEdit(getUrlParam("id"));
    },

    methods:{

        save:function(){
            var toggle = event.currentTarget;
            $(toggle).prop("disabled", true);
            var self = this;
            var formData = new FormData();
            if($('.ggimgfile').length!=0)
            formData.append('file', $('.ggimgfile').get(0).files[0]); 
            formData.append('id',self.id);            
            formData.append('name',self.name);
            formData.append('salePrice',self.salePrice);
            formData.append('discountPrice',self.discountPrice);
            formData.append('rushPrice',self.rushPrice);
            formData.append('stock',self.stock);
            formData.append('saleOut',self.saleOut);
            formData.append('attention',self.attention);   
            formData.append('business_id',self.business_id);
            var details = encodeURIComponent($('#editor').summernote('code'));
            formData.append('detail',details)
            ajax.save(formData,function(json){
            //当前点击的dom元素去除属性 disabled
            $(toggle).prop("disabled", false);
                if(json.code==200){
                    alert(json.message);
                }else alert(json.message);
            })   
        },
        
        showEdit:function(id){
            var self = this
            ajax.detail(id,function(json){
                self.id = json.data.id;
                self.name = json.data.name;
                self.salePrice = json.data.salePrice;
                self.discountPrice = json.data.discountPrice;
                self.rushPrice = json.data.rushPrice;
                self.stock = json.data.stock;
                self.saleOut = json.data.saleOut;
                self.attention = json.data.attention;
                self.business_id = json.data.business.id;
                self.business_name=json.data.business.name;
                $("#vendor").tokenInput('clear');
                $("#vendor").tokenInput('add', {id: json.data.business.id, name: json.data.business.name});
                $('#editor').summernote('code', decodeURIComponent(json.data.detail)); 
            });
        }

    }

})
