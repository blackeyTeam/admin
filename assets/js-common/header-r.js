var header_r =  '<div class="navbar-header">'+
                    '<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>'+
                    '<form role="search" class="navbar-form-custom" action="search_results.html">'+
                        '<div class="form-group">'+
                            '<input type="text" placeholder="在此输入想要查询的..." class="form-control" name="top-search" id="top-search">'+
                        '</div>'+
                    '</form>'+
                '</div>'+
                '<ul class="nav navbar-top-links navbar-right">'+
                    '<li>'+
                        '<span class="m-r-sm text-muted welcome-message">欢迎登陆 xxxx电子商务管理平台.</span>'+
                    '</li>'+
                    '<li class="dropdown">'+
                        '<a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">'+
                            '<i class="fa fa-bell"></i> <span class="label label-primary">8</span>'+
                        '</a>'+
                        '<ul class="dropdown-menu dropdown-alerts">'+
                            '<li>'+
                                '<a href="../assets/mailbox.html">'+
                                    '<div>'+
                                        '<i class="fa fa-envelope fa-fw"></i> 你有 16 条未读消息'+
                                        '<span class="pull-right text-muted small">4 分钟 前</span>'+
                                    '</div>'+
                                '</a>'+
                            '</li>'+
                            '<li class="divider"></li>'+
                            '<li>'+
                                '<a href="../assets/profile.html">'+
                                    '<div>'+
                                        '<i class="fa fa-bell fa-fw"></i>你有 3 条提醒'+
                                        '<span class="pull-right text-muted small">12 分钟 前</span>'+
                                    '</div>'+
                                '</a>'+
                            '</li>'+
                            '<li class="divider"></li>'+
                            '<li>'+
                                '<div class="text-center link-block">'+
                                    '<a href="../assets/notifications.html">'+
                                        '<strong>查看所有提醒 </strong>'+
                                        '<i class="fa fa-angle-right"></i>'+
                                    '</a>'+
                                '</div>'+
                            '</li>'+
                        '</ul>'+
                    '</li>'+
                    '<li>'+
                        '<a href="javascript:;" class="btn-logout">'+
                            '<i class="fa fa-sign-out"></i> 登出'+
                        '</a>'+
                    '</li>'+
                '</ul>';
document.getElementById('header-r').innerHTML = header_r;

