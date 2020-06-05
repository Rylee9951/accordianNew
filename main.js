$(document).ready(function() {
  $(".head").on("click", function(e) {
    if (
      !$(this)
        .find("+ .content")
        .hasClass("show")
    ) {
      $(".content").removeClass("show")
      $(".head").removeClass("active")
      $(this).addClass("active")
      $(this)
        .find("+ .content")
        .addClass("show")
    } else {
      $(".content").removeClass("show")
      $(".head").removeClass("active")
    }
  })
})

// $(document).ready(function() {
//   $(".head").on("click", function(e) {
//     if (
//       $(this)
//         .siblings(".content")
//         .is(":hidden")
//     ) {
//       $(".content").slideUp(800)
//       $(this)
//         .find("+ .content")
//         .slideDown(800)
//     } else {
//       $(".content").slideUp(800)
//     }
//   })
// })
