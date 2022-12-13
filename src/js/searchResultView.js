import icons from 'url:../img/icons.svg';
import View from './view.js';
class SearchResultView extends View {
  parentElemnt = document.querySelector('.results');

  // render(data) {
  //   this.data = data;
  //   let markup = this.generateMarkup();
  //   this.parentEl.innerHTML = '';
  //   this.parentEl.insertAdjacentHTML('afterbegin', markup);
  // }

  generateMarkUp() {
    return this.data
      .map(el => {
        return `<li class="preview">
        <a class="preview__link preview__link--active" href="#${el.id}">
          <figure class="preview__fig">
            <img src="${el.image_url}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${el.title}</h4>
            <p class="preview__publisher">${el.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>`;
      })
      .join('');
  }
}

export default new SearchResultView();
