import HomeFooter from "../../components/homeFooter/HomeFooter"
import HomeSection1 from "./homeSection1/HomeSection1"
import HomeSection2 from "./homeSection2/HomeSection2"
import HomeSection3 from "./homeSection3/HomeSection3"
import { HomeSection4 } from "./homeSection4/HomeSection4"
import { HomeSection5 } from "./homeSection5/HomeSection5"
import { HomeSection6 } from "./homeSection6/HomeSection6"
import { HomeSection7 } from "./homeSection7/HomeSection7"
import { HomeSection8 } from "./homeSection8/HomeSection8"
import NewsComponent from "../../components/news/NewsComponent"

function Home() {
  return (
    <div>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
      <HomeSection7 />
      <NewsComponent />
      <HomeSection8 />
      <HomeFooter />
    </div>
  )
}

export default Home
