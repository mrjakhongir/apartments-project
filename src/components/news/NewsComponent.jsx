import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import "./newsComponent.scss"
import { news } from "../../constants/news"

function NewsComponent() {
  const newsPost = news
  let location = useLocation.pathname
    ? useLocation.pathname
    : (useLocation.pathname = "/news")

  return (
    <div className="news-component">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.3 }}
        className="wrapper"
      >
        <h1>Новости</h1>

        <div className="news-list">
          {newsPost.map((newsItem) => (
            <Link key={newsItem.newsId} to={`/news/${newsItem.newsId - 1}`}>
              <div className="news-card">
                <img src={newsItem.newsImage} alt="news" />
                <h3>{newsItem.newsTitle}</h3>
              </div>
            </Link>
          ))}
        </div>

        <Link to={`${location}`} className="btn all-news-btn">
          Смотреть все
        </Link>
      </motion.div>
    </div>
  )
}

export default NewsComponent
