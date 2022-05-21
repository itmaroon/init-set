//WOWの初期化
new WOW().init();



jQuery(function($) {

  //ページ内スムーススクロール
  $('a[href^="#"]').click(function(){
    let header=$(".header").innerHeight();
    let speed = 500;
    let id = $(this).attr("href");
    let target = $("#"===id ? "html" : id);
    let position = $(target).offset().top - header;
    $('body,html').animate({scrollTop:position},speed);
    
    return false;
  });

  //ドロワーメニュー
  $(function(){
    //ドロワーアイコン
    let drawerBtn=$('#drawer_btn');

    drawerBtn.click(function(){
      $(this).toggleClass("is-active");
      $('#gloval_menu').toggleClass("is-active");
      $(".drawer_background").toggleClass("is-active");
    });

    $(".nav_item>a").click(function(e){
      //e.preventDefault();
    
      $(".drawer_icon").removeClass("is-active");
      $(".drawer_background").removeClass("is-active");
      $("#gloval_menu").removeClass("is-active");
    
      //return false;
    });
  });
  //フローティングボタン
  $(function(){
    let pagetop=$('#page_top');

    pagetop.hide();
    $(window).scroll(function(){
      if($(this).scrollTop()>=180){
        pagetop.fadeIn();
      }else{
        pagetop.fadeOut();
      }
    });

    pagetop.click(function(){
      $('body,html').animate({scrollTop:0},500);
      return false;
    })
  });

  //faqのアコーデオン
  $('.faq_question').click(function(){
    $(this).next().slideToggle();
    $(this).children('.faq_question_open').toggleClass("is-open");
  });

  //パラメータによる移動
  $(window).on('load',function(){//ページの読込後
    param = location.search;
    const regexp=/\?pos=/;
    if(param.match(regexp)){//pos=というパラメータを持ったページの場合
      
      let anchor=param.replace(regexp,'#');
      //ページ移動
      //let anchorHeight=$(anchor).innerHeight();
      let header=$("header").innerHeight();
      let position=$(anchor).offset().top-header;
      let speed = 500;
      $('body,html').animate({scrollTop:position},speed);
    }
  });

  //要素が可視領域に入った時の処理
  $(window).scroll(function (){
    $('.section_title, .catch_phrase').each(function(){
      if(!$(this).hasClass('boss_title')) {
        var ePos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > ePos - windowHeight + windowHeight/5){
          $(this).addClass("is_swing");
        }
      }
    });
  });

});