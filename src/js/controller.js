import icons from 'url:../img/icons.svg';
import * as model from './model';
import RecipeView from './recipeView';
import SearchResultView from './searchResultView';
import SearchView from './searchView';
import BookMarkView from './bookMarkView.js';
import { Fraction } from 'fractional';
const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async () => {
  try {
    let id = window.location.hash;
    id = id.slice(1);
    console.log(id);
    if (!id) return;
    RecipeView.loadSpin();
    await model.loadRecipe(id);
    RecipeView.render(model.state.recipes);
  } catch (error) {
    RecipeView.errorHandler();
  }
};

const controllSearchRecipe = async () => {
  try {
    SearchResultView.loadSpin();
    let query = SearchView.getQuery();
    await model.loadSearchResult(query);
    // SearchResultView.render(model.state.search.result);
    SearchResultView.render(model.pagination(1));
    console.log(model.state.search.totalPage);
  } catch (error) {
    alert(error);
  }
};

const controllServing = newSErving => {
  model.updateServing(newSErving);
  RecipeView.render(model.state.recipes);
};

const controllBookMark = () => {
  model.addBookMarl(model.state.recipes);
  BookMarkView.render(model.state.bookmark);
};

const init = () => {
  RecipeView.addHandler(showRecipe);
  RecipeView.updateServing(controllServing);
  SearchView.addHandler(controllSearchRecipe);
  RecipeView.addBookMarkHandller(controllBookMark);
};
init();

//pagination
let page = 1;
const nextBtn = document.querySelector('.pagination__btn--next');
const preBtn = document.querySelector('.pagination__btn--prev');
preBtn.addEventListener('click', function () {
  if (page == 1) return;
  page = page - 1;
  SearchResultView.render(model.pagination(page));
});
nextBtn.addEventListener('click', function () {
  if (page >= model.state.search.totalPage) return;
  page = page + 1;
  SearchResultView.render(model.pagination(page));
});

// window.addEventListener('load', showRecipe);
window.addEventListener('hashchange', showRecipe);
