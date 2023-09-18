import React from "react"
import "./pagination.scss"

const Pagination = ({ totalPages, setCurrentPage, currentPage }) => {
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }
  return (
    <div className="pagination">
      {pages.map((page) => (
        <button
          className={`pagination-btn ${
            currentPage === page ? "active-btn" : ""
          }`}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  )
}

export default Pagination
