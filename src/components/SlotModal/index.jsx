import React from "react";
import styles from "./Checkout.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { Alert, Col, Modal, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  enddate,
  getDatesInRange,
  startdate,
} from "../../utils/calenderPackage";

import { calenderslidersettings } from "../../utils/sliderSettings";

export const monthsforcal = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const daysforcal = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const timesofsloats = [
  {
    time: "7:00 AM TO 8:00 AM",
    over: 8,
    seen: "AM",
  },
  {
    time: "8:00 AM TO 9:00 AM",
    over: 9,
    seen: "AM",
  },
  {
    time: "9:00 AM TO 10:00 AM",
    over: 10,
    seen: "AM",
  },
  {
    time: "10:00 AM TO 11:00 AM",
    over: 11,
    seen: "AM",
  },
  {
    time: "11:00 AM TO 12:00 PM",
    over: 12,
    seen: "PM",
  },
  {
    time: "12:00 PM TO 1:00 PM",
    over: 13,
    seen: "PM",
  },
  {
    time: "1:00 PM TO 2:00 PM",
    over: 14,
    seen: "PM",
  },
  {
    time: "2:00 PM TO 3:00 PM",
    over: 15,
    seen: "PM",
  },
  {
    time: "3:00 PM TO 4:00 PM",
    over: 16,
    seen: "PM",
  },
  {
    time: "4:00 PM TO 5:00 PM",
    over: 17,
    seen: "PM",
  },
  {
    time: "5:00 PM TO 6:00 PM",
    over: 18,
    seen: "PM",
  },
  {
    time: "6:00 PM TO 7:00 PM",
    over: 19,
    seen: "PM",
  },
  {
    time: "7:00 PM TO 8:00 PM",
    over: 20,
    seen: "PM",
  },
  {
    time: "8:00 PM TO 9:00 PM",
    over: 21,
    seen: "PM",
  },
  {
    time: "9:00 PM TO 10:00 PM",
    over: 22,
    seen: "PM",
  },
  {
    time: "10:00 PM TO 11:00 PM",
    over: 23,
    seen: "PM",
  },
  {
    time: "11:00 PM TO 12:00 AM",
    over: 24,
    seen: "AM",
  },
  {
    time: "12:00 AM TO 1:00 AM",
    over: 1,
    seen: "AM",
  },
  {
    time: "1:00 AM TO 2:00 AM",
    over: 2,
    seen: "AM",
  },

  {
    time: "2:00 AM TO 3:00 AM",
    over: 3,
    seen: "AM",
  },
  {
    time: "3:00 AM TO 4:00 AM",
    over: 4,
    seen: "AM",
  },
  {
    time: "4:00 AM TO 5:00 AM",
    over: 5,
    seen: "AM",
  },
  {
    time: "5:00 AM TO 6:00 AM",
    over: 6,
    seen: "AM",
  },
  {
    time: "6:00 AM TO 7:00 AM",
    over: 7,
    seen: "AM",
  },
];

const SlotModal = ({ btnClicked, clickHandler }) => {
  const [timesloatsata, setTimeSloatData] = useState([]);
  const [showTimeError, setShowTimeError] = useState(false);
  const [proccessComplete, setProcessComplete] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(0);
  const [showDateError, setShowDateError] = useState(false);

  const [changeModalSize, setChangeModalSize] = useState(true);

  const [completedSloat, setCompletedSloat] = useState([]);

  const [dateandTimeSelection, setDateAndTimeSelection] = useState(true);

  const [datelist, setDateList] = useState(getDatesInRange(startdate, enddate));
  const timeselectedHandler = (index) => {
    setShowTimeError(false);
    setSelectedTime(index);
  };

  const TimeIsOver = (timesloatsata, timesofsloats) => {
    let overdata = [];
    let newDate = new Date();
    let hours = newDate.getHours();

    const newTimeSlot =
      datelist[selectedDate].dates == newDate.getDate()
        ? timesofsloats.filter((item) => item.over > hours)
        : timesofsloats;
    return newTimeSlot;
  };

  useEffect(
    () => setCompletedSloat(TimeIsOver(timesloatsata, timesofsloats)),
    [timesloatsata, selectedDate]
  );

  return (
    <Modal
      show={btnClicked}
      onHide={clickHandler}
      size={changeModalSize ? "xl" : "lg"}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="CheckoutPopup"
    >
      <Modal.Body className={styles.ModalBody}>
        {/*======================================== date time selection ======================================== */}
        {dateandTimeSelection ? (
          <Row>
            <Col xs={12} md={12} lg={12} xl={12}>
              {showDateError && (
                <Alert variant={"danger"}>Please Select Date !</Alert>
              )}
              {showTimeError && (
                <Alert variant={"danger"}>Please Select Time !</Alert>
              )}
            </Col>

            <Col xs={12} md={12} lg={12} xl={12}>
              <h5 className={styles.SubtitleText}>Select Date</h5>
              {/* <img
                className={styles.close}
                src={cross}
                onClick={clickHandler}
              /> */}
            </Col>

            {/* date calander */}
            <Col
              xs={12}
              md={12}
              lg={12}
              xl={12}
              className={styles.CalenderWrraper}
            >
              <Slider {...calenderslidersettings} className={"CalendarSlider"}>
                {datelist.map((v, i) => (
                  <div
                    className={`${styles.CardOfdate} ${
                      selectedDate === i && styles.SelectedCardOfDate
                    }`}
                    key={i}
                    onClick={() => {
                      setShowDateError(false);
                      setSelectedDate(i);
                    }}
                  >
                    <div className={styles.Day}>{daysforcal[v.days]}</div>
                    <div className={styles.Date}>{v.dates + v.slogan}</div>
                    <div className={styles.Slogan}>{monthsforcal[v.month]}</div>
                  </div>
                ))}
              </Slider>
            </Col>

            {/* time sloat  */}
            <Col xs={12} md={12} lg={12} xl={12}>
              <h5 className={styles.SubtitleText}>Select Time</h5>
              <Row className={styles.SelectionTimeRow}>
                {completedSloat.map((v, i) => (
                  <Col
                    xs={6}
                    xl={4}
                    key={i}
                    className={`${styles.TimeCardCol}`}
                  >
                    <div
                      onClick={() =>
                        new Date().getDate() == selectedDate &&
                        completedSloat.includes(v.time)
                          ? null
                          : timeselectedHandler(i)
                      }
                      className={`${styles.TimeCard} ${
                        selectedTime === i && styles.SelectedCard
                      }`}
                      style={
                        new Date().getDate() == selectedDate &&
                        completedSloat.includes(v.time)
                          ? {
                              backgroundColor: "grey",
                              cursor: "not-allowed",
                              opacity: "0.8",
                              userSelect: "none",
                            }
                          : null
                      }
                    >
                      <p className={styles.TimeText}>
                        {v.time?.replace("TO", "-")}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        ) : null}
        {/* </div> */}
      </Modal.Body>
    </Modal>
  );
};

export default SlotModal;
