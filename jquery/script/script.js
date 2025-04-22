$(document).ready(function () {
  $('a[href^="#article"]').on('click', function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    $(target).show().siblings('section').hide();
    $('html, body').animate({ scrollTop: $(target).offset().top - 70 }, 500);
  });

  $('button[onclick="history.back()"]').on('click', function () {
    $('.article-detail').hide();
    $('main > section').show();
  });

  $('#commentForm').submit(function (e) {
    e.preventDefault();
    $('#commentSuccess').fadeIn();
    $(this).trigger('reset');
    setTimeout(() => {
      $('#commentSuccess').fadeOut();
    }, 3000);
  });

  $(window).scroll(function () {
    const scrollPos = $(document).scrollTop();
    $('.nav-link').each(function () {
      const currLink = $(this);
      const refElement = $(currLink.attr('href'));
      if (
        refElement.position().top - 100 <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $('.nav-link').removeClass('active');
        currLink.addClass('active');
      } else {
        currLink.removeClass('active');
      }
    });
  });
});
