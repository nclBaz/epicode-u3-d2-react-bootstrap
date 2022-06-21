// Home Component will contain the Carousel with the dishes pictures and infos. It will also display comments section

import { Component } from "react"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import pastasArray from "../data/menu.json"

class Home extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          {/* <Col className="col col-xs-12 col-md-6"></Col> */}
          <Col xs={12} md={6}>
            <Carousel>
              {pastasArray.map(pasta => (
                <Carousel.Item key={pasta.id}>
                  <img className="d-block w-100" src={pasta.image} alt="First slide" />
                  <Carousel.Caption>
                    <h3>{pasta.name}</h3>
                    <p>{pasta.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home
