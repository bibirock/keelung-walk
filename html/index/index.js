$(function () {

  // 點擊
  $("div.img").on("click", function () {
    // -open 的樣式切換
    $("aside").toggleClass("-open");
  });
});
$(function () {

  // 點擊
  $("img.x").on("click", function () {
    // -open 的樣式切換
    $("aside").removeClass("-open");
  });
});

var header_active = function(){

// 取得使用者滑了多少 px
var scroll_top = $(window).scrollTop();

// 將 scroll_top 數值放到 p.-pos 內容
$("p.-pos").html(scroll_top);


if(scroll_top >= 100){
$("div.fixed_top").addClass("-on");
}else{
$("div.fixed_top").removeClass("-on");
}

};


$(function(){

// 第三步：偵測頁面滑動時會觸發
$(window).scroll(function(){
header_active();
});

});