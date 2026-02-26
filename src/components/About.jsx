import React, { useEffect, useState } from 'react'
import axios from 'axios'

function About() {
      let [about, setAbout] = useState('')
    
        async function getAbout() {
        let res = await axios.get("https://vishwasatra-backend.onrender.com/api/getAllTexts")
        setAbout(res.data.data)
        console.log(res.data.data); 
      }

      useEffect(()=>{
        getAbout()
      },[])
  return (
    <> 
           <section className="about-section">
        <div className="container py-5">
          <div className="row align-items-center">

            <div className="col-md-6 col-sm-6  position-relative center-img">
                <div className="circle-img">
                <img
                  src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
                  className="img-fluid circle-img"
                  alt=""
                />
              </div>

              <div className="">
                <img
                  src="https://images.unsplash.com/photo-1493809842364-78817add7ffb"
                  className="img-fluid circle-img circle-img-above position-absolute"
                  alt=""
                />
              </div>

              <div
                className=" "
              >
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                  className="img-fluid circle-img-below position-absolute"
                  alt=""
                />
              </div>

            </div>

            <div className="col-md-6 col-sm-6">
              <h2 className="about-title">About Project</h2>

              <p className="mt-3">
               {about.text1}
              </p>

              <p>
                {about.text2}
              </p>

              <button className="btn btn-brochure mt-3">
                Download Brochure
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default About