var view = new Vue({
    el: '#page',
    components: {
        pagination
    },
    data: {
        
        pageSize: 20, //每页显示20条数据 默认
        currentPage: 1, //当前页码 默认1
        count: 0, //总记录数
        items: [],

        objArrayData:[]
    },
    methods: {
        //获取数据
        getList: function () {
            var self = this;
            ajax.page({
                pageNumber: this.currentPage,
                pageSize: this.pageSize
            }, function (json) {
                //分页数据
                self.count = json.totalElements;

                //渲染列表
                self.objArrayData = json.content;
            });
        },

        //从page组件传递过来的当前page
        pageChange(page) {
            this.currentPage = page
            this.getList()
        }
    },

    mounted() {
        //请求第一页数据
        this.getList()
    }
})