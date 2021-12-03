import { Component } from 'react';
import HornedBeast from './HornedBeast'
import Row from 'react-bootstrap/Row';
import Header from './Header.js';
import Col from 'react-bootstrap/col';
import HornForm from './HornForm.js';


class Main extends Component {

  render() {

    return (
      <div>
      <Header />
      <HornForm {...this.props.updateBeast}/>
      <Row>
        <Col>
        {this.props.data.map((beast, idx) => <HornedBeast key={idx} updateBeast={this.props.updateBeast} beast={beast}/>)}
        </Col>
      </Row>
    </div>
    )
  }
}

export default Main;