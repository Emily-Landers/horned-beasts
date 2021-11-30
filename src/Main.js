import { Component } from 'react';
import HornedBeast from './HornedBeast'

class Main extends Component {
  render() {
    return (
  <div>
    <HornedBeast title="Water Buffalo" img_url="https://upload.wikimedia.org/wikipedia/commons/c/cf/Serengeti_Bueffel2.jpg" description="Mustache head"/>
    <HornedBeast title="Narwhal" img_url="https://previews.123rf.com/images/lineartestpilot/lineartestpilot1909/lineartestpilot190907578/129368587-rainbow-gradient-line-drawing-of-a-cartoon-narwhal.jpg" description="spooky narwhal"/>
  </div>
    )
  }
}

export default Main;