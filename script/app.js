$('.customer-list').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    prevArrow: `<button type='button' class='slick-prev pull-left'><img src="./images/Icon/Button/eva_arrow-next-fill.svg" /></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><img src="./images/Icon/Button/eva_arrow-back-fill.svg" alt=""></button>`,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
          }
        },
        {
            breakpoint: 970,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
            }
          },
    ]
});

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');
const activeClass = 'is-show';


toggle.addEventListener('click', function () {
  menu.classList.add(activeClass);
})
console.log(menuItems)
menuItems.forEach((item) => {
  item.addEventListener('click', function () {
    menu.classList.remove(activeClass);
  })
})

window.addEventListener('click', function (e) {
  if(!menu.contains(e.target) && !e.target.matches('.menu-toggle')) {
    menu.classList.remove(activeClass);
  }
})

const scroll123 = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    scroll123.classList.add('active')
  } else {
    scroll123.classList.remove('active')
  }
})