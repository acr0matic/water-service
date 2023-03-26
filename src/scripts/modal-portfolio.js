const modalPortfolio = document.getElementById('modal-portfolio');
if (modalPortfolio) {
  const title = modalPortfolio.querySelector('.modal-portfolio__content h3');
  const list = modalPortfolio.querySelector('.modal-portfolio__content .list');
  const text = modalPortfolio.querySelector('.modal-portfolio__content p');
  const gallery = modalPortfolio.querySelectorAll('.modal-portfolio__gallery .swiper-slide');

  const cards = document.querySelectorAll('.card-portfolio, .portfolio-block__content')

  cards.forEach(card => {
    const cardTitle = card.querySelector('h3').textContent;
    const cardList = card.querySelector('.content ul').innerHTML;
    const cardText = card.querySelector('.content p').innerHTML;
    const cardGallery = card.querySelectorAll('.content .gallery a');

    card.addEventListener('click', () => {
      title.innerHTML = cardTitle;
      list.innerHTML = cardList;
      text.innerHTML = cardText;

      gallery.forEach((item, index) => {
        const image = item.querySelector('.image');
        const link = item.querySelector('a');

        if (cardGallery[index]) {
          const href = cardGallery[index].href;

          image.dataset.src = href;
          link.href = href;

          item.style.removeProperty('display')
          LazyLoad.resetStatus(image)
          lazyLoadInstance.update();
          refreshFsLightbox();
        }

        else {
          item.style.display = 'none'
        }
      });

      if (card.classList.contains('portfolio-block__content') && isTablet)
        MicroModal.show('modal-portfolio', modalParams)
    });
  });
}