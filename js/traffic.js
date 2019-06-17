$(function(){
    
   
   setInterval(function(){
    updateNowData();
    undateRoadData();
    undate();
   }, Math.round(Math.random() * 1000 + 700));
   
   $(".amiddboxttopMain video").click(function(){
      $(".alertMask").show();
      var Src = $(this).prop("src");
      console.log(Src)
      $('.maskVideo').prop("src",Src)
   });
   $('.mask').click(function(){
      $(".alertMask").hide();

   })
})

//实时游客数据更新
function updateNowData() {
    $(".updateDataMain ul li").each(function(i,v){
        var twData = parseInt($(v).find(".twData").html());

        var num =  parseInt($(v).find(".updateData").html());
        
        var rwith = $(v).find("span.rwith_img");
      
        rwith.width(100-(num / (num+twData))*100 +"%");
        num += Math.floor(Math.random() * 10);
        $(v).find(".updateData").html(num);
      })

   
}

//实时道路状况更新

function undateRoadData(){
    $(".tlboxEdit div ul li").each(function(i,v){
      
        var Road = parseInt($(v).find(".tlboxRoad").html());
        Road += Math.floor(Math.random() * 10);
        if(Road>1000){
            $(v).find(".tlboxRoad").css("color","#c23531")
        }
        $(v).find(".tlboxRoad").html(Road);

    })
}
function undate(){
    $("#arightboxbott ul li").each(function(i,v){
        if(i != 3){
        var num = parseInt($(v).find('b').html());
        num += Math.floor(Math.random() * 10);
        $(v).find("b").html(num);
        // console.log(num)

        }else{
        
        }
    });
    $("#aleftboxtmiddr ul li").each(function(i,v){
        var num = parseInt($(v).find("b span").html());
        if(num>300){
        num -= Math.floor(Math.random() * 10);

        }else{
            num += Math.floor(Math.random() * 10);

        }

        $(v).find("b span").html(num+'/');


    })
}



    
