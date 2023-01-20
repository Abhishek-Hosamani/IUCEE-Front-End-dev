import React from "react";
import "./Event.css";
import Text from "../../components/Text/Text";
import img from "../../assets/images/img1.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Event = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          {/* <h2 className="annual-title">ANNUAL LEADERSHIP SUMMIT</h2>
           */}

          <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showStatus={false} showThumbs={false}
          showArrows={true} 
          swipeable={true} 
          
          >
            <div className="carousel">
              <img
                className="img"
                src={img}
                alt=""
                srcset=""
                width={"100%"}
                height={"60%"}
              />
            </div>
            <div className="carousel">
              <img
                className="img"
                src={img}
                alt=""
                srcset=""
                width={"100%"}
                height={"60%"}
              />
            </div>

            <div className="carousel">
              <img
                className="img"
                src={img}
                alt=""
                srcset=""
                width={"100%"}
                height={"60%"}
              />
            </div>
          </Carousel>
        </div>

        <div className="history-container">
          <div className="history">
            <h2 className="history-title">HISTORY AND VISION</h2>
          </div>
          <div className="history-content">
            <p className="content1">
              The Annual Leadership Summit was an outcome of the realization
              among several leaders of IUCEE institutions that good governance
              and institutional leadership is fundamental to the survival and
              progress of Indian engineering institutions in the challenging
              times. The vision of the Leadership Summit is to bring together
              leadership teams of Consortium institutions in order to share and
              collaborate. The participation is limited to three members of the
              leadership of each institution, including management and academic
              leaders. The venue was chosen as Goa in order to encourage sharing
              in a relaxed environment.
            </p>
          </div>
        </div>

        <div className="summary">
          <details className="details-1">
            <summary className="summary-1">
              Schedule of 2022 Leadership Summit
            </summary>
            <p>Summary 1</p>
          </details>

          <details className="details-2">
            <summary className="summary-2">
              Schedule of 2022 Leadership Summit
            </summary>
            <p>Summary 2</p>
          </details>

          <details className="details-3">
            <summary className="summary-3">
              Schedule of 2022 Leadership Summit
            </summary>
            <p>Summary 3</p>
          </details>

          <details className="details-4">
            <summary className="summary-4">
              Schedule of 2022 Leadership Summit
            </summary>
            <p>Summary 4</p>
          </details>

          <details className="details-5">
            <summary className="summary-5">
              Schedule of 2022 Leadership Summit
            </summary>
            <p>Summary 5</p>
          </details>
        </div>

        <div className="on-going-event">
          <Text className="going-event" above="EVENTS" ma="ON GOING EVENTS"/>
        </div>
        </div>
    </>
  );
};

export default Event;
