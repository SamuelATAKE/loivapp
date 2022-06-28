/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Button, Col, Row } from "reactstrap";

const Welcome = () => {
  return (
    <React.Fragment>
      <div className="chat-welcome-section">
        <Row className="w-100 justify-content-center">
          <Col xxl={5} md={7}>
            <div className="p-4 text-center">
              <div className="avatar-xl mx-auto mb-4">
                <div className="avatar-title bg-soft-primary rounded-circle">
                  {/* <i className="bx bxs-message-alt-detail display-4 text-primary m-0"></i> */}
                  
                  <img className="" src="logo.png" />
                </div>
              </div>
              <h4>Bienvenue dans LOIV</h4>
              <p className="text-muted mb-4">
                Cette application est faite pour vous aider à dénoncer les violences que vous subissez.
              </p>
              <p className="text-muted mb-4">
                Sélectionnez l'un des télé-opérateurs connectés et engagez une discussion avec lui.
              </p>
              <Button type="button" className="btn btn-primary w-lg">
                Commencer
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
