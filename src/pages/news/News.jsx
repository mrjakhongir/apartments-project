import React from "react";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import NewsLeft from "../../components/newsleft/NewsLeft";
import NewsRight from "../../components/newsright/NewsRight";
import NewsRight2 from "../../components/newsright/NewsRight2";
import { NewsObjects } from "../../constants/news";
import "./news.scss";

function News() {

  return (
    <div>
      <div className="news">
          <div className="wrapper">
           <h1>Новости</h1>
          </div>
      </div>
      <div className="newspaper">
          <div className="wrapper">
            <NewsRight
            title= {NewsObjects.News1.title}
            img={NewsObjects.News1.image}
            desc={NewsObjects.News1.description}
            date={NewsObjects.News1.date}
            />
            <NewsLeft
            title= {NewsObjects.News2.title}
            img={NewsObjects.News1.image}
            desc={NewsObjects.News2.description}
            desc_title={NewsObjects.News2.description_title}
            />
            <NewsRight2
            title= {NewsObjects.News2.title}
            img={NewsObjects.News1.image}
            desc={NewsObjects.News2.description}
            desc_title={NewsObjects.News2.description_title}
            />
            <NewsLeft
            title= {NewsObjects.News2.title}
            img={NewsObjects.News1.image}
            desc={NewsObjects.News2.description}
            desc_title={NewsObjects.News2.description_title}
            />
            <NewsRight2
            title= {NewsObjects.News2.title}
            img={NewsObjects.News1.image}
            desc={NewsObjects.News2.description}
            desc_title={NewsObjects.News2.description_title}
            />
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default News;
