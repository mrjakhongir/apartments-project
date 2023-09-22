import React, { useState } from "react"
import "./supheader.scss"
import { svgs } from "../../constants/images"

function Supheader() {
  const [currentLang, setCurrentLang] = useState("RU")

  return (
    <div className="supheader">
      <div className="wrapper">
        <div className="supheader__inner flex">
          <div className="supheader__contacts flex">
            <a href="mailto: reiwa@gmail.com">reiwa@gmail.com</a>
            <a href="tel: +998900398868">+998 90 039 8868</a>
          </div>
          <div className="supheader__right-col flex">
            <div className="supheader__social-medias flex">
              <a href="#instagram">
                <img src={svgs.instagramIcon} alt="instagram" />
              </a>
              <a href="#telegram">
                <img src={svgs.telegramIconOutlined} alt="telegram" />
              </a>
              <a href="#facebook">
                <img src={svgs.facebookIcon} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Supheader
