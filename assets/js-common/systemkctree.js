
var curNode = null, treeNodes = null, callbackFunction = null,selectNode=null;selectMultiNode = null;
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
		url:"/server/commodity/admin/system/category/list.json",
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
		url:"/server/commodity/admin/system/category/list.json",
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
		url:"/server/commodity/admin/system/category/list.json",
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
	loadTreeNode(treeNode.id,callbackFunction);
	curNode = treeNode;
	$('.parent-name').html(treeNode.name);
}
//点击右边树的操作
function getSelectNode(treeId, treeNode){
	selectNode = treeNode;
	ztreeNodeClick(treeNode);
}

function getSelectMultiNode(treeId){
	selectMultiNode = treeNodes.getCheckedNodes(true);
}

function removeNode(id) {
	var node = treeNodes.getNodeByParam("id", id, null);
	treeNodes.removeNode(node);
}


//初始化左边树
function initSysKCTree(parentId,callback,anchor){
	callbackFunction = callback;
	loadTreeNode(parentId,callback);
	treeNodes = $.fn.zTree.init(anchor, treeSetting);
	
}


//初始化右边的树
function initSysKCSelectTree(parentId,anchor){
	loadSelectTreeNode(parentId);
	treeNodes = $.fn.zTree.init(anchor, selectTreeSetting);
}
//初始化多选树
function initSysSelectMultiTree(parentId,anchor){
	loadSelectTreeNode();
	treeNodes = $.fn.zTree.init(anchor, selectMultiTreeSetting);
};
//右边树列表显示
function loadSelectTreeNode(parentId) {
	if(parentId==null) parentId=0;
	$.getJSON("/server/commodity/admin/system/category/list.json?parentId="+parentId,function(json){
	});
}
//点击左边的树 右边内容的操作
function loadTreeNode(parentId,callback) {
	if(parentId==null) parentId=0;
	$.getJSON("/server/commodity/admin/system/category/list.json?parentId="+parentId,function(json){
		callback(json);
	});
}


function delTreeNode(id,parentId,callback){
	$.post("/server/commodity/admin/system/category/delete.json",{id:id},function(json){
		removeNode(id);
		loadTreeNode(parentId,callback);		
	});
}

function ztreeNodeClick(node){};