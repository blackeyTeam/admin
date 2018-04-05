$(document).ready(function() {
    $('#header-l .vendor-type').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');

    $('body').on('click', '.btn-vendor-type-remove', deleteVendorType);
    $('body').on('click', '.btn-vendor-type-edit',showEditModal);
    $('body').on('click', '#btn-vendor-type-add',showAddModal);
});

function showAddModal() {
    $('#modal-vendor-type-add').modal('show');
}