$(document).ready(function() {
	three_location();
});

$('#2Level-location').change(function(){
	  three_location3($(this).val());
  })

$('#rootLevel-location').change(function(){
	  $('#2Level-location').empty();
	  three_location2($(this).val());
  })
//三级地址
function three_location() {
  var url ='/server/commodity/admin/basic/location/rootLevel/list.json';
  $.get(url, {}, function(e) {
      $.each(e, function(i, item) {
          $('#rootLevel-location').append('<option value="' + item.id + '">' + item.name + '</option>');
      });
      
      three_location2(e[0].id,"","");
  });
}
function three_location2(pid,sid,qid){
	var url = '/server/commodity/admin/basic/location/' + pid + '/list.json';
	 $.get(url, {}, function(e) {
		 $.each(e, function(i, item) {
	          $('#2Level-location').append('<option value="' + item.id + '">' + item.name + '</option>');
	      });
		 
		 if(sid!=""&&sid!=undefined){
		 	$("#2Level-location option[value="+sid+"]")[0].selected = true;
		 }else{
		 	sid = e[0].id
		 }
		 three_location3(sid,qid);
	 });		 
}

function three_location3(pid,qid){
	$('#3Level-location').empty();
	var url = '/server/commodity/admin/basic/location/' + pid + '/list.json';
	 $.get(url, {}, function(e) {
		 $.each(e, function(i, item) {
	          $('#3Level-location').append('<option value="' + item.id + '">' + item.name + '</option>');
	      });
		 if(qid!=""&&qid!=undefined){
		 	$("#3Level-location option[value="+qid+"]")[0].selected = true;
		 }
	 });		 
}