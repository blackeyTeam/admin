$(document).ready(function() {
    $('#header-l .goods-brand').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');

    $('body').on('click', '.btn-brand-del', deleteBrand);

});
