import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header-img.svg";
import $ from 'jquery';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Robot Engineer", "IOT Expert"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let intervalId = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(intervalId) };
  }, [text, delta])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fulltext = toRotate[i];
    let updatedText = isDeleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fulltext) {
      setIsDeleting(true);
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className='banner' id='Home'>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>{`Hi I'm Harshit Borana `}<span></span>{text}</h1>
            <p>I am a dynamic professional with a passion for innovation and creativity. With a track record of leading teams and projects to success, I thrive in environments that demand out-of-the-box thinking.  As a creative leader, I empower teams to reach their full potential, fostering a collaborative and forward-thinking atmosphere.</p>
            <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={HeaderImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;
