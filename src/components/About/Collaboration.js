import React from "react";
import './collaboration.css';
import Image3 from './img3.jpeg';
import Text from "../Text/Text";
import Abtimg1 from '../../assets/AboutImages/Abtimg1.png'
import Abtimg2 from '../../assets/AboutImages/Abtimg2.png'
import Abtimg3 from '../../assets/AboutImages/Abtimg3.png'
import Abtimg4 from '../../assets/AboutImages/Abtimg4.png'
import Abtimg5 from '../../assets/AboutImages/Abtimg5.png'
import styled from 'styled-components';





function Collaboration() {

 

    const employees = [
        {
            img: Abtimg1,
            Name: "Dr.Krishna Vedula",
            Designation: "Executive Director"
        },
        {
            img: Abtimg2,
            Name: "Dr.Krishna Vedula",
            Designation: "Executive Director"
        },
        {
            img: Abtimg3,
            Name: "Dr.Krishna Vedula",
            Designation: "Executive Director"
        },
        {
            img: Abtimg4,
            Name: "Dr.Krishna Vedula",
            Designation: "Executive Director"
        },
        {
            img: Abtimg5,
            Name: "Dr.Krishna Vedula",
            Designation: "Executive Director"
        },

    ]
    return (

        <>
            {/* <div><h1 className="Backtext">COLLABORATION</h1><h2 className="Uppertext">COLLABORATION</h2></div> */}
            <div className="outerContainer">
                <Text  className="collab" ma="COLLABORATION" above="COLLABORATION" />
                <p id="textbelow">Making a Better World with better Engineering Education IUCEE</p>
                <p>Indo Universal Collaboration for Engineering Education (IUCEE) is operated through two formal organizations
                </p>
                <p>IUCEE FOUNDATION is a Section 8 Company in India:</p>

                <div className="Container_Ind">
                    {/* <div className="Individuals">
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
                    </div> */}
                    {employees.map(employee => {
                        return (
                            <div className="Individuals">
                                <img src={employee.img} alt="Image3" ></img>
                                <p>{employee.Name}</p>
                                <p className="pos">{employee.Designation}</p>
                            </div>
                        )
                    })}
                </div>
                <p>INDO UNIVERSAL COLLABORATION</p>
                <div className="Container_Ind">
                    {/* <div className="Individuals">
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
                    </div> */}
                    {employees.map(employee => {
                        return (
                            <div className="Individuals">
                                <img src={employee.img} alt="Image3" ></img>
                                <p>{employee.Name}</p>
                                <p className="pos">{employee.Designation}</p>
                            </div>
                        )
                    })}

                </div>
            </div>

        </>
    );
}

export default Collaboration;