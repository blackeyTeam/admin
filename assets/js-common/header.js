var header_l = '<div class="sidebar-collapse">'+
                '<ul class="nav metismenu" id="side-menu">'+
                    '<li class="nav-header">'+
                        '<div class="dropdown profile-element"> <span>'+
                            '<img alt="image" class="img-circle" src="../assets/img/profile_small.jpg" />'+
                             '</span>'+
                            '<a data-toggle="dropdown" class="dropdown-toggle" href="#">'+
                                '<span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">欢迎您</strong>'+
                             '</span> <span class="text-muted text-xs block" id="login-user"> <b class="caret"></b></span> </span>'+
                            '</a>'+
                            // '<ul class="dropdown-menu animated fadeInRight m-t-xs">'+
                            //     '<li><a href="../user/profile.html">个人资料</a></li>'+
                            //     '<li><a href="../user/contacts.html">商铺资料</a></li>'+
                            //     '<li class="divider"></li>'+
                            //     '<li><a href="../login/login.html">登出</a></li>'+
                            // '</ul>'+
                        '</div>'+
                        '<div class="logo-element">'+
                            'PL'+
                        '</div>'+
                    '</li>'+
                    // '<li>'+
                    //     '<a><i class="fa fa-cogs"></i> <span class="nav-label">系统设置</span> <span class="fa arrow"></span></a>'+
                    //     '<ul class="nav nav-second-level collapse">'+
                    //         '<li class="system-admin"><a href="../system/admin.html">管理员管理</a></li>'+
                    //         '<li class="system-role"><a href="../system/role.html">成员管理</a></li>'+
                    //         '<li class="system-area"><a href="../system/area.html">管理区域</a></li>'+
                    //     '</ul>'+
                    // '</li>'+
                    '<li>'+
                        '<a><i class="fa fa-users"></i> <span class="nav-label">商户管理</span> <span class="fa arrow"></span></a>'+
                        '<ul class="nav nav-second-level collapse">'+
                            '<li class="vendor-list"><a href="../vendor/vendor.html">商户列表</a></li>'+
                            // '<li class="vendor-auth"><a href="../vendor/vendor-auth.html">商户审核</a></li>'+
                            // '<li class="vendor-type"><a href="../vendor/vendor-type.html">商户类型</a></li>'+
                        '</ul>'+
                    '</li>'+
                    // '<li>'+
                    //     '<a><i class="fa fa-cubes"></i> <span class="nav-label">商品管理</span> <span class="fa arrow"></span></a>'+
                    //     '<ul class="nav nav-second-level collapse">'+
                    //         '<li class="goods-classify"><a href="../goods/goods-classify.html">商品分类</a></li>'+
                    //         '<li class="goods-brand"><a href="../goods/goods-brand.html">品牌管理</a></li>'+
                    //         '<li class="goods-param"><a href="../goods/goods-param.html">参数管理</a></li>'+
                    //         '<li class="goods-info"><a href="../goods/goods-info.html">商品管理</a></li>'+
                    //         '<li class="goods-price"><a href="../goods/goods-price.html">商品定价</a></li>'+
                    //     '</ul>'+
                    // '</li>'+
                    '<li>'+
                        '<a><i class="fa fa-home"></i> <span class="nav-label">店铺管理</span> <span class="fa arrow"></span></a>'+
                        '<ul class="nav nav-second-level collapse">'+
                            '<li class="shops-classify"><a href="../shops/shops-classify.html">店铺分类</a></li>'+
                            '<li class="shops-list"><a href="../shops/shops-list.html">店铺列表</a></li>'+
                        '</ul>'+
                    '</li>'+
                    // '<li>'+
                    //     '<a><i class="fa fa-thumbs-up"></i> <span class="nav-label">推荐管理</span> <span class="fa arrow"></span></a>'+
                    //     '<ul class="nav nav-second-level collapse">'+
                    //         '<li class="recommend-position"><a href="../recommend/recommend-position.html">推荐位置</a></li>'+
                    //         '<li class="recommend-list"><a href="../recommend/advertisement.html">推荐列表</a></li>'+
                    //     '</ul>'+
                    // '</li>'+
                    '<li>'+
                        '<a><i class="fa fa-copy"></i> <span class="nav-label">订单管理</span> <span class="fa arrow"></span></a>'+
                        '<ul class="nav nav-second-level collapse">'+
                            '<li class="order-list"><a href="../order/order-list.html">订单列表</a></li>'+
                        '</ul>'+
                    '</li>'+
                    // '<li>'+
                    //     '<a><i class="fa fa-bus"></i> <span class="nav-label">物流管理</span> <span class="fa arrow"></span></a>'+
                    //     '<ul class="nav nav-second-level collapse">'+
                    //         '<li class="logistics-servicer"><a href="../logistics/servicer.html">物流商</a></li>'+
                    //         '<li class="logistics-tmpl"><a href="../logistics/tmpl.html">运费模板</a></li>'+
                    //         '<li class="logistics-address"><a href="../logistics/address.html">地址库</a></li>'+
                    //     '</ul>'+
                    // '</li>'+
                    // '<li>'+
                    //     '<a><i class="fa fa-shield"></i> <span class="nav-label">库存管理</span> <span class="fa arrow"></span></a>'+
                    //     '<ul class="nav nav-second-level collapse">'+
                    //         '<li class="stock-storage"><a href="../stock/storage.html">仓库管理</a></li>'+
                    //         '<li class="stock-stock"><a href="../stock/stock.html">库存管理</a></li>'+
                    //         '<li class="stock-Sync"><a href="../stock/Sync.html">同步</a></li>'+
                    //     '</ul>'+
                    // '</li>'+
                '</ul>'+
            '</div>';
document.getElementById('header-l').innerHTML = header_l;