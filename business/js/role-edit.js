$(document).ready(function() {
    $('#header-l .system-role').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

    // 全选、反选
    $('body').on('click', '.btn-roleaccess-allcheck', roleAccessAllCheck);
    $('body').on('click', '.btn-roleaccess-allremove', roleAccessAllremove);

    $('body').on('ifChecked', '.first-lvl', function(event) {
        // $('input[sid="'+$(this).attr("id")+'"]').iCheck("check");
       if($('input[sid="'+$(this).attr("id")+'"]:checked').length==0){
          $('input[sid="'+$(this).attr("id")+'"]').iCheck("check");
       }
    });
    $('body').on('ifUnchecked', '.first-lvl', function(event) {
        $('input[sid="'+$(this).attr("id")+'"]').iCheck("uncheck");
    });

    $('body').on('ifChecked', '.second-lvl', function(event) {
        $('#' + $(this).attr('sid')).iCheck("check");
        if($('input[mid="'+$(this).attr("id")+'"]:checked').length==0){
          $('input[mid="'+$(this).attr("id")+'"]').iCheck("check");
        }
    });
    $('body').on('ifUnchecked', '.second-lvl', function(event) {
         $('input[mid="'+$(this).attr("id")+'"]').iCheck("uncheck");
        if($('input[sid="'+$(this).attr("sid")+'"]:checked').length<1){
            $("#"+$(this).attr("sid")).iCheck("uncheck");
        }
    });

    $('body').on('ifChecked', '.third-lvl', function(event) {
        if(!$("#"+$(this).attr("mid")).prop('checked')){
            $("#"+$(this).attr("mid")).iCheck("check");
        }
        if(!$("#"+$(this).attr("sid")).prop('checked')){
            $("#"+$(this).attr("sid")).iCheck("check");
        }
    });

    $('body').on('ifUnchecked', '.third-lvl', function(event) {
       if($('input[mid="'+$(this).attr("mid")+'"]:checked').length<1){
            $("#"+$(this).attr("mid")).iCheck("uncheck");
        }
        if($('input[sid="'+$(this).attr("sid")+'"]:checked').length<1){
            $("#"+$(this).attr("sid")).iCheck("uncheck");
        }
    });
});

function roleAccessAllCheck() {
    var chklist = $('#role-access-list-edit').find('input[type=checkbox]');

    chklist.each(function(i, o) {
        $(o).prop('checked', 'checked');
    });

    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green'
    });
}

function roleAccessAllremove() {
    var chklist = $('#role-access-list-edit').find('input[type=checkbox]');

    chklist.each(function(i, o) {
        $(o).prop('checked', false);
    });

    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green'
    });
}



