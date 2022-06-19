import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCategory = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <ul>
        {categories.map((category) => (
          <p key={category}>{category}</p>
        ))}
      </ul>
      <button className="UpdateData" type="button" onClick={() => handleCategory()}>
        Check Status
      </button>
    </div>
  );
};

export default Category;
