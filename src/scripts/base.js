const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const isMobile = window.matchMedia('(max-width: 576px)').matches;
const isTablet = window.matchMedia('(max-width: 991px)').matches;
const isLaptop = window.matchMedia('(min-width: 991px)').matches;

const scrollParams = {
  speed: 500,
  speedAsDuration: true,
  offset: 45,
  updateURL: false,
}

const StyleСlass = {
  'header': {
    'inverted': 'header-inverted',
    'hidden': 'header-hide',
    'dropdown': {
      'open': 'dropdown--open',
    },
  },

  'side': {
    'open': 'side-menu--open',
    'burger': 'hamburger-custom--hover',
  },

  'mobile': {
    'open': 'mobile-menu--open',
  },

  'body': {
    'overlay': 'overlay--show',
    'overflow': 'disable-scroll',
  },
}


const overlay = document.querySelector('.overlay');