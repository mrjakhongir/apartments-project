import "./anynews.scss"
import React from "react";
import { Link } from "react-router-dom"
import { pngs } from "../../constants/images";

function AnyNews() {
  return (
    <div className="any_news">
        <div className="any_news_cards">
            <div className="any_news_card">
                <img className="any_news_card_img" src= {pngs.anyPhoto1} alt="" />
                <p className="any_news_card_desc"> 
                    Знак является, согласно
                    Еврокомиссии, «комбинацией
                    греческого эпсилона как
                    показателя значимости
                    европейской цивилизации
                </p>
            </div>
            <div className="any_news_card">
                <img className="any_news_card_img" src= {pngs.anyPhoto2} alt="" />
                <p className="any_news_card_desc"> 
                    Как узнать версии пакетов у
                    Ubuntu в официальном релизе на
                    определённую дату?
                </p>
            </div>
            <div className="any_news_card">
                <img className="any_news_card_img" src= {pngs.anyPhoto3} alt="" />
                <p className="any_news_card_desc"> 
                    Есть ли в природе электронный
                    замок с функцией временного
                    отключения открытия
                    физическим ключом? 
                </p>
            </div>
        </div>
        <Link to={`/news`}>
                <button className="any_news_card_button">Смотреть все</button>
        </Link>
    </div>
  )
}

export default AnyNews;
