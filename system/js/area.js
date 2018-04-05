$(document).ready(function() {
    $('#header-l .system-area').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });
   buileCatalogTree();
    

    $('body').on('click', ' #btn-right-tree-cancle, #btn-right-tree-save', hideRightTree);

    $('body').on('focus', '#input-target-area', showRightTree);
});

function hideRightTree() {
    $('#div-right-tree').hide();
    $('#div-middle-list').addClass('col-lg-9').removeClass('col-lg-6');
}

function showRightTree() {
    $('#div-middle-list').addClass('col-lg-6').removeClass('col-lg-9');
    $('#div-right-tree').show();
}

//ZTREE
    function buileCatalogTree() {
      var setting = {
          view: {
            showIcon: true
          },
          data: {
            simpleData: {
              enable: true
            }
          },
          callback: {
              // beforeExpand: beforeExpand,
              // onExpand: onExpand,
              onClick: zTreeOnClick
          }
      }

      var zNodes =[
          { id:1, pId:0, name:"全国", open:true},
          { id:11, pId:1, name:"江苏省", open:true},
          { id:111, pId:11, name:"苏州市", },
          { id:112, pId:11, name:"南京市", },
          { id:113, pId:11, name:"徐州市", },
          { id:114, pId:11, name:"常州市", },
          { id:115, pId:11, name:"镇江市", },
          { id:12, pId:1, name:"浙江省", open:true},
          { id:121, pId:12, name:"杭州市"},
          { id:122, pId:12, name:"慈溪市"},
          { id:123, pId:12, name:"宁波市"},
          { id:13, pId:1, name:"安徽省", open:true},
          { id:131, pId:13, name:"合肥市"},
          { id:132, pId:13, name:"蚌埠市"},
          { id:132, pId:13, name:"宿州市"}
        ];

      $.fn.zTree.init($("#location-tree"), setting, zNodes);
      $.fn.zTree.init($("#location-tree1"), setting, zNodes);
      function zTreeOnClick(event, treeId, treeNode) {
          // 每次点击节点后， 弹出该节点的 tId、name 的信息
          alert(treeNode.tId + ", " + treeNode.name);
      };

    }