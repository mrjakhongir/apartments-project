import { Link, useLocation } from "react-router-dom"
import "./newsComponent.scss"
import allProjectsData from "../../assets/data.json"

function NewsComponent() {
  const news = allProjectsData.news
  let location = useLocation.pathname
    ? useLocation.pathname
    : (useLocation.pathname = "/news")

  return (
    <div className="news-component">
      <div className="wrapper">
        <h1>Новости</h1>
        <div className="news-list">
          {news.map((newsItem) => (
            <div key={newsItem.newsId} className="news-card">
              <img src={newsItem.newsImage} alt="news" />
              <h3>{newsItem.newsTitle}</h3>
            </div>
          ))}
        </div>
        <Link to={`${location}`} className="btn">
          Смотреть все
        </Link>
      </div>
    </div>
  )
}

export default NewsComponent
