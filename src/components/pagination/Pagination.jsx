import { useSearchParams } from 'react-router-dom';
import './pagination.scss';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  const [searchParams, setSearchParams] = useSearchParams();
  function handleButtonClick(page) {
    setSearchParams({ page: page });
    setCurrentPage(page);
  }
  return (
    <div className='pagination'>
      {pages.map((page) => (
        <button
          className={`pagination-btn ${
            currentPage === page ? 'active-btn' : ''
          }`}
          key={page}
          onClick={() => handleButtonClick(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
