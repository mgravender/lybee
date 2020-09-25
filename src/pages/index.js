import React from "react"
import { Row, Col, Container, ListGroup, Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}><div className="push">
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container>
          <div id="needhelp"><a href="http://www.google.com" title="Chat with an admin"><span>
            Need Help? </span><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-left-dots-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  </svg></a>
          </div>
    </Container>   
    <div className="col-md-4 steplabel"><step>Step 2</step><h4>Upload Driver's License</h4>or Government-issued Photo ID</div>
    <Row noGutters className="pageContent">
      <Container className="text-left">
        <Row>
          <Col>
              <h1>Welcome to Digital Check-in!</h1>
              <p>Priority ticket holders in line by the check-in deadline will be the first ticket holders admitted. </p>
          </Col>
        </Row>
        <Row className="justify-content-center my-3">
          <Col md="6">
            <ListGroup>
              <ListGroup.Item
                action
                href="https://getbootstrap.com"
                target="_blank"
              >
                Bootstrap
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="https://react-bootstrap.github.io/"
                target="_blank"
              >
                react-bootstrap
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="https://react-icons.netlify.com"
                target="_blank"
              >
                react-icons
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/"
                target="_blank"
              >
                gatsby-plugin-sass
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col className="text-right">
            <Button>Next</Button>
          </Col>
        </Row>
      </Container>
    </Row></div>
  </Layout>
)

export default IndexPage
