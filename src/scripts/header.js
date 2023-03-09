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
                СКРИПТ БОКОВОГО МЕНЮ
  --------------------------------------------------------
  */

  const headerBurger = header.querySelector('.hamburger');;
  const sideMenu = document.getElementById('side-menu');

  headerBurger.addEventListener('click', () => {
    Menu('side', 'toggle')
    overlay.classList.toggle(StyleСlass.body.overlay)
  });

  overlay.addEventListener('click',
    (e) => {
      if (!sideMenu.parentNode.contains(e.target)) {
        Menu('side', 'close')
      }
    });

  // Скрытие их при скролле
  window.addEventListener('scroll',
    () => {
      Menu('side', 'close')
      overlay.classList.remove(StyleСlass.body.overlay)
    });

  /*
  --------------------------------------------------------
                СКРИПТ МОБИЛЬНОГО МЕНЮ
  --------------------------------------------------------
  */

  // const headerMobile = header.querySelector('.hamburger');
  // const mobileMenu = document.getElementById('mobile-menu');
  // if (mobileMenu) {
  //   const mobileMenuOverlay = mobileMenu.querySelector('.mobile-menu__overlay');
  //   const button = mobileMenu.querySelector('.mobile-menu__button');

  //   mobileMenuOverlay.addEventListener('click', () => Menu('mobile', 'toggle'));
  //   button.addEventListener('click', () => Menu('mobile', 'toggle'));
  //   headerMobile.parentNode.addEventListener('click', () => Menu('mobile', 'toggle'));
  // }



  /*
  --------------------------------------------------------
                ОБРАБОТЧИК МЕНЮ
  --------------------------------------------------------
  */

  function Menu(menu, state) {
    if (state === 'open') {
      headerBurger.classList.add('is-active')

      if (menu === 'side') sideMenu.classList.add(StyleСlass.side.open);
      else if (menu === 'mobile') mobileMenu.classList.add(StyleСlass.mobile.open);
    }

    else if (state === 'close') {
      headerBurger.classList.remove('is-active')

      sideMenu.classList.remove(StyleСlass.side.open);
      mobileMenu.classList.remove(StyleСlass.mobile.open);
    }

    else if (state === 'toggle') {
      headerBurger.classList.toggle('is-active')

      if (menu === 'side') sideMenu.classList.toggle(StyleСlass.side.open);
      else if (menu === 'mobile') mobileMenu.classList.toggle(StyleСlass.mobile.open);
    }
  }
}