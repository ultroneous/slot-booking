import React, { useState } from "react";
import SlotModal from "../components/SlotModal";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import arrow from "../arrow.svg";
import Main from "../Main.png";
import "./Homepage.css";

const HomePage = () => {
  const [btnClicked, setBtnClicked] = useState(false);
  const clickHandler = () => {
    setBtnClicked(!btnClicked);
  };
  console.log(btnClicked, "btnClicked");
  return (
    <div className="homePage">
      <section className="Introduction">
        <Container fluid className="contfluid">
          <Row>
            <Col xl={6}>
              <div className="Introtext">
                <h2>
                  Your <span>Pet</span> is part of our family
                </h2>
                <p>
                  Want to train your pet? Or Looking for someone who takes care
                  of your pet? Well we are here.
                </p>
                <Row className="btnRow" style={{ paddingLeft: "3rem" }}>
                  <Col xl={6} xs={6} className="bookbutton">
                    <Button
                      style={{
                        width: "12rem",
                        border: "2px dotted rgb(227, 155, 166)",
                        background: "rgb(255, 255, 255)",
                        color: "black",
                        borderRadius: "20rem",
                        // width: "10rem",
                      }}
                      onClick={clickHandler}
                    >
                      Book A Schedule
                    </Button>
                  </Col>
                  <Col xl={6} xs={6} className="pricebutton">
                    <Button
                      style={{
                        width: "12rem",
                        border: "2px dotted #E39BA6",
                        background: " #fff",
                        color: "black",
                        borderRadius: "20rem",
                      }}
                    >
                      Price Pack
                    </Button>
                  </Col>
                  <section className="Doitsection">
                    <Image src={arrow} className="arrowImage" />

                    <button id="doitnow"> Do it Now...!!</button>
                    <div class="lds-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </section>
                </Row>
              </div>
            </Col>

            <Col xl={6}>
              <img src={Main} style={{ width: "100%", height: "auto" }} />
            </Col>
          </Row>
        </Container>
      </section>

      <SlotModal btnClicked={btnClicked} clickHandler={clickHandler} />
    </div>
  );
};

export default HomePage;
