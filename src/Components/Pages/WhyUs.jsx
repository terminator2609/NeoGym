import Navigation from "../General/Navigation";
import Footer from "../General/Footer";

function WhyUs() {
    return (
        <>
            <article className="sub_page">
                <Navigation />

                <section className="us_section layout_padding">
                    <div className="container">
                        <div className="heading_container">
                            <h2>
                                Why Choose Us
                            </h2>
                        </div>

                        <div className="us_container ">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="box">
                                        <div className="img-box">
                                            <img src="images/u-1.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                QUALITY EQUIPMENT
                                            </h5>
                                            <p>
                                                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="box">
                                        <div className="img-box">
                                            <img src="images/u-4.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                NUTRITION
                                            </h5>
                                            <p>
                                                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="box">
                                        <div className="img-box">
                                            <img src="images/u-2.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                HEALTHY DIET PLAN
                                            </h5>
                                            <p>
                                                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="box">
                                        <div className="img-box">
                                            <img src="images/u-3.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                SPORT TRAINING
                                            </h5>
                                            <p>
                                                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="info_section layout_padding2">
                    <div className="container">
                        <div className="info_items">
                            <a href="">
                                <div className="item ">
                                    <div className="img-box box-1">
                                        {/* <img src="" alt="" /> */}
                                    </div>
                                    <div className="detail-box">
                                        <p>
                                            Location
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className="item ">
                                    <div className="img-box box-2">
                                        {/* <img src="" alt="" /> */}
                                    </div>
                                    <div className="detail-box">
                                        <p>
                                            +02 1234567890
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className="item ">
                                    <div className="img-box box-3">
                                        {/* <img src="" alt="" /> */}
                                    </div>
                                    <div className="detail-box">
                                        <p>
                                            demo@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                <Footer />
            </article>

        </>

    )
}

export default WhyUs;