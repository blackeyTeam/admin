//全局
$.ajaxSetup({
    error: function(jqXHR, textStatus, errorMsg){
        var response = JSON.parse(jqXHR.responseText);
        // alert(jqXHR.status);
        switch (jqXHR.status){

            case(500):
                alert(response.message);
                //window.location.href = "../../common/page/500.html";
                break;
            case(401):
                
                if(bootbox){
                    bootbox.alert("当前未登录，请登录系统！",function(){
                        location.href = "../login/login.html";
                    });
                }else{
                    alert("当前未登录，请登录系统！");
                    location.href = "../login/login.html";
                }
                break;
            case(403):
                //alert("无权限执行此操作");
                window.location.href = "../../common/page/403.html";
                break;
            case(404):
                //alert("页面未找到");
                //window.location.href = "../../common/page/404.html";
                break;
            case(408):
                //alert("请求超时");
                window.location.href = "../../common/page/408.html";
                break;
            default:
                //alert("未知错误");
                //window.location.href = "../../common/page/unknow.html";
        }
    }
});
//提示对话框
function showMsgPane(s, type, callback) {
    var btns = '';
    var type = type || 'prompt';

    $('#modal-msg').remove();

    if (type == 'prompt') {
        btns = ' <button class="btn btn-primary" onclick="hideMsgPane()">确定</button> '
    } else if (type == 'confirm') {
        btns = ' <button class="btn btn-default" onclick="hideMsgPane()">取消</button> ' + ' <button class="btn btn-primary" id="btn-msg-ok">确定</button> ';
    } else if (type == 'alert') {
        btns = ' <button class="btn btn-primary" id="btn-msg-ok">确定</button> '
    };

    var html = '<div id="modal-msg" class="modal fade " aria-hidden="true" data-backdrop="false"> <div class="modal-dialog modal-sm"><div class="modal-content">' + '  <div class="modal-header"> ' + '    <button type="button" class="close" onclick="hideMsgPane()">×</button> ' + '    <h3 id="lbl-modal-msg">提示</h3> ' + '  </div> ' + '  <div class="modal-body"> ' + '    <p>' + s + '</p> ' + '  </div> ' + '  <div class="modal-footer"> ' + btns + '  </div> ' + '</div></div></div>';

    $('body').append(html);
    $('#modal-msg').modal('show');

    var fn = null;
    if (typeof callback == 'function') {
        fn = function() {
            //hideMsgPane();
            $('#modal-msg').hide(function() {
                $('body').off('click', '#btn-msg-ok');
                $('#modal-msg').remove();
                callback();
            });


        };
    } else {
        fn = function() {
            hideMsgPane();
        };
    }

    $('body').on('click', '#btn-msg-ok', fn);

}

function hideMsgPane() {
    $('#modal-msg').hide(function() {
        $('body').off('click', '#btn-msg-ok');
        $('#modal-msg').remove();
    });
}



$(document).ready(function() {
    $('body').on('ifChecked', '.chkall', function(event) {
        var chkall = $(this);
        var chklist = chkall.parents('table').find('.chk');
        chklist.each(function(i, o) {
            if ($(o).attr('disabled') != "disabled") {
                $(o).iCheck('check');
            };
        });

    });

    $('body').on('ifUnchecked', '.chkall', function(event) {
        var flag = false;
        var chkall = $(this);
        var chklist = chkall.parents('table').find('.chk');
        chklist.each(function(i, o) {
            if ($(o).prop('checked') == true) {
                flag = true;
            }else {
                flag = false;
                return false;
            }
        });
        if (flag) {
            chklist.each(function(i, o) {
                if ($(o).attr('disabled') != "disabled") {
                    $(o).iCheck('uncheck');
                };
            });
        }
    });

    $('body').on('ifChecked', '.chk', function(e) {
        var flag = true;
        var table = $(this).parents('table');
        var chkall = table.find('.chkall');
        var chklist = table.find('.chk');

        chklist.each(function(i, o) {
            if ($(o).prop('checked') == false) {
                flag = false;
            }
        });
        if (flag) {
            chkall.iCheck('check');
        }
    });

    $('body').on('ifUnchecked', '.chk', function(e) {
        var table = $(this).parents('table');
        var chkall = table.find('.chkall');
        if (chkall.attr('disabled') != "disabled") {
            chkall.iCheck('uncheck');
        };
    });

});

//获取URL中参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

function IsValidFileExtention(fileName,arr_exts)
{
    var arrayExt = fileName.split(".");
    var fileExt = arrayExt[arrayExt.length - 1].toLowerCase();
    var isValid = false;
    for(var i = 0;i < arr_exts.length;i++)
    {
        if(isValid = arr_exts[i] == fileExt)
        {
            break;
        }
    }
    return isValid;
}

//压缩图片，path/pc可以是绝对的路径.
function dealImage(path, obj, callback) {
    var img = new Image();
    img.src = path;
    img.onload = function() {
        var that = this;
        // 默认按比例压缩
        var w = that.width,
            h = that.height,
            scale = w / h;
        w = obj.width || w;
        h = obj.height || (w / scale);
        var quality = 1; // 默认图片质量为0.7
        //生成canvas
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        // 创建属性节点
        var anw = document.createAttribute("width");
        anw.nodeValue = w;
        var anh = document.createAttribute("height");
        anh.nodeValue = h;
        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh);
        ctx.drawImage(that, 0, 0, w, h);
        // 图像质量
        if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
            quality = obj.quality;
        }
        // quality值越小，所绘制出的图像越模糊
        var base64 = canvas.toDataURL('image/jpeg', quality);
        // 回调函数返回base64的值
        callback(base64);
    }
}

$('body').on('click','.btn-logout',function(){
    $.post("/server/user/portal/account/logout.json",function(){
        location.href = "../login/login.html"
    });
});
$(function($){
    // getCurrentUser();
});
function getCurrentUser(){
    var url = "/server/user/portal/account/current.json";
    $.getJSON(url,function(json){
        if(json.code=="logined"){
            $('#login-user').text(json.data.merchantName ? json.data.merchantName : (json.data.mobile ? json.data.mobile : json.data.email));
        } else if(json.code=="no_login"){
            // alert("您还未登录！");
            // window.location.href ="../login/login.html";
        }
    });
}
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function formatDate(e){
    var date = new Date(e);
    return date.getFullYear() + '-' + addZero(date.getMonth() * 1 + 1 * 1) + '-' + addZero(date.getDate()) + " " + addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
}