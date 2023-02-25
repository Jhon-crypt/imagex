import React from 'react'
import {Outlet, Link} from "react-router-dom"
import heroImg from '../assets/images.jpeg'

function Hero(){

    const hero_data : any = {

        image_url : heroImg,
        title : "Imagine And Generate AI Driven Images",
        lead : "Don't stress yourself on crawling through the internet for pictures, Imagine and type any picture content you want, we'll generate it for you",
        btn_text : "Get started"

    }

    return (

        <>

        <div className="container col-xxl-8 px-4 py-5 text-light">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={hero_data.image_url} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" 
                    style={{ "borderRadius" : "30% 70% 70% 30% / 30% 30% 70% 70%" }}/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">{hero_data.title}</h1>
                    <p className="lead">{hero_data.lead}</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-lg text-secondary" style={{ "backgroundColor" : "#74D8FA" }}>
                            <Link to="/generate" className="text-decoration-none" style={{ "color" : "#020410" }}>
                                <b>{hero_data.btn_text}</b>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <Outlet />
        
        </>

    )

}

export default Hero