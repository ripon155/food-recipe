class SearchView {
  searchBtn = document.querySelector('.search__btn');
  addHandler(handler) {
    this.searchBtn.addEventListener('click', function (e) {
      e.preventDefault();
      handler();
    });
  }

  getQuery() {
    return document.querySelector('.search__field').value;
  }
}

export default new SearchView();
