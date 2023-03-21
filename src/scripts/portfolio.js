const portfolio = document.getElementById('portfolio-block');
if (portfolio) {
  let tabName = [];
  const sliderContainers = portfolio.querySelectorAll('[data-title]');

  const category = new Swiper(portfolio.querySelector('.slider-portfolio'), {
    simulateTouch: false,
    allowTouchMove: false,
    autoHeight: true,

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    a11y: {
      enabled: false,
    },

    pagination: {
      el: '.slider-portfolio .swiper-pagination',
      clickable: true,

      renderBullet(index, className) {
        return `<span class="${className}">${tabName[index]}</span>`;
      },
    },

    on: {
      afterInit(instance) {
        tabName = instance.slides.map(slide => slide.dataset.title);

        instance.pagination.render();
        instance.pagination.update();
      },
    },
  });


  if (isLaptop) {
    sliderContainers.forEach(container => {
      const content = container.querySelector('.portfolio-block-content');
      const thumb = container.querySelector('.portfolio-block-thumb');

      const thumbSlider = new Swiper(thumb, {
        allowTouchMove: false,
        nested: true,
        speed: 500,
        a11y: {
          enabled: false,
        },

        spaceBetween: 10,
        slidesPerView: 'auto',

        slideToClickedSlide: true,
        centeredSlides: true,
        centeredSlidesBounds: true,

        breakpoints: {
          1200: {
            spaceBetween: 20,
          }
        }
      });

      const contentSlider = new Swiper(content, {
        allowTouchMove: false,
        nested: true,
        speed: 500,
        a11y: {
          enabled: false,
        },

        simulateTouch: false,
        spaceBetween: 30,

        navigation: {
          nextEl: content.querySelector('.swiper-button-next'),
          prevEl: content.querySelector('.swiper-button-prev'),
        },

        thumbs: {
          swiper: thumbSlider,
          autoScrollOffset: 1,
        },
      });
    });
  }
}