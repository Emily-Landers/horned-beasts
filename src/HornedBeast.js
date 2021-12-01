import React, { Component } from 'react';
import data from './data.json';
    class HornedBeast extends Component {
        constructor(props) {
            super(props);
            this.state = {
              votes: 0,
              beast: {}
              beastData: data
            }
          }
        
          handleClick = () => {
            this.setState({ votes: this.state.votes + 1 });
          }
        
          render() {
            return (
              <div>
                <img src={this.props.img_url} alt={this.props.alt} title={this.props.title}/>
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
                <p>Number of votes: {this.state.votes}</p>
                <button onClick={this.handleClick}>Vote</button>
              </div>
            )
          }
        }
    
    export default HornedBeast;
    