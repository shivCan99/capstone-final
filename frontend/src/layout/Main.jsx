import React from "react"
import "../styles/Main.css"
import Nav from "../components/Nav/Nav"
import Banner from "../components/Banner/Banner"
import Video from "../components/VideoSection/Video"
import Footer from "../components/Footer/Footer"

const Main = () => {

  return (
    <div>
      <div className="homeScreen">
        <Nav />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Video />
      </div>
      <div>
        <Footer />
      </div>
    </div>

  )
}

export default Main
