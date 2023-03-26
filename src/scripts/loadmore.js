
const ajaxButton = document.querySelectorAll('[data-handler=ajax]');

ajaxButton.forEach(button => {
  button.addEventListener('click', () => {
    const defaultText = button.innerHTML;

    const wrapper = button.closest('[data-parent]').querySelector('[data-container]');
    const target = button.dataset.target;
    const page = button.dataset.paged;
    const count = button.dataset.count;
    const maxpage = button.dataset.maxPages;
    const path = button.dataset.path;

    const data = new FormData();

    data.append('action', 'more_post_ajax');
    data.append('target', target);
    data.append('count', count);
    data.append('page', page);
    data.append('path', path);

    AJAX();

    async function AJAX() {
      try {
        button.setAttribute('disabled', 'disabled');
        button.innerHTML = "Загружается...";

        let response = await fetch(backend.ajaxurl, {
          method: 'POST',
          body: data,
        });

        if (response.ok) {
          button.dataset.paged++;

          if (button.dataset.paged != maxpage) {
            button.removeAttribute('disabled');
            button.innerHTML = defaultText;
          }

          else {
            button.innerHTML = "Больше ничего нет";
            button.style.display = 'none';
          }
        }

        let result = await response.text();

        if (wrapper.dataset.container !== '') {
          const div = document.createElement('div');
          const classArray = wrapper.dataset.container.split(' ');
          classArray.forEach(item => div.classList.add(item));

          div.insertAdjacentHTML('beforeend', result);
          wrapper.appendChild(div);
        }

        else {
          wrapper.insertAdjacentHTML('beforeend', result);
        }

        if (result.includes('.handorgel')) {
          const blocks = document.querySelectorAll(".handorgel")
          blocks.forEach(block => new handorgel(block));
        }

        lazyLoadInstance.update();

        console.log(result);
      }

      // Логируем ошибку, если возникла
      catch (error) {
        console.error('Ошибка - ' + error);
      }
    }
  });
});


