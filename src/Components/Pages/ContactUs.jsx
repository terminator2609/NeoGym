import Navigation from "../General/Navigation";
import Footer from "../General/Footer";
import { useState } from "react";


function ContactUs() {

    const [isSumbit, setSumbit] = useState(false);
    const [isError, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here

        console.log("Form submitted!");

        let formData = new FormData(e.target);
        let data = formData.entries();

        let dataValues = {};

        for (let [key, value] of data) {
            dataValues[key] = value;
        }

        let dataValuesValuesArray = Object.values(dataValues);

        if(dataValuesValuesArray.filter((item) => item === "").length > 0) {
            setError(true);
            setSumbit(false);
        } else {
            setError(false);
            setSumbit(true);

            e.target.reset(); // Reset the form fields after submission
        }
    };

    return (
        <>

            {/* <body classNameName="sub_page"> */}
            <article className="sub_page">
                <Navigation />


                <section className="contact_section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 px-0">
                                <div className="img-box">
                                    <img src="/images/contact-img.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <div className="form_container pr-0 pr-lg-5 mr-0 mr-lg-2">
                                    <div className="heading_container">
                                        <h2>
                                            Contact Us
                                        </h2>
                                    </div>
                                    <form action="" onSubmit={handleSubmit}>

                                        {isSumbit ? <span className="Error" style={{backgroundColor: "green"}}> Благодаря,че се свързахте с нас! Ще ви отговорим възможно най-скоро !!!</span> : ""}
                                        {isError ? <span className="Error" style={{backgroundColor: "red"}} >Имате не попъленени полета</span> : ""}

                                        <div>
                                            <input type="text" placeholder="Name" name="name" />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Email" name="email " />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Phone Number" name="phoneNumber" />
                                        </div>
                                        <div>
                                            <input type="text" className="message-box" placeholder="Message" name="messagers" />
                                        </div>
                                        <div className="d-flex ">
                                            <button type="submit">
                                                Send
                                            </button>
                                        </div>
                                    </form>
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

export default ContactUs;