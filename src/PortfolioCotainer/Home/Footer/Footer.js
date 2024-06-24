import React from "react";
import './Footer.css'

export default function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-parent">
                <img src={require ("../../../assets/Home/shape-bg.png")}
                 alt="img is not showing"/>
                 {/* <img src="../../../assets/Home/shape-bg.png" alt="img" /> */}
            </div>
        </div>
    )
}      