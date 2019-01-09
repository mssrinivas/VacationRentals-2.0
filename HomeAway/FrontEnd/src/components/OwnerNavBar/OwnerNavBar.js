import React from 'react';
import './OwnerNavBar.css';

const OwnerNavBar = () => {
  return(
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
                        <li class="active"><a href="/tripsboard">Select a Property<span class="sr-only">(current)</span></a></li>
                       <li class="dropdown navbar-right">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">My Account<span class="caret"></span></a>
                          <ul class="dropdown-menu" role="menu">
                               <li><a href="/traveler/inbox">Account Settings</a></li>
                               <li><a href="/traveler/trips">Property details</a></li>
                               <li><a href="/traveler/profile">Property archive</a></li>
                               <li><a href="/traveler/account">Add new property</a></li>
                               <li><a href="/owner/login" >Sign out</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
            </div>
    )
}

export default OwnerNavBar;

