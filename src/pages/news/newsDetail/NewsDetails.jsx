import { useParams } from "react-router-dom"
import { news } from "../../../constants/news"
import Footer from "../../../components/footer/Footer"
import NewsComponent from "../../../components/news/NewsComponent"
import "./newsDetails.scss"
import { motion } from "framer-motion"
import HomeFooter from "../../../components/homeFooter/HomeFooter"

const NewsDetails = () => {
  const { id } = useParams()
  const newsData = news
  const data = newsData[id]

  return (
    <div>
      <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className="news-details"
    > 
      <div className="news-detials-banner"></div>
        <div className="news-details-date">
          <div className="wrapper">
            <p>{data.newsDate}</p>
          </div>
      </div>
        <div className="news-details-title">
          <div className="wrapper">
            <h1>{data.newsTitle}</h1>
          </div>
        </div>
        <div className="news-details-img">
          <div className="wrapper">
            <img src={data.newsImage} alt="news" />
          </div>
        </div>
        <div className="news-details-paragraphs">
          <div className="wrapper">
            {data.newsBody.map((para, index) =>
              data.newsId === 2 &&
              (index === 1 || index === 7 || index === 13) ? (
                <h1 key={index}>{para}</h1>
              ) : (
                <p key={index} className="news-details-para">
                  {para}
                </p>
              )
            )}
          </div>
        </div>
      </motion.div>
      <NewsComponent/>
      <HomeFooter bgColor="#3D6CBB1A" />
    </div>
  )
}

export default NewsDetails
