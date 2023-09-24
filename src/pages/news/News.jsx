import Footer from "../../components/footer/Footer"
import allProjectData from "../../assets/data.json"
import New from "./new/New.jsx"

import "./news.scss"
const newsData = allProjectData.news
function News() {
  return (
    <div className="news">
      <div className="news-banner">
        <div className="wrapper">
          <h1>Новости</h1>
        </div>
      </div>
      <div className="newspaper">
        <div className="wrapper">
          {newsData.map((item, index) => (
            <New key={item.newsId} news={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default News
