import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

 export default class HornedBeast extends Component {
        constructor(props) {
            super(props);
            this.state = {
              votes: 0,
              hearts: '',
            }
          }
        
          handleClick = () => {
            this.setState({ votes: this.state.votes + 1 });
            this.setState({hearts: this.state.hearts + '❤️'})
          }
          handleImg= () => {
            this.props.updateBeast(this.props.beast)
          }
        
          render() {
            return (
              <Card> 
                <Card.Img onClick={this.handleImg} variant="top" src={this.props.beast.image_url} alt={this.props.beast.description}/>
                <Card.Body>
                  <Card.Title>{this.props.beast.title}</Card.Title>
                  <Card.Text>
                    {this.props.beast.description}
                  </Card.Text>
                  <Card.Text>
                  Number of votes: {this.state.votes} {this.state.hearts}
                  </Card.Text>
                  <Button onClick={this.handleClick} variant="primary">Vote</Button>
                </Card.Body>
              </Card>
            )
          }
    }