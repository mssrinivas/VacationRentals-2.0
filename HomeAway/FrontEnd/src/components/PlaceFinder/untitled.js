import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import NavDropDown from './NavDropDown'
import OwnerSideBar from '../OwnerSideBar/OwnerSideBar'

//create the Navbar Component
class OwnerNavigation extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let redirectVar = null;
        let listofproperties = null;
        if(cookie.load('cookie')){
            redirectVar = <Redirect to="/home"/>
        }
        return(
            <div>
                <div class="navclass">
                  <nav class="navbar navbar-default" role="navigation">
                  <div class="container-fluid">
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                      <a class="navbar-brand" href="/">Home Away</a>
                    </div>
                    <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
                      <ul class="nav navbar-nav">
                       <NavDropDown />
                      <li class="dropdown navbar-right">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">My Account<span class="caret"></span></a>
                          <ul class="dropdown-menu" role="menu">
                               <li><a href="/traveler/inbox">Account Settings</a></li>
                               <li><a href="/property">Property details</a></li>
                               <li><a href="#">Property archive</a></li>
                               <li><a href="/addproperty">Add new property</a></li>
                               <li><a href="/owner/login" >Sign out</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
            </div>
            <h1>{this.props.propertylocation}</h1>
            </div>
        )
    }
}

export default OwnerNavigation;