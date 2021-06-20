let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {
        duration: 4000,
        easing: "swing",
       
        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};






$(document).ready(function () {
  $('#faq-1').click(function () {
    $('#faq-1').children('div.accordion-item-body').toggleClass('make-content-visible')
    $('#faq-1').children('div.accordion-item-header').toggleClass('active')
    $("#faq-2,#faq-3,#faq-4,#faq-5,#faq-6").children('div.accordion-item-body').removeClass('make-content-visible')
    $("#faq-2,#faq-3,#faq-4,#faq-5,#faq-6").children('div.accordion-item-header').removeClass('active')
  })

  $('#faq-2').click(function () {
    $('#faq-2').children('div.accordion-item-body').toggleClass('make-content-visible')
    $('#faq-2').children('div.accordion-item-header').toggleClass('active')
    $("#faq-1,#faq-3,#faq-4,#faq-5,#faq-6").children('div.accordion-item-body').removeClass('make-content-visible')
    $("#faq-1,#faq-3,#faq-4,#faq-5,#faq-6").children('div.accordion-item-header').removeClass('active')
  })

  $('#faq-3').click(function () {
    $('#faq-3').children('div.accordion-item-body').toggleClass('make-content-visible')
    $('#faq-3').children('div.accordion-item-header').toggleClass('active')
    $("#faq-1,#faq-2,#faq-4,#faq-5,#faq-6").children('div.accordion-item-body').removeClass('make-content-visible')
    $("#faq-1,#faq-2,#faq-4,#faq-5,#faq-6").children('div.accordion-item-header').removeClass('active')
  })

  $('#faq-4').click(function () {
    $('#faq-4').children('div.accordion-item-body').toggleClass('make-content-visible')
    $('#faq-4').children('div.accordion-item-header').toggleClass('active')
    $("#faq-1,#faq-3,#faq-2,#faq-5,#faq-6").children('div.accordion-item-body').removeClass('make-content-visible')
    $("#faq-1,#faq-3,#faq-2,#faq-5,#faq-6").children('div.accordion-item-header').removeClass('active')
  })

  $('#faq-5').click(function () {
    $('#faq-5').children('div.accordion-item-body').toggleClass('make-content-visible')
    $('#faq-5').children('div.accordion-item-header').toggleClass('active')
    $("#faq-1,#faq-3,#faq-4,#faq-2,#faq-6").children('div.accordion-item-body').removeClass('make-content-visible')
    $("#faq-1,#faq-3,#faq-4,#faq-2,#faq-6").children('div.accordion-item-header').removeClass('active')
  })
  $('#faq-6').click(function () {
    $('#faq-6').children('div.accordion-item-body').toggleClass('make-content-visible')
    $('#faq-6').children('div.accordion-item-header').toggleClass('active')
    $("#faq-1,#faq-3,#faq-4,#faq-5,#faq-2").children('div.accordion-item-body').removeClass('make-content-visible')
    $("#faq-1,#faq-3,#faq-4,#faq-5,#faq-2").children('div.accordion-item-header').removeClass('active')
  })

});

$("#myCarousel").carousel({
  interval: false
});
let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function () {
  setTimeout(function () { spinnerWrapper.style.display = 'none'; }, 800);
  // spinnerWrapper.style.display = 'none';
  // spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});