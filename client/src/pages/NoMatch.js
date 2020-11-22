import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Style from "./NoMatch.module.css";

class Error extends Component {
  render() {
    return (
      <>
        <div className={Style.errorWrapper}>
          <Container className={Style.eCon}>
            <Row className={Style.eRow}>
              <Col className={Style.eCol}>
                <div className={Style.eh1}>ERROR 1203499C0005ƆB</div>
              </Col>
            </Row>
            <Row className={Style.eRow}>
              <div className={Style.eh2}>
                Wellp, now you did it. You broke your computer. You probably
                didn't even do anything major, did you? But see, I'm the dreaded
                Blue Screen of Death, and I pop up totally randomly, and most
                times, for no good gah-darn reason.
              </div>
            </Row>
            <Row className={Style.eRow}>
              <div className={Style.eh2}>
                You're probably sweatin' bullets right now, aren't you? I love
                it! So, there are a couple options you could try, neither of
                which will work whatsoever, but hey, be my guest.
              </div>
            </Row>
            <Row className={Style.eRow}>
              <ul>
                <li>
                  <div className={Style.eh2}>
                    Hit CTRL+ALT+DEL. This will restart me. But, everything
                    you've done on me up until this point will be gone. Womp,
                    womp. But if you're into downloading weird online GIF's
                    (which you are), I'm guessing this isn't a terrible option.
                  </div>
                </li>
                <br />
                <li>
                  <div className={Style.eh2}>
                    Don't hit CTRL+ALT+DEL and get on the phone with every
                    computer repair guy in town. All of 'em. Give'em all a shot.
                    It's fine. I'll wait. I ain't going anywhere. I can stay
                    like this alllllllllll daaaaaaaayyyyyyyy...
                  </div>
                </li>
              </ul>
            </Row>
            <Row>
              <Link to="/">
                <Button className={Style.HomeButton}>Home</Button>
              </Link>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Error;
