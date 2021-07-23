// event pada saat link diklik
$(".page-scroll").on("click", function (e) {
  //   ambil isi href
  let href = $(this).attr("href");
  //   console.log(href);
  // tangkap elemen yang bersangkutan
  let elemenHref = $(href); // sperti getElementById
  //   console.log(elemenHref.offset().top); // jarak elemen ke top window

  //   console.log($("body").scrollTop());

  //   pindahkan scroll
  //   $("body").scrollTop(elemenHref.offset().top);    // harusnya body karena tidak jalan tak ganti document
  //   $(document).scrollTop(elemenHref.offset().top);
  $("#home").animate(
    {
      // muncul eror lagi saat menggunakan document tak ganti jadi #home ditag html
      scrollTop: elemenHref.offset().top - 50,
    },
    1500, // waktu animasi
    "easeOutBounce" // efek scroll di jQuery hanya ada 2 : swing dan linear, download script : javascript easing untuk efek lain
  );

  e.preventDefault();
});

// parallax

// about appear
$(window).on("load", function () {
  $(".pKiri").addClass("pMuncul");
  $(".pKanan").addClass("pMuncul");
});

// scroll different element speed jumbotron & portfolio img appear
$(window).scroll(function () {
  let wScroll = $(this).scrollTop();
  // console.log(wScroll);
  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });
  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });
  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 1.2 + "%)",
  });

  // portfolio
  var portfolioScrollTop = $("#portfolio").offset().top - 250;
  // console.log(portfolioScrollTop);
  if (wScroll > portfolioScrollTop) {
    // console.log("oke");

    $(".portfolio .thumbnail").each(function (i) {
      // munculkan satu persatu, tangkap banyak elemen dengan each
      setTimeout(function () {
        // console.log("oke");
        $(".portfolio .thumbnail").eq(i).addClass("muncul"); // method eq() = equal to maksudnya elemen ke barapa dalam each tadi(perlu index di function(i))
      }, 200 * (i + 1)); // maksudnya index 0 waktu timeOutnya 300 * 1, index 1 waktu timeOutnya 300 * 2, jadi munculnya tidak bersamaan
    });
  }
});

// $(window).scroll(function () {
//   let wScroll = $(this).scrollTop();
//   if (wScroll > 600) {
//     $(".portfolio .thumbnail").css({
//       opacity: "1",
//     });
//   }
// });
