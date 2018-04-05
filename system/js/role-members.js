$(document).ready(function() {
    $('#header-l .system-role').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });
   
     $('#btn-clear-chosen').click(function() {
        $("#input-search-admin").tokenInput('clear');
     });
     $("#input-search-admin").tokenInput("/server/auth/admin/admin/list.json", {
        theme: "facebook",
        hintText: "请输入姓名查询",
        noResultsText: "没有结果",
        searchingText: "搜索中..."
    });
    $('body').on('click','#btn-member-del',deleteRoleMember);
    $('body').on('click','#btn-member-trans',transRoleMember)
    $('body').on('click','#btn-admin-search',showAdminSearchModal);
    $('body').on('click','#btn-admin-search',function(){
        AdminList(0);
    });
    $('body').on('click','#btn-choose-admin',chooseAdmin);
    $('body').on('click','#btn-add-member',addRoleMember);
});
