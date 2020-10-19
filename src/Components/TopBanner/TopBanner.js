import React from "react";
import "./TopBanner.css";
import BackgroundBanner from '../../Videos/backgroundBanner.mp4';

export default function TopBanner(props) {
    return(
        <div className="top-banner">
            <video className="background-video"
                autoPlay
                loop
                muted
            >
                <source src={BackgroundBanner} type="video/mp4"/>
            </video>
            <header role="banner">
                <h1 className="rel">Training Catalog</h1>
                <h2 className="rel">Center for Teaching Excellence</h2>
            </header>
            <div className='cover'></div>
        </div>
    );
}