const initialState = [];

export const checkStatus = () => ({
  type: 'categories/checkStatus',
});

const categoriesReducer = (categories = initialState, action) => {
  switch (action.type) {
    case 'categories/checkStatus':
      return 'Under Construction';
    default:
      return categories;
  }
};

export default categoriesReducer;
