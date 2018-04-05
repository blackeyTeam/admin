$(function(){

		$("#addPerson").click(function add(){

		$.ajax({
			url : "test.json",
			async : false,
			dataType: "json",
			success: function (rtn) {
			
				$('#person-form').append("<tr>"+
				"<td>"+name+"</td>"+
				"<td id='sss'>"+user+"</td>"+
				"<td>"+password+"</td>"+
				"</tr>");
				}
			// error: function (){
			// 	alert("wrong");
			// 	}
			});
		
		});


});




