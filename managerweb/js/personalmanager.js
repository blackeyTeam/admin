   $(function($){
         $('body').on('click','.btn-del',delObj);
         $('body').on('click','.btn-edit',editObj);
   });      

   function welcome(n,txt){
      if(n<12){
         txt.innerHTML="上午好";
      }
      else if(n>=12&&n<=18){
         txt.innerHTML="下午好！";
      }
      else if(n>=19){
         txt.innerHTML="下午好！";
      }
   }

   function delObj(){
         $(this).parents("td").parents("tr").remove();
   }
   function editObj(){
          
   }

   // ------------------------ . ------------------------ . ------------------------ . ------------------------ .

   window.onload = function(){

      // 欢迎词
      var oDate = new Date();
      var welcomeText = document.getElementById("welTxt");
      welcome(oDate.getHours(),welcomeText);

      // navigation
      var oUl = document.getElementById("naviga");
      var oLi = oUl.getElementsByTagName("li");
      var oldLiBorderColor = "";

      //遮挡框
      var oHover = document.getElementById("line_hover");//
      var oLiHover = oHover.getElementsByTagName("li");//
      var oLdHover = "";

      //search
      var oSear = document.getElementById("sear");
      var oSearTxt = document.getElementById("searname");
      var oSearBtn = document.getElementById("searbtn");
      var oSearTxt = document.getElementById("searname");




      // HOME
      // function mouseOver(){
      //    document.homeimg.src = "/Users/sheepflower/Desktop/project/login/img/homeon.png";
      // }
      // function mouseOut(){
      //    document.homeimg.src = "/Users/sheepflower/Desktop/project/login/img/homeoff.png";
      // }

      // navigation
      for(var i =0;i<oLi.length;i++){
 
         oLi[i].index = i;//存index

      oLi[i].onmouseover = function(){
         document.homeimg.src = "/Users/sheepflower/Desktop/project/login/img/homeoff.png";

         this.style.background = "#F0F0F0";//navigation背景变白
         var oldLiBorderColor = this.style.borderColor;//navigation边框
         this.style.borderColor = "#6FB7B7";

         oLiHover[this.index].style.visibility = "visible";//遮挡框
         var oLdHover = oLiHover[this.index].style.visibility;
      };

       oLi[i].onmouseout = function(){
         this.style.background = "#D1E9E9";//navigation
         this.style.borderColor = oldLiBorderColor;//navigation边框

         oLiHover[this.index].style.visibility = oLdHover;//遮挡框       
      };
   }


   // ------------------------ . ------------------------ . 
      // table 
      var oBtn = document.getElementById("btn");//添加用户按钮 oBtn
      var oIdcomp = document.getElementById("idcomp");//企业标识 oIdcomp
      var oName = document.getElementById("name");//name
      var oPassword = document.getElementById("password");//password
      var oTab = document.getElementById("tab");//表格 oTab
      var id = oTab.tBodies[0].rows.length+1;//id

      // 点击添加用户按钮
      oBtn.onclick = function(){

         // 判断输入框内容是否为空
         if(oIdcomp.value==""){
            alert("输入有误！ID不能为空！请重新输入！");
            return;
         }else if (oName.value==""){
            alert("输入有误！Name不能为空！请重新输入！");
            return;
         }else if (oPassword.value==""){
             alert("输入有误！Password不能为空！请重新输入！");
             return;
         }

         var oTr = document.createElement("tr");
         var aTr = oTab.tBodies[0].getElementsByTagName("tr");//倒序添加
         // var oAdd = document.getElementById("addPer");
         // var aName = oAdd.getElementsByTagName("input");

         //添加一行的6列
         var oTd = document.createElement("td");//id
         oTd.innerHTML = id++;
         oTr.appendChild(oTd); 

         var oTd = document.createElement("td");
         oTd.innerHTML = oIdcomp.value;
         oTr.appendChild(oTd);      

         var oTd = document.createElement("td");
         oTd.innerHTML = oName.value;
         oTr.appendChild(oTd);

         var oTd = document.createElement("td");
         oTd.innerHTML = oPassword.value; 
         oTr.appendChild(oTd);

         var oTd = document.createElement("td");
         oTd.innerHTML = "<button type='button' class='btn btn-warning btn-edit'>修改</button>";
         oTr.appendChild(oTd);

         var oTd = document.createElement("td");
         oTd.innerHTML = "<button id='del' type='button' class='btn btn-danger btn-del'>删除</button>";
         oTr.appendChild(oTd);

         //倒序添加该行
         if(aTr.length>0){
             oTab.tBodies[0].insertBefore(oTr,aTr[0]);
          }else{
               oTab.tBodies[0].appendChild(oTr);
          }
            
         // 删除用户按钮
         //存在问题：为什么不选择第一个修改按钮？？？？
         //怎么实现body里面本来就有的删除按钮？？
         oTd.getElementsByTagName("button")[0].onclick = function(){
            oTab.tBodies[0].removeChild(this.parentNode.parentNode);
             // alert(oTd.getElementsByTagName('button')[0].innerHTML+ "用户:" + this.parentNode.parentNode.oName.value);//这句话有问题，获取的不是当前的oName.value 怎么解决？？？
         };
      };
   // ------------------------ . ------------------------ . 
   // search
      oSearBtn.onclick = function(){
         for(var i = 0;i<oTab.tBodies[0].rows.length;i++){

            //不区分大小写
            var sSearTxt = oSearTxt.value.toLowerCase();
            var sTab = oTab.tBodies[0].rows[i].cells[2].innerHTML.toLowerCase();
            //多关键字搜索
            var searArr = sSearTxt.split(" ");

            oTab.tBodies[0].rows[i].style.background = "";//display none

            //循环每个关键字（以空格隔开）
            for(var j = 0;j<searArr.length;j++){//一个一个关键字
                  if( sTab.search(searArr[j])!=-1 ){//搜索多关键字 -1为不匹配
               oTab.tBodies[0].rows[i].style.background = " #D9D9D9";//display block
                  }
            }
         }
         
      };

   };

















      

