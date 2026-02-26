import React, { useEffect, useState } from 'react'
import logo2 from '../assets/img1.png'
import hrline from '../assets/hrline.png'
import dash from '../assets/dash.png'
import axios from 'axios'

function Home() {
  let [hero, setHero] = useState('')

  async function getHero() {
    let res = await axios.get("https://vishwasatra-backend.onrender.com/api/getherosection")
    setHero(res.data.herosection[0])
    // console.log(res.data.herosection); 
  }
  useEffect(()=>{
    getHero()
  },[])

  // console.log(hero);
  
  return (
    <>
      <section className="hero-section mb-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6 mt-2">
              <center>
                <h2 className="hero-title">
                <span   style={{color:'#916d3f'}}>THINKING</span> <br />
                OF A <span className="highlight">FANTASTIC VICINITY?</span>
              </h2>

              <p className="sub-text mt-3">
               <span>20+ PODIUM LUXURIUS AMENITIS</span>
               <span>SPECIUS BALCONY HOME*</span>
              </p>
              </center>

<div className="image-wrapper mt-4">
  <img
    src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg"
    alt="Property"
    className="property-img"
  />
</div>

            </div>

            <div className="col-md-6 text-center">

              <div className="">
                <img
                  src={logo2}
                  width="70%"
                  alt="logo"
                />
              </div>

              <img src={hrline} width="100%" alt="" />

              <div className="row mt-4 text-start">

                <div className="col-md-6">                  
                  <div className="price-title">{hero?.onebhk?.name}</div>
                  <p className='fw-bold text-decoration-line-through'>@ {hero?.onebhk?.oldprice}</p>
                  <div className="price">₹ {hero?.onebhk?.newprice}</div>
                  <div className='d-flex'>
                    <img src={dash} className='pt-1' width='50%' height="20px" alt="" />
                    <p className='fw-bold'>onwards</p>
                    <img src={dash} className='pt-1' width='50%' height="20px" alt="" />
                  </div>
                </div>

                <div className="col-md-6 price-box">
                  <div className="price-title">{hero?.twobhk?.name}</div>
                  <p className="fw-bold text-decoration-line-through ">@ {hero?.twobhk?.oldprice}</p>
                  <div className="price">₹ {hero?.twobhk?.newprice}</div>
                   <div className='d-flex'>
                    <img src={dash} className='pt-1' width='50%' height="20px" alt="" />
                    <p className='fw-bold'>onwards</p>
                    <img src={dash} className='pt-1' width='50%' height="20px" alt="" />
                  </div>
                </div>

                <img className='pt-2' src={hrline} width="100%" alt="" />

              </div>

              <div className="location mt-4 d-flex justify-content-center align-items-center">
                <img className='pb-2 me-2' src="https://cdn-icons-png.flaticon.com/512/684/684908.png" width="8%" height="5%" alt="" />
                <p className='fw-bold'>{hero.address}</p>
              </div>

            </div>
          </div>
        </div>

                  {/* <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 65 1440 320">
            <path fill="#0099ff" fill-opacity="1" d="M0,128L80,149.3C160,171,320,213,480,229.3C640,245,800,235,960,202.7C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
            </path>
            </svg>
        </div> */}
              
      </section>
    </>
  )
}

export default Home