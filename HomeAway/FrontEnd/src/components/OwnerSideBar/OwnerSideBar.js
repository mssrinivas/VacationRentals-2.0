import React,{Component} from 'react';
//import './OwnerSideBar.css';
//import {Redirect} from 'react-router-dom';
/*import styles from './OwnerSideBar.css';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';

class OwnerSideBar extends Component {

    constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
  }

    toggleButton = () => {
        console.log("TESSS")
      this.setState({
      isToggleOn: !(this.state.isToggleOn)
    });
  }
    render() {
        let sideElements = null;
        if(this.state.isToggleOn === true)
        {
            sideElements = (<div>
                <ul>
                <li><a href="/traveler/inbox">Inbox</a></li>
                <li><a href="/traveler/trips">My Trips</a></li>
                <li><a href="/traveler/profile">My Profile</a></li>
                <li><a href="/traveler/account">Account</a></li>
                </ul>
                </div>)
        }
        return ( 
            <div id="sidebar">
            <div class = "toggle-btn" onClick={this.toggleButton}>
                <span></span>
                <span></span>
                <span></span>
                {sideElements}
            </div>
            </div>
    )   
}

} */


import { slide as Menu } from 'react-burger-menu'
import './OwnerSideBar.css';
class OwnerSideBar extends React.Component {
 
  render () {
    return (
        <div id="positionleft">
          <Menu className="bm-menu" >
            <a id="home" className="bm-item-list" href="/properties/list" activeClassName="active">Select a property</a>
            <a id="about" className="bm-item-list" href="/owner/dasboard" activeClassName="active">Dashboard</a>
            <a id="contact" className="bm-item-list" href="/owner/inbox" activeClassName="active">Inbox</a>
            <a id="home" className="bm-item-list" href="/" activeClassName="active">Calenders</a>
            <a id="about" className="bm-item-list" href="#" activeClassName="active">MarketMaker</a>
            <a id="contact" className="bm-item-list" href="#" activeClassName="active">Reservation manager</a>
            <a id="contact" className="bm-item-list" href="#" activeClassName="active">Property</a>
          </Menu>
      </div>
    );
  }
}


export default OwnerSideBar;