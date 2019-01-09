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
        this.handleLogout = this.handleLogout.bind(this);
    }
    //handle logout to destroy the cookie
    handleLogout = () => {
        cookie.remove('cookieowner', { path: '/' })
    }

    render(){
      console.log("PROPSS" + this.props.value)
        //if Cookie is set render Logout Button
        let navLogin = null;
        let latestpostings = null;
        if(cookie.load('cookieowner')){
            console.log("Able to read cookie");
            latestpostings =(
              <li class="nav-item ">
                   <a class="nav-link lower" href="/owner/latestpostings">Latest Postings<span class="sr-only">(current)</span></a>
            </li>);
            navLogin = (
               <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle lower" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {localStorage.getItem("ownery")}
                </a>
                 <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                     <a class="dropdown-item" href="/owner/account">Account Settings</a>
                     <a class="dropdown-item" href="#">Property details</a>
                     <a class="dropdown-item" href="#">Property archive</a>
                     <a class="dropdown-item" href="/addproperty">Add new property</a>
                     <li><hr></hr></li>
                     <a class="dropdown-item" onClick={this.handleLogout} href="/" >Logout</a>
                </div>
                </li>
            );
        }else{
            //Else display login button
            console.log("Not Able to read cookie");
            navLogin = (
                   <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle lower" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Login
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="/login">Traveler Login</a>
                        <a class="dropdown-item" href="/owner/login">Owner Login</a>
                    </div>
                </li>
            )

        }// end of else
        return(
          <div >          
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <a class="navbar-brand" href="/owner/home"><img alt="HomeAway birdhouse" class="site-header-birdhouse__image lowerimg" role="presentation" src="https://static.savings-united.com/shop/20251/logo/Logo_0062_HomeAway.png" height="150" width="150"/></a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNavDropdown" class="navbar-collapse collapse">
            <ul class="navbar-nav mr-auto">
              
            </ul>
            <ul class="navbar-nav lower">
              <NavDropDown  propertylocation={this.props.properties}/> 
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
               {latestpostings}
               {navLogin}  
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <li class="nav-item">
                &nbsp; &nbsp; &nbsp; 
                <a class="site-header-birdhouse" href="/owner/home" title="Learn more"><img alt="HomeAway birdhouse" class="site-header-birdhouse__image" role="presentation" src="https://lh3.googleusercontent.com/peTB5wWV332_otZJMJ897LqTv2B40lity4VDuStgZ4U8ocCGKUBGisnjSi9TyhXSOydm=s180" height="50" width="50"/></a>          
                </li>
            </ul>
        </div>
    </nav>
</div>

        )
    }
}

//export default Navigation;


/*
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <a class="navbar-brand" href="#">HomeAway</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ">
                      <li class="nav-item ">
                        <a class="nav-link" href="/tripsboard">Trips Board</a>
                      </li>
                       <li class="nav-item"><a class="nav-link" href="/addproperty/location">List your Property</a></li>
                       </ul>
                         <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/login') }}">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/register') }}">Register</a>
                </li>
            </ul>
                  </div>
                </nav>
        </div>

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
                        <li class="active"><a href="/tripsboard">Trips Board<span class="sr-only">(current)</span></a></li>
                        {navLogin}
                        <li><a href="/addproperty/location">List your Property</a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
            </div>

            */
            /*
const OwnerNavigation = ({properties}) => (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <a class="navbar-brand" href="#"><img alt="HomeAway birdhouse" class="site-header-birdhouse__image" role="presentation" src="https://static.savings-united.com/shop/20251/logo/Logo_0062_HomeAway.png" height="150" width="150"/></a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNavDropdown" class="navbar-collapse collapse">
            <ul class="navbar-nav mr-auto">
            </ul>
             <li class="nav-item ">
                   <a class="nav-link" href="/tripsboard">Latest Postings<span class="sr-only">(current)</span></a>
            </li>
                <NavDropDown  propertylocation={properties}/>    
                 <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      My Account
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                     <a class="dropdown-item" href="/owner/account">Account Settings</a>
                     <a class="dropdown-item" href="/property/details">Property details</a>
                     <a class="dropdown-item" href="/traveler/profile">Property archive</a>
                     <a class="dropdown-item" href="/addproperty">Add new property</a>
                     <li><hr></hr></li>
                     <a class="dropdown-item" href="/owner/logout" >Sign Out</a>
                </div>
                </li>
                 <li class="nav-item">
                <a class="site-header-birdhouse" href="/" title="Learn more"><img alt="HomeAway birdhouse" class="site-header-birdhouse__image" role="presentation" src="https://lh3.googleusercontent.com/peTB5wWV332_otZJMJ897LqTv2B40lity4VDuStgZ4U8ocCGKUBGisnjSi9TyhXSOydm=s180" height="50" width="50"/></a>          
                </li>
                  </div>
                </nav>
            </div>

)*/

export default OwnerNavigation;