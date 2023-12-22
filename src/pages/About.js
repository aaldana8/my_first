import React from "react";
import {TbCashBanknoteOff} from "react-icons/tb";
import {BsUniversalAccessCircle} from "react-icons/bs";
import {MdOutlineAppRegistration} from "react-icons/md";
import {AiOutlineDatabase} from "react-icons/ai";
import {GrUpdate} from "react-icons/gr";
import {GrCircleInformation} from "react-icons/gr";
import '../App.css'


const About = () => {
    
    return (
    <div>
        <div className="about-container">

            <div className="about-header">
                <h1>Get A Recommendation For Choosing Your Major!</h1>
                <h3> Major Chooser will give you a major based on person.</h3>       
            </div>

                <div className="about-groupbox">
                    <div className="about-textbox ">

                        <div><AiOutlineDatabase size="48" color="#2b2b49"/></div>
                        <h2>DataBase</h2>
                        <hr/>
                        <p> We collect much data about person habit, life style, and mindset as possible.
                            Every people are differently think, live and work. We consider this point when we are
                            making this application. 
                        </p>

                    </div>
                        
                    <div className="about-textbox ">
                        <div><BsUniversalAccessCircle size="48" color="#2b2b49"/></div>
                        <h2>Accessible & Simple</h2>
                        <hr/>
                        <p> We believe the simple and accessible design is important.
                            So that you can use this application without problems.
                            If you have any problems. Contact Us!
                        </p>
                    </div>

                    <div className="about-textbox ">
                        <div><MdOutlineAppRegistration size="48" color="#013149"/></div>
                        <h2>Not required Registration </h2>
                        <hr/>
                        <p> Major Chooser is designed to be convinent and fast. 
                            This means that you do not need to create your account.
                            You can feel free to use and 
                        </p>
                    </div>
                    <div className="about-textbox ">
                    <div><GrUpdate size="45" color="#2b2b49"/></div>
                        <h2>Keep updating</h2>
                        <hr/>
                        <p> Major Chooser will be keep updated. We want to provide you a good application.
                            This is our goal so we will keep updating until you can satisfy.
                        </p>
                    </div>
                    <div className="about-textbox ">
                    <div><GrCircleInformation size="48" color="#2b2b49"/></div>
                        <h2>Documents </h2>
                        <hr/>
                        <p> Major Chooser not only provide major recommendation but also 
                            gives you each major's information. We documented for each majors.
                        </p>
                    </div>
                    <div className="about-textbox ">
                    <div><TbCashBanknoteOff size="48" color="#2b2b49"/></div>
                        <h2>Free to use</h2>
                        <hr/>
                        <p> Major Chooser gives you all features for free to everyone.
                            All of you can just use our services and draw your future by
                            getting a recommended major.
                        </p>
                    </div>
            </div>
        </div>
        
    </div>
    );
};

export default About;