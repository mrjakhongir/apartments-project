import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import './projectsSection2.scss';
import Project from './Project';
import Pagination from '../../../components/pagination/Pagination';

export const ProjectsSection2 = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { filterData } = useSelector((state) => state.filterData);
  const projectsPerPage = 3;
  let currPage = searchParams.get('page') || 1;
  const lastIndex = currPage * projectsPerPage;
  const firstIndex = lastIndex - projectsPerPage;
  const totalPages = Math.ceil(filterData.length / projectsPerPage);

  const currentPageProjects = filterData.slice(firstIndex, lastIndex);
  function goToPrevPage() {
    if (currPage !== 1) {
      setSearchParams({ page: +currPage - 1 });
    }
  }

  function goToNextPage() {
    if (currPage < totalPages) {
      setSearchParams({ page: +currPage + 1 });
    }
  }
  useEffect(() => {
    +currPage !== 1 ? window.scrollTo(0, 400) : window.scrollTo(0, 0);
  }, [currPage]);
  return (
    <section className='project-section2'>
      <div className='wrapper'>
        {currentPageProjects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
        <div className='projects-pagination-mobile'>
          <div>
            <button onClick={goToPrevPage} className='caret'>
              &lt;
            </button>
            <button onClick={goToNextPage} className='caret'>
              &gt;
            </button>
          </div>
          <div>
            <Pagination totalPages={totalPages} currPage={currPage} />
          </div>
        </div>
        <div className='projects-pagination-desktop'>
          <button onClick={goToPrevPage} className='caret'>
            &lt;
          </button>
          <Pagination totalPages={totalPages} currPage={currPage} />
          <button onClick={goToNextPage} className='caret'>
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};
