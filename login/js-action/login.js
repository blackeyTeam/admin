    var t = 31;
    var s = 31
    $(function($) {
        if ($.cookie('t')) {
            t = $.cookie('t');
        } else {
            $.cookie('t', t);
        }
        if (t && t != 31) {
            $('#btn-send-authCode').attr('disabled', 'disabled');
            btChange($('#btn-send-authCode'));
            $('.btn-send-authCode').attr('disabled', 'disabled');
            btChange($('.btn-send-authCode'));
        };

        if ($.cookie('s')) {
            s = $.cookie('s');
        } else {
            $.cookie('s', s);
        }

        $('body').on('click', '#forget-password', showSetPassword);
        $('body').on('click', '.btn-send-authCode', getCode);

        function btChange(bt) {
            t--;
            $.cookie('t', t);
            bt.html('重新获取(' + t + 's)');
            if (t == 1) {
                bt.html('重新获取');
                bt.attr('disabled', false);
                $.cookie('t', 31);
                t = 31;
                return false;
            };
            setTimeout(function() {
                btChange(bt);
            }, 1000);
        }

        function showSetPassword() {
            $('#modal-get-password').modal("show");
        }

        function getCode() {
            var channel = $('#channel').val();
            var account = $('#account1').val();
            var data = {
                channel: channel,
                account: account
            }
            loginData.sendCode(data, function(json) {
                // $('#btn-send-authCode').attr("disabled",true);
                $('.btn-send-authCode').attr('disabled', 'disabled');
                btChange($('.btn-send-authCode'));
            });

        }
        $("#loginForm").submit(function(e) {
            e.preventDefault();
            var _form = $(this);
            var loginId = _form.find("input[name='loginid']").val();
            var password = _form.find("input[name='password']").val();
            loginData.login({
                account: loginId,
                password: password
            }, function(json) {
                if (json.code == "success") {
                    loginData.security(function(json1) {
                        if ($.getUrlParam("ref") != null)
                            location.href = $.getUrlParam("ref");
                        else
                            location.href = "../system/role.html"
                    });
                } else {
                    $('.error-area').remove();
                    if (json.code == "no_active") {
                        var tpl = '<div class="error-area">' +
                            '登陆失败！请点击下方激活按钮激活该账号' +
                            '</div>';
                        _form.find("button[type='submit']").before(tpl);
                    } else {
                        var tpl = '<div class="error-area">' +
                            '登陆失败！请检查用户名和密码' +
                            '</div>';
                        _form.find("button[type='submit']").before(tpl);
                    }

                }
            });
        });
        $('body').on('click', "#btn-send-authCode", function() {
            // var account = $('#account').val();
            // var password = $("#password").val();
            var account = $('#account').val();
            if (account == "") {
                alert("账号和密码不能为空！");
                return;
            }
            loginData.validateType(account, function(json) {
                if (json == "error") {
                    $('#active-error').html("请输入正确的手机号码");
                } else {
                    var data = {
                        channel: json,
                        account: account,
                        b:"active"
                    };
                    loginData.sendCode(data, function(json) {
                        // $('#btn-send-authCode').attr("disabled",true);
                        $('#btn-send-authCode').attr('disabled', 'disabled');
                        btChange($('#btn-send-authCode'));
                    });
                }

            });
        });
        $('body').on('click', '#btn-account-active', function(json) {
            // var account=$("#account").val();
            var password = $("#password").val();
            var account = $('#account').val();
            if (account == "" || password == "") {
                alert("账号和密码不能为空！");
                return;
            }
            loginData.validateType(account, function(json) {
                if (json == "error") {
                    $('#active-error').html("请输入正确的手机号码");
                } else {
                    var data = {
                        channel: json,
                        account: account,
                        password: $('#password').val(),
                        code: $('#auth-code').val()
                    };
                    loginData.activeAcc(data, function(json) {
                        if (json.code == "success") {
                            alert("激活成功");
                            $('#modal-active-account').modal('hide');
                        } else {
                            $('#active-error').html(json.message);
                        }
                    });
                }
            });
        });

    });
    (function($) {
        $('body').on('click','#btn-set-password',setPassword);
        $.getUrlParam = function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }
    })(jQuery);

    function setPassword(){
        var data=$('#set-password-form').serialize();
        loginData.setPassword(data,function(json){
            if(json.code=="success"){
                alert("更改成功！");
            } else if(json.code=="illegal_password"){
                alert("密码必须是6-20位，大小写字母、数字混排！");
            }  else if(json.code=="error_account"){
                alert("账户异常！");
            }
            else {
                alert("请检查您的验证码是否输入错误！");
            }
        });
    }