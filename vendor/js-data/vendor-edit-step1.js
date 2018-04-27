var ajax = {
    save: function (data, callback) {
        $.ajax({
            url: "/server/activity/save",
            type: 'POST',
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            success: function (rtn) {
                callback(rtn);
            },
            error: function (er) {

            }
        });
    },
    detail:function (id, callback){
        $.getJSON("/server/activity/admin/detail",{id:id},function(json){
            callback(json)
        })
    }
}