import { Component } from 'react';
import HornedBeast from './HornedBeast'
import data from './data.json';
import Row from 'react-bootstrap/Row';
import Header from './Header.js';
import Col from 'react-bootstrap/col';


class Main extends Component {

  render() {

    return (
      <div>
      <Header />
      <Row sm={1} md={2} lg={4}>
        <Col>
        {data.map(beast => <HornedBeast image_url={beast.image_url} title={beast.title} description={beast.description}/>)}
        </Col>
      </Row>
    </div>
    )
  }
}

export default Main;