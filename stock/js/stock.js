$(document).ready(function() {
    $('#header-l .stock-stock').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

    $('body').on('keyup', '.somehow input', function() {
        var o = $(this);
        var t = "";
        $.each(o.parents('.somehow').find('input[type=text]'), function(i, item) {
            t = t + $(item).val();
        });

        if (t.length != 0) {
            o.parents('.somehow').find('.btn-primary').parent().show();
        } else {
            o.parents('.somehow').find('.btn-primary').parent().hide();
        }
    });
});
