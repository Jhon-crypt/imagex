import React from 'react'
import {Outlet, Link} from "react-router-dom"

function header(){

    const contents : any = {

        title : "Image",
        colored_title : "X",
        button_title : "Start Now"

    }

    return (

        <>

        <nav className="navbar navbar-expand-md navbar-dark shadow p-2 mb-4">
            <div className="container">
                <b style={{ "fontSize" : "30px" }}><span className="navbar-text text-light">{contents.title}</span><span className="navbar-text" 
                style={{ "color" : "#74D8FA" }}>{contents.colored_title}</span></b>
                
                <Link to="/generate">
                    <button className="btn btn-md text-secondary" style={{ "backgroundColor" : "#74D8FA", "color" : "#020410" }}><b>{contents.button_title}</b></button>
                </Link>

            </div>

        </nav>

        <Outlet />

        </>

    )

}

export default header