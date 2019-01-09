import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import './Navigation.css'

//create the Navbar Component
class Navigation extends Component {
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    //handle logout to destroy the cookie
    handleLogout = () => {
        cookie.remove('cookie', { path: '/' })
    }

    render(){
      console.log("PROPSS" + this.props.value)
        //if Cookie is set render Logout Button
        let navLogin = null;
        let tripsboard = null;
        if(cookie.load('cookie')){
            console.log("Able to read cookie");
            tripsboard =(
              <li class="nav-item nav-link lower" >
                   <li ><Link to="/tripsboard"><p>Trips Board</p><span class="sr-only">(current)</span></Link></li>
            </li>)
            navLogin = (
               <li class="nav-item dropdown ">
                <a class="nav-link dropdown-toggle lower " href="Dashboard" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {this.props.value}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                     <a class="dropdown-item "><Link to="/inbox" >Inbox</Link></a>
                     <a class="dropdown-item" ><Link to="/tripsboard">My Trips</Link></a>
                     <a class="dropdown-item" ><Link to="/traveller/accounty">My Profile</Link></a>
                     <a class="dropdown-item" ><Link to="#">Account</Link></a>
                     <li><hr></hr></li>
                     <a class="dropdown-item" ><Link to="/owner/login">Owner Dashboard</Link></a>
                     <li><hr></hr></li>
                     <a class="dropdown-item" onClick={this.handleLogout} ><Link to="/">Logout</Link></a>
                </div>
                </li>
            );
        }else{
            //Else display login button
            console.log("Not Able to read cookie");
            navLogin = (
                   <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle lower" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     <p class="backwhite"> Login </p>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" ><Link to="/login">Traveler Login</Link></a>
                        <a class="dropdown-item" ><Link to="/owner/login">Owner Login</Link></a>
                    </div>
                </li>
            )

        }// end of else
        
        return(
          <div >          
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <a class="navbar-brand" href="/home"><img alt="HomeAway birdhouse" class="site-header-birdhouse__image " role="presentation" src="https://static.savings-united.com/shop/20251/logo/Logo_0062_HomeAway.png" height="150" width="150"/></a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNavDropdown" class="navbar-collapse collapse">
            <ul class="navbar-nav mr-auto">
            </ul>
            <ul class="navbar-nav">
               {tripsboard}
               {navLogin}
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <li class="nav-item">
                <a class="btn btn-outline-primary bgwhite roundy" href="/owner/login" role="button">List a Property</a> 
                &nbsp; &nbsp; &nbsp; 
                <a class="site-header-birdhouse lower" href="/home" title="Learn more"><img alt="HomeAway birdhouse" class="site-header-birdhouse__image" role="presentation" src="https://lh3.googleusercontent.com/peTB5wWV332_otZJMJ897LqTv2B40lity4VDuStgZ4U8ocCGKUBGisnjSi9TyhXSOydm=s180" height="50" width="50"/></a>          
                </li>
            </ul>
        </div>
    </nav>
</div>

        )
    }
}

export default Navigation;


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