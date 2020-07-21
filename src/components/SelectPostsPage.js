import React from 'react';

const SelectPostsPage = ({setPostsPerPage}) => {
  //posts of pages

  const handelChange = (e) => {
    setPostsPerPage(e.target.value);
  };
  return (
    <select className="custom-select" onChange={handelChange}>
      <option value="5" selected>
        5
      </option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
    </select>
  );
};
export default SelectPostsPage;
