
// 側邊欄點擊
$(function () {
  // 點擊
  $("div.img").on("click", function () {
    // -open 的樣式切換
    $("aside").toggleClass("-open"), $("div.light").toggleClass("-on");
  });
});
$(function () {
  // 點擊
  $("img.x").on("click", function () {
    // -open 的樣式切換
    $("aside").removeClass("-open"), $("div.light").removeClass("-on");
  });
});
