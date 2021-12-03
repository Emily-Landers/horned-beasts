import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

export default class SelectedBeast extends Component{
    render(){
        console.log(this.props.beastToShow)
        return (
            <Modal show={this.props.showModal} onHide={this.props.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Beast</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Card> 
                <Card.Img variant="top" src={this.props.beastToShow.image_url} alt={this.props.beastToShow.description}/>
                <Card.Body>
                  <Card.Title>{this.props.beastToShow.title}</Card.Title>
                  <Card.Text>
                    {this.props.beastToShow.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Modal.Body>
          </Modal> 
        )
    }
}