import "./newsleft.scss"
import React from "react";
import { Link } from "react-router-dom"

function NewsLeft(props) {
  return (
    <div className="newsleft_card">
        <div className="newsleft_card_section1">
            <h3 className="newsleft_card_desc_title">
                {props.desc_title}
            </h3>
            <p className="newsleft_card_desc">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста. <br />
            <br /> При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
            </p>
            <div className="newsleft_card_btn">
                <h6>{props.date}</h6>
                <Link to={`/news/${props.id}`}>
                    <button className="newsleft_card_button">Развернуть</button>
                </Link>
            </div>
        </div>
        <div className="newsleft_card_section">
            <img className="newsleft_card_img" src={props.img} alt="" />
            <div className="newsleft_card_title">
                <h3 className="newsleft_card_title_text">{props.title}</h3>
            </div>
        </div>
    </div>
  )
}

export default NewsLeft;
