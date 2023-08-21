import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import NewsDetail from "./pages/news/NewsDetail";
import Projects from "./pages/projects/Projects";
import ProjectsDetail from "./pages/projects/ProjectsDetail";
import Purchase from "./pages/purchase/Purchase";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="news/:id" element={<NewsDetail />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectsDetail />} />
          <Route path="purchase" element={<Purchase />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
