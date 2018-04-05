
数据交互
$(document).ready(function(){
   $(".btn_pinlu").click(function(){
   		$.ajax({
   			url:"/api/login.json",
   			type:'POST',
   			data:{
   				username : $(".user").val(),
   				password : $(".password").val(),

   			},
   			async:false,
   			success:function(aaa){
   				if(aaa.code==200){
   					alert("登录成功");
   				}
   				if(aaa.code==401){
   					alert("登录失败");
   				}
   			}
   		})
   });

});