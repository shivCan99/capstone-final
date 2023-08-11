import React, { useState } from "react"
import { Link } from "react-router-dom";
import "./Banner.css"
import image1 from "../../assets/playButton.png";
import image2 from "../../assets/play.png";
import Home from "../../layout/Home";

const Banner = () => {

  return (
    
          <div className="home">
              <div className="homeContainer">
                  <div className='box'>
                      {/* <div className='coverImage'> */}
                      {/* <img src={cover} alt='' /> */}
                      {/* </div> */}
                      <div className='content flex'>
                          <div className='details row'>
                              <h1>Slake TV</h1>
                              <h3>The Future of Entertainment</h3>
                              <h3>Powered by Neural Networks and Automation</h3>
                              <button className='primary-btn play'>
                                  <i className='fas fa-play'></i> PLAY NOW
                              </button>
                          </div>
                          <div className='palyButton row'>
                                <Link to="/">
                                    <button>
                                        <div className='img'>
                                            <img src={image1} alt='' />
                                            <img src={image2} className='change' />
                                        </div>
                                        SUBSCRIBE NOW
                                    </button>
                                </Link> 
                          </div>
                      </div>
                  </div>
              </div>
          </div>

    
  )
}

export default Banner
