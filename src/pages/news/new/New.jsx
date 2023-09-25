import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import "./new.scss"

function New({ news }) {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.3 }}
      className={`news-item ${news.newsId % 2 !== 0 ? "" : "reverse"}`}
    >
      <div className="news-item-img">
        <img src={news.newsImage} alt="news" />
        <div className="news-subtitle">
          <h1>{news.newsSubtitle}</h1>
        </div>
      </div>
      <div
        className={`news-item-description ${
          news.newsId % 2 !== 0 ? "" : "index"
        }`}
      >
        <h1>{news.newsTitle}</h1>
        <div>
          <span>{news.newsDate}</span>
          <Link to={`/news/${news.newsId - 1}`} className="news-item-btn">
            Развернуть
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default New
