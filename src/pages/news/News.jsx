import Footer from "../../components/footer/Footer"
import New from "./new/New.jsx"

import "./news.scss"
import { news } from "../../constants/news"
import HomeFooter from "../../components/homeFooter/HomeFooter"


const newsData = news
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
          {newsData.map((item) => (
            <New key={item.newsId} news={item} />
          ))}
        </div>
      </div>
      <HomeFooter />
    </div>
  )
}

export default News
