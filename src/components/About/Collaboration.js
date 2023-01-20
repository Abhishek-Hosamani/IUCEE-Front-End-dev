import React from "react";
import './collaboration.css';
import Image3 from './img3.jpeg';
import Text from "../Text/Text";
function Collaboration() {
    return (

        <>
            {/* <div><h1 className="Backtext">COLLABORATION</h1><h2 className="Uppertext">COLLABORATION</h2></div> */}
            <Text ma="COLLABORATION" above="COLABORATION" />
            <p id="textbelow">Making a Better World with better Engineering Education IUCEE</p>
            <div className="outerContainer">
                <div className="Container_Ind">
                    <div className="Individuals">
                        <img src={Image3} alt="Image3" ></img>
                        <p>Dr.Krishna Vedula</p>
                        <p className="pos">Executive Director</p>
                    </div>
                    <div className="Individuals">
                        <img src={Image3} alt="Image3" ></img>
                        <p>Dr.Krishna Vedula</p>
                        <p className="pos">Executive Director</p>
                    </div>
                    <div className="Individuals">
                        <img src={Image3} alt="Image3" ></img>
                        <p>Dr.Krishna Vedula</p>
                        <p className="pos">Executive Director</p>
                    </div>
                    <div className="Individuals">
                        <img src={Image3} alt="Image3" ></img>
                        <p>Dr.Krishna Vedula</p>
                        <p className="pos">Executive Director</p>
                    </div>
                </div>
                <p>INDO UNIVERSAL COLLABORATION</p>
                <div className="Container_Ind">
                    <div className="Individuals">
                        <img src={Image3} alt="Image3" ></img>
                        <p>Dr.Krishna Vedula</p>
                        <p className="pos">Executive Director</p>
                    </div>
                    <div className="Individuals">
                        <img src={Image3} alt="Image3" ></img>
                        <p>Dr.Krishna Vedula</p>
                        <p className="pos">Executive Director</p>
                    </div>
                    <div className="Individuals">
                        <img src={Image3} alt="Image3" ></img>
                        <p>Dr.Krishna Vedula</p>
                        <p className="pos">Executive Director</p>
                    </div>
                    <div className="Individuals">
                        <img src={Image3} alt="Image3" ></img>
                        <p>Dr.Krishna Vedula</p>
                        <p className="pos">Executive Director</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Collaboration;