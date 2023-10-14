import Footer from '../../components/footer/Footer';
import HomeFooter from '../../components/homeFooter/HomeFooter';
import { ProjectsSection1 } from './projectsSection1/ProjectsSection1';
import { ProjectsSection2 } from './projectsSection2/ProjectsSection2';

import './projects.scss';

function Projects() {
  return (
    <div>
      <ProjectsSection1 />
      <ProjectsSection2 />
      <div className='projects-footer'>
        <div className='projects-footer--desktop'>
          <Footer bgColor='#3D6CBB1A' />
        </div>
        <div className='projects-footer--mobile'>
          <HomeFooter bgColor='#3D6CBB1A' />
        </div>
      </div>
    </div>
  );
}

export default Projects;
