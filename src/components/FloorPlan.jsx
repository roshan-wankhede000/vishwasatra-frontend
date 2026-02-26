import React, { useState } from "react";
import floorImg from "../assets/building.jpg"; 
import cityImg from "../assets/building.jpg"; 

function FloorPlan() {
  const [active, setActive] = useState("1BHK");

  return (
    <>
      <section className="floor-section py-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-5 mb-4">
              <div className="floor-image-card">
                <img src={floorImg} alt="Floor Plan" className="img-fluid" />
              </div>
            </div>

            <div className="col-lg-7">
                <div className="d-flex justify-content-around">
                    <span>lorem</span>
                    <span>lorem</span>
                    <span>lorem</span>
                    <span>lorem</span>
                </div>
                <hr />
              <div className="details-card p-4">
                <div className="d-flex justify-content-center gap-3 mb-4">
                  {["1BHK", "2BHK", "3BHK"].map((item) => (
                    <button
                      key={item}
                      className={`plan-tab ${
                        active === item ? "active-tab" : ""
                      }`}
                      onClick={() => setActive(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="text-center">
                  <h5 className="mb-3">Type: {active}</h5>
                  <p className="mb-2">
                    Area: <strong>340+ SQ.FT.</strong>
                  </p>
                  <p className="mb-4">Price: Call for price</p>

                  <button className="btn enquire-btn px-4 py-2">
                    Enquire Now
                  </button>
                </div>

              </div>

          <div className="row mt-4">
            {[1, 2, 3].map((item) => (
              <div className="col-md-4" key={item}>
                <div className="small-card p-2">
                  <img className="img-fluid" src="https://images.template.net/497253/Multi-Room-Floor-Plan-Template-edit-online.png" />
                </div>
              </div>
            ))}
          </div>

            </div>

          </div>
        </div>
      </section>

      <section className="video-section">
        <img src={cityImg} alt="City View" className="video-bg" />
        <div className="play-button">
          <i className="bi bi-play-fill"></i>
        </div>
      </section>
    </>
  );
}

export default FloorPlan;