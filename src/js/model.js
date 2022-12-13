export const state = {
  recipes: {},
  bookmark: [],
  search: {
    result: [],
    totalPage: '',
  },
};

export const loadRecipe = async id => {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await res.json();
    const { recipe } = data.data;
    console.log(recipe);
    state.recipes = {
      id: recipe.id,
      image_url: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      source_url: recipe.source_url,
      title: recipe.title,
      cooking_time: recipe.cooking_time,
    };
  } catch (error) {
    alert(error);
  }
};

export const loadSearchResult = async query => {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
    );
    const data = await res.json();
    console.log(data.data);
    state.search.result = data.data.recipes.map(item => {
      return {
        id: item.id,
        image_url: item.image_url,
        title: item.title,
        publisher: item.publisher,
      };
    });
    state.search.totalPage = Math.ceil(state.search.result.length / 12);
  } catch (error) {
    alert(error);
  }
};

export const pagination = page => {
  const start = (page - 1) * 12;
  const end = page * 12;
  return state.search.result.slice(start, end);
};

export const updateServing = newServing => {
  state.recipes.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServing) / state.recipes.servings;
  });
  console.log(state.recipes.ingredients);
  state.recipes.servings = newServing;
};

export const addBookMarl = recipe => {
  state.bookmark.push(recipe);
  // console.log(state.bookmark);
  alert('BookMark Added Successfully');
};
