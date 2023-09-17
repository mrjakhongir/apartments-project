import "./newsright.scss"
import React from "react";
import { Link } from "react-router-dom"

function NewsRight2(props) {
  return (
    <div className="newsright_card newsright_card2">
        <div className="newsright_card_section">
            <img className="newsright_card_img" src={props.img} alt="" />
            <div className="newsright_card_title">
                <h3 className="newsright_card_title_text">{props.title}</h3>
            </div>
        </div>
        <div className="newsright_card_section1">
            <h3 className="newsright_card_desc1_title">
                {props.desc_title}
            </h3>
            <p className="newsright_card_desc1">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста. <br />
            <br /> При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
            </p>
            <div className="newsright_card_btn">
                <h6>{props.date}</h6>
                <Link to={`/news/${props.id}`}>
                    <button className="newsright_card_button">Развернуть</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NewsRight2;
