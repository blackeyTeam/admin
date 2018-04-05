var pagestart = 0;
var echopageno = 8;

function data_page(totalElements,totalPages,page,listname,maxsizeId){
	echopageno = 8;
	pagestart = page;

	if (totalPages < echopageno) echopageno = totalPages;
	
	//pre block
	var preblockpage = "";
	if (pagestart<=7) preblockpage="disabled";
	
	//next block
	var nextblockpage = "";
	if ((pagestart+echopageno)>=totalPages) nextblockpage="disabled";
	
	
	var rtn = "";
	
	//total info
	rtn += "<label class='paging-info'>共 <span class='totalPages'>"+ totalPages+ "</span> 页";
	rtn += "/ 共 <span class='totalElements'>"	+ totalElements	+ "</span> 条数据, ";
	rtn += "每页显示 <select class='form-control input-sm'  id='"+ maxsizeId +"'><option value='10'>10</option><option value='20'>20</option><option value='50'>50</option></select> 条</div>";
	
	//current page
	var currpage = "";
	var current =  Math.floor(page/echopageno);
	var currentPageStart = current*echopageno;
	
	//pre page
	// rtn += "<div class='btn-group'><li class='pre "+preblockpage+"'><a href='#' onclick='goBlockPage("+totalPages+",0,"+listname+","+currentPageStart+")' >&laquo;</a></li>\n";
	rtn += "<button type='button' class='btn btn-white pre "+preblockpage+"' onclick='goBlockPage("+totalPages+",0,"+listname+","+currentPageStart+")'><i class='fa fa-chevron-left'></i></button>";


	//page numbers
	var echopagesize = echopageno+currentPageStart;
	if(echopageno+currentPageStart>=totalPages){
		echopagesize = totalPages;
	}
	for (var p=currentPageStart; p<echopagesize; p++){	
		if (p==page) currpage = "active";
		// rtn += "<li class='"+currpage+"'><a href='#' onclick='"+listname+"("+p+")'>"+(p+1)+"</a></li>\n";
		rtn += "<button class='btn btn-white "+ currpage+"' onclick='"+listname+"("+p+")'>"+(p+1)+"</button>";

		currpage = "";
	}
	
	//next page
	// rtn += "<li class='"+nextblockpage+"'><a href='#' onclick='goBlockPage("+totalPages+",1,"+listname+","+currentPageStart+")'>&raquo;</a></li></ul>";
	rtn += "<button type='button' class='btn btn-white "+nextblockpage+"' onclick='goBlockPage("+totalPages+",1,"+listname+","+currentPageStart+")'><i class='fa fa-chevron-right'></i></button>";
	return rtn;
}

function goBlockPage(totalPages,direct,listname,currentPageStart){

	if (direct==1 && (currentPageStart+echopageno)<totalPages){
		currentPageStart = currentPageStart+echopageno;
	}
	else if (direct==0 && currentPageStart>0){ 
		currentPageStart = currentPageStart-echopageno;
	}
	else return;

	//alert(pagestart);
	listname(currentPageStart);
}


