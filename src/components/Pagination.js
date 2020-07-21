import React from 'react';

const Pagination = ({ totalPosts, postsPerPage,goToPage }) => {

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(totalPosts)
  
  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((page) => (
            <li key={page} className="page-item">
              <a onClick={()=>goToPage(page)} className="page-link" href="#">
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Pagination;
