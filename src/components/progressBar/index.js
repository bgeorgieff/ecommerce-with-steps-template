import { useCallback, useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";

const Progress = (props) => {
  const { visible, initialState, endState, eventCollection } = props;
  const [progress, setProgress] = useState(initialState);
  const [index, setIndex] = useState(0);
  const dotEvents = useRef([]);
  const line = useRef(null);
  const textEvents = useRef([]);
  const activeDots = dotEvents.current.length;
  const [dotLength, setDotLength] = useState(0);
  const [dotPosition, setDotPosition] = useState(0);

  if (initialState > dotPosition) {
    setDotPosition(initialState);
  }

  const autoTransitionText = (e) => {
    e.querySelector("p").style.color = "#36a341";
  };

  const autoTransition = (e) => {
    e.style.backgroundColor = "#36a341";
    e.style.transform = "scale(1.06) translateY(-55%)";
    e.querySelector(".image-container > svg").style.fill = "#36a341";
  };

  useEffect(() => {
    setProgress(initialState);
  }, [initialState]);

  // AUTO-ANIMATION -- DOTS HP
  const autoColorisedDots = useCallback(() => {
    if (
      (progress === dotPosition || progress === endState - 1) &&
      index < activeDots
    ) {
      setDotPosition((e) => e + dotLength);
      autoTransition(dotEvents.current[index]);
      autoTransitionText(textEvents.current[index]);
      setIndex((e) => e + 1);
    }
  }, [
    progress,
    index,
    dotEvents,
    activeDots,
    dotPosition,
    endState,
    dotLength,
  ]);

  // AUTO-ANIMATE ON HP -- PROGRESS LINE
  useEffect(() => {
    if (index < activeDots) {
      setDotLength(dotEvents.current[index].offsetWidth);
    }

    if (progress < endState && visible) {
      line.current.style.height = "100%";
      const timer = setInterval(() => {
        autoColorisedDots();
        setProgress((e) => e + 1);
      }, 30);
      return () => {
        clearInterval(timer);
      };
    }
  }, [progress, endState, visible, autoColorisedDots, index, activeDots]);

  const textRef = (el) => {
    if (el && !textEvents.current.includes(el)) {
      textEvents.current.push(el);
    }
  };

  const dots = (el) => {
    if (el && !dotEvents.current.includes(el)) {
      dotEvents.current.push(el);
    }
  };

  return (
    <>
      <Row className="gx-0">
        <Col className="mx-5">
          <div className="timeline-line">
            <span
              ref={line}
              style={{ width: `${progress}%` }}
              className="timeline-cover-line"
            ></span>
          </div>
        </Col>
      </Row>
      <Row className="gx-0">
        {eventCollection
          ? eventCollection.map((e, i) => (
              <Col key={i}>
                <div ref={dots} className="dots">
                  <div
                    className="text-center d-flex align-items-center justify-content-center"
                    style={{ color: "white" }}
                  >
                    <div style={{ height: "100%", lineHeight: "130%" }}>
                      {i + 1}
                    </div>
                  </div>
                  <div className="image-container">{e.imageBlue}</div>
                </div>
                <div ref={textRef} className="text-center">
                  <p className="main-blue font-adjust">{e.name}</p>
                </div>
              </Col>
            ))
          : ""}
      </Row>
    </>
  );
};

export default Progress;
