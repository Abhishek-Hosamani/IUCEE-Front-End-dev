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
import Abtimg6 from '../../assets/AboutImages/Abtimg6.png'
import Abtimg7 from '../../assets/AboutImages/Abtimg7.png'
import Abtimg8 from '../../assets/AboutImages/Abtimg8.png'




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

    const AdvisoryBoard = [
        {
            img: Abtimg6,
            Name: "Dr.Krishna Vedula",
            Postition: "Executive director"
        },
        {
            img: Abtimg8,
            Name: "Dr.Krishna Vedula",
            Postition: "Executive director"
        },
        {
            img: Abtimg7,
            Name: "Dr.Krishna Vedula",
            Postition: "Executive director"
        }
    ]
    const GlobalExperts = [

        {
            img: Abtimg8,
            Name: "Dr.Krishna Vedula",
            Postition: "Executive director"
        },
        {
            img: Abtimg7,
            Name: "Dr.Krishna Vedula",
            Postition: "Executive director"
        },
        {
            img: Abtimg6,
            Name: "Dr.Krishna Vedula",
            Postition: "Executive director"
        },
        {
            img: Abtimg7,
            Name: "Dr.Krishna Vedula",
            Postition: "Executive director"
        },
        {
            img: Abtimg8,
            Name: "Dr.Krishna Vedula",
            Postition: "Executive director"
        },
    ]
    return (

        <>

            <div className="outerContainer">
                <Text className="collab" ma="COLLABORATION" above="COLLABORATION" />

                <p id="textbelow">Making a Better World with better Engineering Education IUCEE</p>
                <div className="text_Inside">
                    <p >Indo Universal Collaboration for Engineering Education (IUCEE) is operated through two formal organizations
                    </p>
                    <p>IUCEE FOUNDATION is a Section 8 Company in India:</p>
                </div>
                <div className="Container_Ind">

                    {employees.map(employee => {
                        return (
                            <div className="Individuals">
                                <img src={employee.img} alt="Image3" ></img>
                                <p className="Name">{employee.Name}</p>
                                <p className="pos">{employee.Designation}</p>
                            </div>
                        )
                    })}
                </div>
                <p>INDO UNIVERSAL COLLABORATION FOR ENGINEERING EDUCATION INC is a 501c3 Company in US:
                </p>
                <div className="Container_Ind">

                    {employees.map(employee => {
                        return (
                            <div className="Individuals">
                                <img src={employee.img} alt="Image3" ></img>
                                <p className="Name">{employee.Name}</p>
                                <p className="pos">{employee.Designation}</p>
                            </div>
                        )
                    })}

                </div>
            </div>

            <h6 className="Heading">ADVISORY BOARD (IUCEE FOUNDATION)</h6>
            <div className="AdvisoryContainer">
                {AdvisoryBoard.map(Advisory => {
                    return (
                        <div className="Advisory_Ind">
                            <img className="Adv_img" src={Advisory.img} alt="Advisory_Image" ></img>

                            <p className="Name">{Advisory.Name}</p>
                            <p className="pos">{Advisory.Postition}</p>

                        </div>
                    )
                })}
            </div>

            <h6 className="Heading">ADVISORY BOARD(IUCEE INC)</h6>
            <div className="AdvisoryContainer">
                {AdvisoryBoard.map(Advisory => {
                    return (
                        <div className="Advisory_Ind">
                            <img className="Adv_img" src={Advisory.img} alt="Advisory_Image" ></img>

                            <p className="Name">{Advisory.Name}</p>
                            <p className="pos">{Advisory.Postition}</p>

                        </div>
                    )
                })}
            </div>


            <div className="Globalexp">

                <h6 className="Heading">GLOBAL EXPERTS</h6>
                <p>IUCEE is guided by a team of Indian and International Experts from academia and industry.
                    They are passionate about the mission of IUCEE and devote a lot of time and energy offering courses and workshops,
                    facilitating collaborations, organizing and speaking at events, mentoring faculty, students and leadership of colleges.
                </p>
                <div className="Global_experts">
                    {GlobalExperts.map(Advisory => {
                        return (
                            <div className="Global_ind">
                                <img className="Adv_img" src={Advisory.img} alt="Advisory_Image" ></img>

                                <p className="Name">{Advisory.Name}</p>
                                <p className="pos">{Advisory.Postition}</p>
                            </div>
                        )
                    })}
                </div>
            </div>


        </>
    );
}

export default Collaboration;