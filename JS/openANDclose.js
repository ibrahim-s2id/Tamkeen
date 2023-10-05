// select open and close and chose option
$(".select-btn").click(function () {
    $(this).parent().toggleClass("active");
    var $b = $(this);
    var $c = $(this).parent();
  
    $(window).scroll(function () {
      $c.removeClass("active");
    });
    $(this).parent().find(".option").click(function () {
      $(this).parent().parent().removeClass("active");
      $(this).parent().parent().find(".sBtn-text").html($(this).find('.option-text').text());
    })
    $(document).on("click", function (event) {
      var $trigger = $b;
      if (!$(event.target).closest($trigger).length) {
        $c.removeClass("active");
  
      }
    });
  })
  
  // menu toggle
  const hamburger = document.getElementsByClassName("menu-res")[0]
  const mobileNavs = document.getElementsByClassName("wrapper-header")[0]
  
  
  hamburger.addEventListener("click", () => {
    mobileNavs.classList.toggle("active");
    $(window).scroll(function () {
      mobileNavs.classList.remove('active');
    });
    $(document).on("click", function (event) {
      var $trigger = hamburger;
      var $menu = mobileNavs;
      if (!$(event.target).closest($trigger).length && !$(event.target).closest($menu).length) {
        mobileNavs.classList.remove('active');
      }
    });
    $(".close").click(function () {
      mobileNavs.classList.remove('active');
    })
    $(".option-text").click(function () {
      mobileNavs.classList.remove('active');
    })
  });

 