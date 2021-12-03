import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import data from './data.json';

class HornForm extends Component {
    filter = (event) => {
        number = parseInt(event.target.value);
        let beastData = data
        if(number) {
            beastData = data.filter((beast) => beast.horns === number);
        }
        this.props.updateBeast(beastData);
    }
    render(){
        return(
        <Form.Select aria-label="Sort by Number of Horns">
            <option>Sort by Number of Horns</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">One Hunderd</option>
        </Form.Select>
        )
    }
}
export default HornForm;