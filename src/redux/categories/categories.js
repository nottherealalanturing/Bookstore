const initialState = [];
const CHECK_STATUS = 'categories/checkStatus';

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categoriesReducer = (categories = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return categories;
  }
};

export default categoriesReducer;
