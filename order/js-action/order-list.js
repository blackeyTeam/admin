var view = new Vue({

    el: '#page',
    data: {
        //分页参数
        pageNumber: 0, //当前显示页码 默认第一页
        pageSize: 8, //当前列表最大行数 默认8
        totalPages: 1, //总页数 默认1
        totalElements: 0, //对象数据总数
        showItemMax: 5, //页码显示数 默认5
        currentShowItemMin: 1, //当前页码最小值 默认1
        pageSizeOptions: [{
            text: "8",
            value: 8
        }, {
            text: "16",
            value: 16
        }, {
            text: "24",
            value: 24
        }, ],
        showItemArray: [], //页码显示数组  

        objArrayData: [], //对象数组
    },

    mounted: function() {
        this.page();
    },

    watch: {
        //更改列表最大行数
        pageSize: function() {
            this.pageNumber = 0;
            this.page();
        },
        //页码变更
        pageNumber: function() {
            this.page();
        },
    },

    methods: {
        //显示
        page: function() {
            var self = this;
            ajax.page({
                pageNumber: this.pageNumber,
                pageSize: this.pageSize
            }, function(json) {
                //分页数据
                self.showItemArray = [];
                for (var i = self.currentShowItemMin; i <= json.totalPages && i < self.currentShowItemMin + self.showItemMax; i++) {
                    self.showItemArray.push({
                        text: i,
                        value: i
                    });
                }
                self.totalElements = json.totalElements;
                self.totalPages = json.totalPages;

                //渲染列表
                self.objArrayData = json.content;
            });
        },
        //添加Modal
        showAddModal: function() {
 

            $("#modal-environment").modal("show");
        },

        deleteModel: function(event, id) {
            var self = this;
            var callback = function() {
                ajax.delete({id:id},function(json){
                  if(json.code=="success"){
                    layerMsg("删除成功!");
                    if(self.totalElements%self.pageNumber==1){
                      if(self.pageNumber>1){
                        self.pageNumber--;
                        if(self.currentShowItemMin>1) self.currentShowItemMin--;
                      } 
                      else self.page();
                    }else{
                      self.page();
                    }
                  }else alert(json.message);
                });                
            };
            common.showMsgPane('确认删除吗？', 'confirm', callback);
        },
        //选择页码
        selectShowItem: function(showItem) {
            if(showItem-2 > 0 && this.totalPages>=showItem+2)
                this.currentShowItemMin=showItem-2;
            else if(showItem-3 > 0&&this.totalPages>=showItem+1)
                this.currentShowItemMin=showItem-3;
            this.pageNumber = showItem - 1;
        },
        //上一页
        prePage: function() {
            if (this.totalPages > 5 && this.currentShowItemMin > 1) {
                this.currentShowItemMin -= 1;
                this.pageNumber -= 1;
            }else if(this.pageNumber>0){
                this.pageNumber -= 1;
            }
        },
        //下一页
        nextPage: function() {
            if (this.totalPages > 5 && this.currentShowItemMin <= this.totalPages - 5) {
                this.currentShowItemMin += 1;
                this.pageNumber += 1;
            }else if(this.pageNumber<this.totalPages-1){
                this.pageNumber += 1;
            }
        },

    }
});