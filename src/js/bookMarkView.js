import icons from 'url:../img/icons.svg';
import View from './view.js';
class BookMarkView extends View {
  bookMarklist = document.querySelector('.bookmarks__list');
  bookmark;

  render(data) {
    this.bookmark = data;
    const markup = this.generateMarkup();
    this.bookMarklist.innerHTML = '';
    this.bookMarklist.insertAdjacentHTML('afterbegin', markup);
  }

  generateMarkup() {
    return this.bookmark
      .map(item => {
        return `<li class="preview">
        <a class="preview__link" href="#${item.id}">
          <figure class="preview__fig">
            <img src="${item.image_url}" alt="${item.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__name">
            ${item.title}
            </h4>
            <p class="preview__publisher">${item.publisher}</p>
          </div>
        </a>
      </li>`;
      })
      .join('');
  }
}

export default new BookMarkView();
