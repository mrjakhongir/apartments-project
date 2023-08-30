import React from "react";
import "./purchaseSection3.scss";

export default function PurchaseSection3() {
  return (
    <section className="purchase-section3">
      <div className="purchase-section3_banner">
        <div className="wrapper">
          <h2 className="purchase-header">
          НДС и прочие налоговые сборы
          </h2>
        </div>
      </div>
      <div className="purchase-section3_description">
        <div className="wrapper">
        <div className="purchase-section3_description_body">
            <h2 className="purchase-section3_description_body_text" >НДС</h2>
            <p className="purchase-section3_description_body_desc">
                При покупке недвижимости на Кипре действует налог НДС (VAT - Value Added Tax). В случае с приобретением вторичной недвижимости сделка налогом не облагается.
                <br />
                <br />
                Согласно действующему законодательству, ставка НДС на Кипре составляет 19%. Однако, при выполнении определенных условий, предусмотрено использование льготной ставки в размере 5%.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
