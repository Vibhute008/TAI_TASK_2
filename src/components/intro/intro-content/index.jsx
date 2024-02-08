import React from "react";
import "./style.scss"
import girl from "../../../images/girl.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { scrollToSection } from "../../utils/helper";

import "./style.scss";
function IntroContent() {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img
                                    src={hand}
                                    alt=""
                                />
                            </span>
                            <span className="text"> , I Am</span>
                        </span>
                        <span className="big-text"> Sairaj Vibhute</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Adipisci, quisquam mollitia placeat dolorum nihil
                        consequuntur sit vitae ipsum neque perferendis?
                    </p>
                    <CallToAction text="Contact Me"  action={()=> scrollToSection("contact")}/>
                </div>
                <div className="right-col">
                    <img
                        src={girl}
                        alt="MyHero"
                    />
                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Best Design Award</div>
                    </div>

                    <div className="highlights verticle">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>4k+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroContent;
