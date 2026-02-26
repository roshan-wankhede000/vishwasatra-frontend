import building from "../assets/building.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Township() {
    return (
        <>
            <section className="amenities-section py-5">
                <div className="container">
                    <h2 className="section-title mb-3">Amenities</h2>
                    <p className="text-muted mb-5">
                        Dye roftog adilities of Rooftop Buildings, difranted as hirlaws and
                        evallnatos othe saps.
                    </p>

                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <img
                                src={building}
                                alt="Building"
                                style={{ height: "100%" }}
                                className="img-fluid rounded-4 shadow"
                            />
                        </div>

                        <div className="col-lg-7">
                            <div className="row text-center g-4">
                                {[
                                    "Gymnasium",
                                    "Kids Play Area",
                                    "Kids Play Area",
                                    "Jogging Track",
                                    "Yoga Deck",
                                    "Yoga Deck",
                                ].map((item, index) => (
                                    <div className="col-6 col-md-4" key={index}>
                                        <div className="amenity-card p-4">
                                            <div className="icon-circle mb-3">
                                                <i className="bi bi-activity"></i>
                                            </div>
                                            <p className="mb-0 fw-medium">{item}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-4">
                                <button className="btn enquiry-btn px-4 py-2">
                                    Enquiry Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="explore-section py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">
                        Explore More Buildings in the Township
                    </h2>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        loop={true}
                        navigation={true}
                        autoplay={{ delay: 3000 }}
                        className="township-swiper"
                    >
                        {[1, 2, 3, 4, 5].map((item) => (
                            <SwiperSlide key={item} className="township-slide">
                                <div className="building-card">
                                    <img
                                        src={building}
                                        alt="Building"
                                        className="img-fluid rounded-4"
                                    />
                                    <div className="bottom-label">
                                        Newly Launched - Vignaharta Enclave
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Township;