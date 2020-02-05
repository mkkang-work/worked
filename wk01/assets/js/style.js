
//入力フォームを5つまで増やす
$('.form_plus').on('click',function(){
  var size = $('.inputform-forms_plus').length;
  if(size < 5 ){
    $('.form_plus-flag').before('<input type="text" class="inputform-forms_plus w100p mb10">');
  }
});

//モーダル
var qux,quux,quuux;
$(window).on('load scroll',function(){
  quux = $(this).scrollTop();
});
$(".modalopen").on('click',function(){
  var modalid = $(this).attr('name');
  if(modalid){
    $('.modal').addClass('active');
    $('.modalcontents').load(modalid+".html");
    $('html,body').addClass('bglock');
  }
  $(".modalbg").on('click',function(){
    $('.modal').removeClass('active');
    $('.modalcontents').empty();
    $('html,body').removeClass('bglock');
  });
});

//10.htmlの選択地の切り分け
$('input').change(function() {
  var name = $(this).attr('name');
  $('.'+name).removeClass('active');
  var inputval = $(this).val();
  $('.'+inputval).addClass('active');
});
