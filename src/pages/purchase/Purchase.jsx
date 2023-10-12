import React from "react"
// import Footer from "../../components/footer/Footer"
import HomeFooter from "../../components/homeFooter/HomeFooter"
import "./purchase.scss"
import PurchaseSection1 from "./purchaseSection1/PuchaseSection1"
import PurchaseSection2 from "./purchaseSection2/PurchaseSection2"
import PurchaseSection3 from "./purchaseSection3/PurchaseSection3"
import PurchaseSection4 from "./purchaseSection4/PurchaseSection4"

function Purchase() {
  return (
    <div className="purchase_bg">
      <PurchaseSection1 />
      <PurchaseSection2 />
      <PurchaseSection3 />
      <PurchaseSection4 />
      <HomeFooter bgColor="#3D6CBB1A" />
    </div>
  )
}

export default Purchase
