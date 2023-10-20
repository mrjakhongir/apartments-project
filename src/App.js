import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import About from './pages/about/About';
import Home from './pages/home/Home';
import News from './pages/news/News';
import NewsDetails from './pages/news/newsDetail/NewsDetails';
import ProjectDetails from './pages/projects/projectDetails/ProjectDetails';

import Purchase from './pages/purchase/Purchase';

import Projects from './pages/projects/Projects';

import { svgs } from './constants/images';
import { useEffect, useState } from 'react';

function App() {
  function goUp() {
    window.scrollTo(0, 0);
  }

  const [arrowUp, setArrowUp] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setArrowUp(true);
      } else {
        setArrowUp(false);
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='news' element={<News />} />
          <Route path='news/:id' element={<NewsDetails />} />
          <Route path='projects' element={<Projects />} />
          <Route path='projects/:id' element={<ProjectDetails />} />
          <Route path='purchase' element={<Purchase />} />
        </Route>
      </Routes>
      {arrowUp && (
        <button onClick={goUp} className='arrow-up'>
          <img src={svgs.arrow} alt='arrow up' />
        </button>
      )}
    </div>
  );
}

export default App;
