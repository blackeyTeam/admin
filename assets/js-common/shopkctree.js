
var SPcurNode = null, SPtreeNodes = null, SPcallbackFunction = null,SPselectNode=null;SPselectMultiNode = null;
var shop_id = null;
function filter(treeId, parentNode, childNodes) {
	if (!childNodes) return null;
	for (var i=0, l=childNodes.length; i<l; i++) {
		//childNodes[i].name = childNodes[i].name.replace(/\.n/g, '.');
		if (childNodes[i].parentId!='0') childNodes[i].open = false;
		//这里表示该节点第一次点击时是不是打开的
	}

	curChildNodes = childNodes;
	return childNodes;
}

//点击左边树的操作
function getCurrentNode(treeId, treeNode) {
	loadTreeNode(treeNode.id,SPcallbackFunction);
	SPcurNode = treeNode;
	$('.newCategoryName').text(treeNode.name);
	$('.nowCategoryId').val(treeNode.id);
}
//点击右边树的操作
function getSelectNode(treeId, treeNode){
	SPselectNode = treeNode;
	ztreeNodeSPClick(treeNode);
}

function getSelectMultiNode(treeId){
	SPselectMultiNode = SPtreeNodes.getCheckedNodes(true);
}

function removeNode(id) {
	var node = SPtreeNodes.getNodeByParam("id", id, null);
	SPtreeNodes.removeNode(node);
}


//初始化左边树
function initSPKCTree(parentId,callback,anchor,shopId){
	shop_id = shopId;
	SPcallbackFunction = callback;
	loadTreeNode(parentId,callback);
	//左边树设置
	var treeSetting = {
		view: {  
			showLine: true,  
			selectedMulti: false,  
			dblClickExpand: false  
		},  
		async: {
			enable: true,
			type: "get",
			dataType:"json",
			url:"/server/commodity/admin/shop/category/list.json?shopId="+shopId,
			autoParam:["id=parentId"],

			dataFilter: filter
		},

		data: {  
			simpleData: {
				enable: true,  
				idKey:"id",  
				pIdKey:"parentId"  
			}
		},

		callback: {
			beforeClick:getCurrentNode,
			beforeRemove:delTreeNode
		}
	};
	SPtreeNodes = $.fn.zTree.init(anchor, treeSetting);
	
}


//初始化右边的树
function initSPKCSelectTree(parentId,anchor,shopId){
	shop_id = shopId;
	loadSelectTreeNode(parentId);
	//右边树样式设置
	var selectTreeSetting = {
		view: {  
			showIcon : true,
			showLine : true,
			dblClickExpand : false  
		},  
		async: {
			enable: true,
			type: "get",
			dataType:"json",
			url:"/server/commodity/admin/shop/category/list.json?shopId="+shopId,
			autoParam:["id=parentId"],

			dataFilter: filter
		},

		data: {  
			simpleData: {  
				enable: true,  
				idKey:"id",  
				pIdKey:"parentId"  
			}
		},

		callback: {
			beforeClick:getSelectNode,
			beforeRemove:delTreeNode
		}
	};
	SPtreeNodes = $.fn.zTree.init(anchor, selectTreeSetting);
}
//初始化多选树
function initSPSelectMultiTree(parentId,anchor,shopId){
	shop_id = shopId;
	loadSelectTreeNode(parentId);
	var selectMultiTreeSetting = {
		view: {  
			showIcon : true,
			showLine : true,
			dblClickExpand : false  
		},  
		async: {
			enable: true,
			type: "get",
			dataType:"json",
			url:"/server/commodity/admin/shop/category/list.json?shopId="+shopId,
			autoParam:["id=parentId"],

			dataFilter: filter
		},

		data: {  
			simpleData: {  
				enable: true,  
				idKey:"id",  
				pIdKey:"parentId"  
			}
		},
		check:{
				enable: true,
				nocheckInherit: true,
				chkboxType : {"Y": "", "N": ""},
			}
	};
	SPtreeNodes = $.fn.zTree.init(anchor, selectMultiTreeSetting);
};
//右边树列表显示
function loadSelectTreeNode(parentId) {
	if(parentId==null) parentId=0;
	$.getJSON("/server/commodity/admin/shop/category/list.json?parentId="+parentId+"&shopId="+shop_id,function(json){
	});
}
//点击左边的树 右边内容的操作
function loadTreeNode(parentId,callback) {
	if(parentId==null) parentId=0;
	$.getJSON("/server/commodity/admin/shop/category/list.json?parentId="+parentId+"&shopId="+shop_id,function(json){
		callback(json);
	});
}


function delTreeNode(id,parentId,callback){
	$.post("/server/commodity/admin/shop/category/delete.json",{id:id},function(json){
		removeNode(id);
		loadTreeNode(parentId,callback);		
	});
}

function ztreeNodeSPClick(node){};