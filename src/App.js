import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import About from "./pages/about/About"
import Home from "./pages/home/Home"
import News from "./pages/news/News"
import NewsDetails from "./pages/news/newsDetail/NewsDetails"
import ProjectDetails from "./pages/projects/projectDetails/ProjectDetails"
import Projects from "./pages/projects/Projects"

import Purchase from "./pages/purchase/Purchase"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="news/:id" element={<NewsDetails />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="purchase" element={<Purchase />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
