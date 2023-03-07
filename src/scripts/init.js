const lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy__item',

  callback_loaded: (trigger) => {
    const container = trigger.closest('.lazy');
    const loader = container.querySelector('.preloader');

    if (loader) loader.classList.add('preloader--hide');
  },
});

const accordion = document.querySelectorAll('.handorgel')
accordion.forEach(item => new handorgel(item, {
  initialOpenTransition: false,
}));

const scrollController = new SmoothScroll('a[href*="#"]', scrollParams);

const forms = document.querySelectorAll('form');
forms.forEach(form => new Form(form));

