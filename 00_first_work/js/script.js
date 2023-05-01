//=========================================================================================
//ロード時にロゴ画像を表示
//=========================================================================================
$(window).on("load", function () {
  $("#splash").delay(1500).fadeOut("slow"); //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1500).fadeOut("slow"); //ロゴを1.5秒（1500ms）待機してからフェードアウト
});

//=========================================================================================
//トップに戻るボタンのアニメーション
//=========================================================================================

function PageTopAnime() {
  const scroll = $(window).scrollTop();
  if (scroll >= 500) {
    //上から500pxスクロールしたら
    $("#page-top").removeClass("DownMove"); //#page-topについているDownMoveというクラス名を除く
    $("#page-top").addClass("UpMove"); //#page-topについているUpMoveというクラス名を付与
  } else {
    if ($("#page-top").hasClass("UpMove")) {
      //すでに#page-topにUpMoveというクラス名がついていたら
      $("#page-top").removeClass("UpMove"); //UpMoveというクラス名を除き
      $("#page-top").addClass("DownMove"); //DownMoveというクラス名を#page-topに付与
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$("#page-top a").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0, //ページトップまでスクロール
    },
    500 //ページトップスクロールの速さ。数字が大きいほど遅くなる
  );
  return false; //リンク自体の無効化
});

//=========================================================================================
//クリックしたらidまで移動（ナビ）
//=========================================================================================

$('#page-link a[href*="#"]').click(function () {
  const elmHash = $(this).attr("href"); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  const pos = $(elmHash).offset().top; //idの上部の距離を取得
  $("body,html").animate({ scrollTop: pos }, 50); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});

//=========================================================================================
//スライダー
//=========================================================================================

$(".slider").slick({
  arrows: false, //左右の矢印はなし
  autoplay: true, //自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 0, //自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
  speed: 3000, //スライドのスピード。初期値は300。
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  pauseOnHover: false, //オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnFocus: false, //フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
  cssEase: "linear", //動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
  slidesToShow: 4, //スライドを画面に4枚見せる
  slidesToScroll: 1, //1回のスライドで動かす要素数
  responsive: [
    {
      breakpoint: 769, //モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2, //スライドを画面に2枚見せる
      },
    },
    {
      breakpoint: 426, //モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1.5, //スライドを画面に1.5枚見せる
      },
    },
  ],
});

const bg = document.querySelector(".item-bg");
const items = document.querySelectorAll(".news__item");
const item = document.querySelector(".news__item");

function cLog(content) {
  console.log(content);
}

if ($(window).width() > 800) {
  $(document).on("mouseover", ".news__item", function (_event, _element) {
    const newsItem = document.querySelectorAll(".news__item");
    newsItem.forEach(function (element, index) {
      element.addEventListener("mouseover", function () {
        const x = this.getBoundingClientRect().left;
        const y = this.getBoundingClientRect().top;
        const width = this.getBoundingClientRect().width;
        const height = this.getBoundingClientRect().height;

        $(".item-bg").addClass("active");
        $(".news__item").removeClass("active");
        // $('.news__item').removeClass('active');

        bg.style.width = width + "px";
        bg.style.height = height + "px";
        bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
      });

      element.addEventListener("mouseleave", function () {
        $(".item-bg").removeClass("active");
        $(".news__item").removeClass("active");
      });
    });
  });
}

//=========================================================================================
//動作テスト用
//=========================================================================================
