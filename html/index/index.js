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

// var header_active = function () {
//   // 取得使用者滑了多少 px
//   var scroll_top = $(window).scrollTop();

//   // 將 scroll_top 數值放到 p.-pos 內容
//   $("p.-pos").html(scroll_top);

//   if (scroll_top >= 100) {
//     $("div.fixed_top").addClass("-on");
//   } else {
//     $("div.fixed_top").removeClass("-on");
//   }
// };

// $(function () {
//   // 第三步：偵測頁面滑動時會觸發
//   $(window).scroll(function () {
//     header_active();
//   });
// });

// //主題景點的輪播換圖控制
// let theme_text = document.getElementById("theme"); //抓出景點名稱
// let img_block = document.getElementsByClassName("images")[0]; //圖片區域
// let text_input = document.getElementsByClassName("background")[0]; //置換文字的地方
// let click = 0;
// //左邊按紐的點擊
// let left_botton = document.getElementById("left"); 
// let list = ['1','2','3']
// let href = ['/a','/b','/c']
// let image = [`<a href="../mountain/mountain.html"><img src="./images/vector/the2.png"></a>
// <a href="../mountain/mountain.html"><img class="down" src="./images/vector/the1.png"></a>
// <a href="../mountain/mountain.html"><img src="./images/vector/the3.png"></a>`]
// 0 1 2 0

// 0 2 1 0 2
// left_botton.addEventListener("click", function () {
  
  
//   if ((click == 0)) {
//     let changeStr =
//       '無敵海景';
//     theme_text.innerHTML = changeStr;
//     click = 1
    
//     let changerImg = 
//     `
//     <a href="../mountain/mountain.html"><img src="./images/vector/the2.png"></a>
//     <a href="../mountain/mountain.html"><img class="down" src="./images/vector/the1.png"></a>
//     <a href="../mountain/mountain.html"><img src="./images/vector/the3.png"></a>
//   `
//     img_block.innerHTML = changerImg;

//   }else if ((click == 1)) {
//     console.log("222")
//     let changeStr =
//       '<a id="theme" href="../mountain/mountain.html">打卡熱點</a>';
//     theme_text.innerHTML = changeStr;
//   }
// });
// //右邊按紐的點擊
// let right_botton = document.getElementById("right");
// right_botton.addEventListener("click", function () {
  
//   if ((this.click = 1)) {
//     let changeStr =
//       '<a id="theme" href="../mountain/mountain.html">幽遊山徑</a>';
//     theme_text.innerHTML = changeStr;
//   }else if ((this.click = 2)) {
//     let changeStr =
//       '<a id="theme" href="../mountain/mountain.html">打卡熱點</a>';
//     theme_text.innerHTML = changeStr;
//   }
// });