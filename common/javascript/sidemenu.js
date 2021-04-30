$(function(){
  $('.topmenu .ham').click(function(){
    $('body').toggleClass('active');
    

  });
});



//////////////////// 이차 사이드메뉴 입니다. ///////////////////////////////////
$(function(){
  $('.sidemenu ul li #menu1').click(function(){
    if($('.sidemenu ul li #menu1').hasClass("selected")){
      $('.sidemenu ul li.test1').css('display', 'none');
      $('.sidemenu ul li a.test2').css('display', 'none');
      $('.sidemenu ul li #menu1').removeClass('selected');
    } else{
      $('.sidemenu ul li.test1').css('display', 'block');
      $('.sidemenu ul li a.test2').css('display', 'block');
      $('.sidemenu ul li #menu1').addClass('selected');
    };

  });
});




$(function(){
  $('.sidemenu ul li #menu2').click(function(){
    if($('.sidemenu ul li #menu2').hasClass("selected")){
      $('.sidemenu ul li.test3').css('display', 'none');
      $('.sidemenu ul li a.test4').css('display', 'none');
      $('.sidemenu ul li #menu2').removeClass('selected');
    } else{
      $('.sidemenu ul li.test3').css('display', 'block');
      $('.sidemenu ul li a.test4').css('display', 'block');
      $('.sidemenu ul li #menu2').addClass('selected');
    };

  });
});





$(function(){
  $('.sidemenu ul li #menu3').click(function(){
    if($('.sidemenu ul li #menu3').hasClass("selected")){
      $('.sidemenu ul li.test5').css('display', 'none');
      $('.sidemenu ul li a.test6').css('display', 'none');
      $('.sidemenu ul li #menu3').removeClass('selected');
    } else{
      $('.sidemenu ul li.test5').css('display', 'block');
      $('.sidemenu ul li a.test6').css('display', 'block');
      $('.sidemenu ul li #menu3').addClass('selected');
    };

  });
});





$(function(){
  $('.sidemenu ul li #menu4').click(function(){
    if($('.sidemenu ul li #menu4').hasClass("selected")){
      $('.sidemenu ul li.test7').css('display', 'none');
      $('.sidemenu ul li a.test8').css('display', 'none');
      $('.sidemenu ul li #menu4').removeClass('selected');
    } else{
      $('.sidemenu ul li.test7').css('display', 'block');
      $('.sidemenu ul li a.test8').css('display', 'block');
      $('.sidemenu ul li #menu4').addClass('selected');
    };

  });
});






$(function(){
  $('.sidemenu ul li #menu5').click(function(){
    if($('.sidemenu ul li #menu5').hasClass("selected")){
      $('.sidemenu ul li.test9').css('display', 'none');
      $('.sidemenu ul li a.test10').css('display', 'none');
      $('.sidemenu ul li #menu5').removeClass('selected');
    } else{
      $('.sidemenu ul li.test9').css('display', 'block');
      $('.sidemenu ul li a.test10').css('display', 'block');
      $('.sidemenu ul li #menu5').addClass('selected');
    };

  });
});






$(function(){
  $('.sidemenu ul li #menu6').click(function(){
    if($('.sidemenu ul li #menu6').hasClass("selected")){
      $('.sidemenu ul li.test11').css('display', 'none');
      $('.sidemenu ul li a.test12').css('display', 'none');
      $('.sidemenu ul li #menu6').removeClass('selected');
    } else{
      $('.sidemenu ul li.test11').css('display', 'block');
      $('.sidemenu ul li a.test12').css('display', 'block');
      $('.sidemenu ul li #menu6').addClass('selected');
    };

  });
});







//////////////////// 이차 사이드메뉴 입니다. ///////////////////////////////////
