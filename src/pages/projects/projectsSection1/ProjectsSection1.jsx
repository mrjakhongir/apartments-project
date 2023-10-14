import Filter from '../../../components/filter/Filter';
import './projectsSection1.scss';
export const ProjectsSection1 = () => {
  return (
    <div className='projects-section1'>
      <div className='wrapper'>
        <h1>Каталог недвижимости</h1>
        <div className='filter'>
          <Filter />
        </div>
      </div>
    </div>
  );
};
