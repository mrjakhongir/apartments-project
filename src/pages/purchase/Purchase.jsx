import React from "react";
import "./purchase.scss";
import PurchaseFooter from "./purchaseFooter/PurchaseFooter";
import PurchaseSection1 from "./purchaseSection1/PuchaseSection1";
import PurchaseSection2 from "./purchaseSection2/PurchaseSection2";
import PurchaseSection3 from "./purchaseSection3/PurchaseSection3";
import PurchaseSection4 from "./purchaseSection4/PurchaseSection4";

function Purchase() {
  return (
    <div className="purchase_bg">
      <PurchaseSection1/>
      <PurchaseSection2/>
      <PurchaseSection3/>
      <PurchaseSection4/>
      <PurchaseFooter/>
    </div>
  )
}

export default Purchase;
