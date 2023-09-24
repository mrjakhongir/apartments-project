import { Link } from "react-router-dom"
import "./new.scss"

function New({ news }) {
  return (
    <div className={`news-item ${news.newsId % 2 !== 0 ? "" : "reverse"}`}>
      <div className="news-item-img">
        <img src={news.newsImage} alt="news" />
        <div className="news-subtitle">
          <h1>{news.newsSubtitle}</h1>
        </div>
      </div>
      <div className="news-item-description">
        <h1>{news.newsTitle}</h1>
        <div>
          <span>{news.newsDate}</span>
          <Link to={`/news/${news.newsId - 1}`} className="news-item-btn">
            Развернуть
          </Link>
        </div>
      </div>
    </div>
  )
}

export default New
