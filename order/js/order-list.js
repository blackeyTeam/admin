$(document).ready(function() {
    $('#header-l .order-list').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');
    $('#data_1,#data_2').datepicker({
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        calendarWeeks: true,
        autoclose: true
    });

    $('#input-daterange').datepicker({
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true
    });

    $("#demo-input-facebook-theme").tokenInput("....", {
        theme: "facebook",
        hintText: "请输入商家名称",
        noResultsText: "没有结果",
        searchingText: "搜索中..."
    });
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

    $('.tabs-table label').click(function() {
        if ($(this).hasClass('label-white')) {
        	$(this).siblings().addClass('label-white').removeClass('label-info');
            $(this).addClass('label-info').removeClass('label-white');
        }
    });


    $('body').on('keyup', '.somehow input', function() {
        var o = $(this);
        var t = "";
        $.each(o.parents('.somehow').find('input'), function(i, item) {
            t = t + $(item).val();
        });

        if (t.length != 0) {
            o.parents('.somehow').find('.btn-primary').parent().show();
        } else {
            o.parents('.somehow').find('.btn-primary').parent().hide();
        }
    });
});
