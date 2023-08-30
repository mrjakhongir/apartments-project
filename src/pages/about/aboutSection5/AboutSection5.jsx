import React from "react";
import "./about-section5.scss";
import { svgs } from "../../../constants/images";

export default function AboutSection5() {
  return (
    <section className="about-section5">
      <div className="about-section5_banner">
        <div className="wrapper">
          <h2 className="about-header">Климат Кипра</h2>
        </div>
      </div>
      <div className="about-section5_description">
        <div className="wrapper">
          <p>
            Кипр имеет средиземноморский климат с жарким и сухим летом и теплой
            и влажной зимой. Средняя годовая температура составляет около +19°C.
            Летний сезон длится с мая по октябрь, самая жара наблюдается в июле,
            августе и первой половине сентября.
          </p>
        </div>
      </div>
      <div className="about-section5_illustration">
        <div className="wrapper">
          <div>
            <img src={svgs.balanceIcon} alt="" />
            <p>
              Классический средиземноморский климат с мягкой влажной зимой и
              сухим жарким летом
            </p>
          </div>
          <div>
            <img src={svgs.sunIcon} alt="" />
            <p>
              Длительное лето: летний сезон на острове длится почти 8 месяцев
            </p>
          </div>
          <div>
            <img src={svgs.skidivingIcon} alt="" />
            <p>
              Снежные вершины: зимой горные массивы Кипра покрываются снегом,
              предоставляя возможности для зимних видов спорта
            </p>
          </div>
          <div>
            <img src={svgs.rainIcon} alt="" />
            <p>
              Осадки: большинство осадков выпадает в период с декабря по февраль
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
