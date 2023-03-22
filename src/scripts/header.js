'use strict';

const header = document.getElementById('header');

if (header) {
  let headerHeight = 0;

  const SetHeight = (target) => {
    headerHeight = target.offsetHeight;
    document.documentElement.style.setProperty('--header-height', headerHeight + 'px');
  }

  SetHeight(header);

  window.addEventListener('resize', () => SetHeight(header));

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const position = window.pageYOffset;

    if (position > lastScroll) header.classList.add(StyleСlass.header.hidden);
    else header.classList.remove(StyleСlass.header.hidden);

    lastScroll = position;
  });

  /*
  --------------------------------------------------------
              СКРИПТ ВЫПАДАЮЩИХ СПИСКОВ
  --------------------------------------------------------
  */

  const headerDropdown = header.querySelectorAll('.dropdown__header > .dropdown__link');

  headerDropdown.forEach(dropdown => {
    // Открытие дропдаунов и закрытие при клике не по ним
    dropdown.addEventListener('click', () => {
      dropdown.closest('.dropdown').classList.toggle(StyleСlass.header.dropdown.open)
      overlay.classList.toggle(StyleСlass.body.overlay)
    });

    // Скрытие при клике в любом месте
    overlay.addEventListener('click',
      (e) => {
        if (!dropdown.parentNode.contains(e.target)) {
          dropdown.closest('.dropdown').classList.remove(StyleСlass.header.dropdown.open);
          overlay.classList.remove(StyleСlass.body.overlay)
        }
      });

    // Скрытие их при скролле
    window.addEventListener('scroll',
      () => {
        dropdown.closest('.dropdown').classList.remove(StyleСlass.header.dropdown.open);
        overlay.classList.remove(StyleСlass.body.overlay)
      });
  })



  /*
  --------------------------------------------------------
                СКРИПТ МОБИЛЬНОГО МЕНЮ
  --------------------------------------------------------
  */

  const headerBurger = header.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileDropdownButton = mobileMenu.querySelector('.nav__item--dropdown')
  const mobileDropdown = mobileMenu.querySelector('.mobile-menu__dropdown')

  if (mobileMenu) {
    headerBurger.addEventListener('click', () => {
      Menu('mobile', 'toggle')

      mobileDropdownButton.classList.remove('open');
      mobileDropdown.classList.remove('mobile-menu__dropdown--open');
    });

    mobileDropdownButton.addEventListener('click', () => {
      mobileDropdownButton.classList.toggle('open');
      mobileDropdown.classList.toggle('mobile-menu__dropdown--open');
    });

    overlay.addEventListener('click',
      (e) => {
        if (!mobileMenu.parentNode.contains(e.target)) Menu('mobile', 'close')
      });
  }


  /*
  --------------------------------------------------------
                ОБРАБОТЧИК МЕНЮ
  --------------------------------------------------------
  */

  function Menu(menu, state) {
    document.body.classList.add(StyleСlass.body.overflow)

    if (state === 'open') {
      headerBurger.classList.add('is-active')
      overlay.classList.add(StyleСlass.body.overlay)

      if (menu === 'mobile') mobileMenu.classList.add(StyleСlass.mobile.open);
    }

    else if (state === 'close') {
      headerBurger.classList.remove('is-active')
      overlay.classList.remove(StyleСlass.body.overlay)
      document.body.classList.remove(StyleСlass.body.overflow)

      mobileMenu.classList.remove(StyleСlass.mobile.open);
    }

    else if (state === 'toggle') {
      headerBurger.classList.toggle('is-active')
      overlay.classList.toggle(StyleСlass.body.overlay)

      if (menu === 'mobile') mobileMenu.classList.toggle(StyleСlass.mobile.open);
    }
  }
}