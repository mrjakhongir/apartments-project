import "./newsright.scss"
import React from "react";
import { Link } from "react-router-dom"

function NewsRight(props) {
  return (
    <div className="newsright_card">
        <div className="newsright_card_section">
            <img className="newsright_card_img" src={props.img} alt="" />
            <div className="newsright_card_title">
                <h3 className="newsright_card_title_text">{props.title}</h3>
            </div>
        </div>
        <div className="newsright_card_section1">
            <p className="newsright_card_desc">
                {props.desc}
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

export default NewsRight;
