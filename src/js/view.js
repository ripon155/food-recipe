import icons from 'url:../img/icons.svg';
export default class View {
  data;

  render(data) {
    if (data.length == 0) {
      this.errorHandler();
      return;
    }

    this.data = data;
    let markup = this.generateMarkUp();
    this.parentElemnt.innerHTML = '';
    this.parentElemnt.insertAdjacentHTML('afterbegin', markup);
  }
  errorHandler() {
    let errorhan = '';
    errorhan = `<div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>No recipes found for your query. Please try again!</p>
  </div>`;
    this.parentElemnt.innerHTML = '';
    this.parentElemnt.insertAdjacentHTML('afterbegin', errorhan);
  }
  loadSpin() {
    const markup = `<div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;
    this.parentElemnt.innerHTML = '';
    this.parentElemnt.insertAdjacentHTML('afterbegin', markup);
  }
}
