/*import React from 'react';
import './Places.css';

const Places = ({ id , name, startdate, enddate }) => {
  return (
    <div>
    
    </div>
  );
}
export default Places;

*/

import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Redirect} from 'react-router-dom';
import './Places.css';
import {Route} from 'react-router-dom'
import PlaceDescription from '../PlaceDescription/PlaceDescription';
import  { Carousel, CarouselInner, CarouselItem, View, Container } from 'mdbreact';
import Link from 'react-router-dom/Link';


class Places extends Component {

    constructor(props) {
    super(props);
    this.state = {
      photos : []
    }
  }

  componentDidMount()
  {
        fetch('http://localhost:4004/getPropertyImg', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          credentials : 'include',
          body : JSON.stringify({
            id : this.props.id
          })
        })
        .then(response => response.json())
        .then(data => {
          let imageArr = []
        for (let i = 0; i < data.results.length; i++) {
          let imagePreview = 'data:image/jpg;charset=utf-8;base64, ' + data.results[i];
                                imageArr.push(imagePreview);
                                const photoArr = this.state.photos.slice();
                                photoArr[i] = imagePreview;
                                this.setState({
                                    photos: photoArr
                                });
                                console.log('Photo State: ', this.state.photos);
                  }
        })
  }
  render()
  {
	let redirect_url = "/places/propertydescription/"+this.props.id

    let carousalBlock = this.state.photos.map(function (item, index) {

            return (
                <div className={index == 0 ? "carousel-item active" : "carousel-item"} key={index}>
                    <img className="carousel-img property-display-img" src={item} width="350" height="200" alt="property-image" />
                </div>
            )
        });

        let carousalIndicator = this.state.photos.map(function (item, index) {

            return (                
                    <li data-target="#myCarousel" data-slide-to={index} className={index == 0 ? "active" : ""} key={index}></li>     
            )
        });
      return (
        <div class="card3 card-2" >
          <div class="ui divided items">
          <div class="item">
           <div class="image">
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                <ul className="carousel-indicators">
                                    {carousalIndicator}
                                </ul>
                                <div className="carousel-inner">
                                    {carousalBlock}
                                </div>                     
            </div>
            </div>
            <div class="content descrip">
              <li><Link to={redirect_url} value={this.props.value} onClick={id=>this.props.clicked(this.props.value)} class="header">{this.props.name}</Link></li>
              <div class="meta">  
                <span class="cinema"> Type : {this.props.type}</span>
              </div>
              <div class="description">
                <p> Desciption : {this.props.description}</p>
                <p> Unit :  {this.props.unit}</p>
              </div>
              <div class="extra">
                <div class="ui label">{this.props.bed} Bed</div>
                <div class="ui label">{this.props.bath} Bath</div>
                <div class="ui label">{this.props.rate} per night</div>
              </div>
            </div>
          </div>
          </div>
          </div>
      );
    }
}

export default Places;


/*.  


 
<div class="card3 card-2" >
  <div class="ui items changeimage">
  <div class="item">
        <h4 className="mt-5 mb-2">{props.name}</h4>
     
    <div class="content descrip">
      <a  href={redirect_url} value={props.value} onClick={id=>props.clicked(props.value)} class="header">{props.name}</a>
      <div class="meta">  
        <span class="cinema">{props.type}</span>
      </div>
      <div class="description">
        <p>{props.description}</p>
      </div>
      <div class="extra">
        <div class="ui label">{props.bed} Bed</div>
        <div class="ui label">{props.bath} Bath</div>
        <div class="ui label">{props.price} per night</div>
      </div>
    </div>
  </div>
  </div>
  </div>


<div class="ui divided items">
  <div class="item">
    <div class="image">
      <img src="https://robohash.org/{id}" />
    </div>
    <div class="content">
      <a class="header">{name}</a>
      <div class="meta">
        <span class="cinema">{type}</span>
      </div>
      <div class="description">
        <p>{description}</p>
      </div>
      <div class="extra">
        <div class="ui label">{bed} Bed</div>
        <div class="ui label">{bath} Bath</div>
        <div class="ui label">{price} per night</div>
      </div>
    </div>
  </div>
  <hr />
  </div>
<Route path="/places/description" render={()=>(<PlaceDescription />)} /> 
  	<div class="support-grid">
  	<div class="column" active>
  		<div class="col-md-2">
  	   <img src="https://robohash.org/{id}?size=200x200" class="w-200" />
  	   	</div>
        <div class="col-md-4" class="band card" >
            <div class="card-block px-3 ">
              <a href="" class="card-title"><u>{name}</u></a>
              <br>
              </br>
              <p class="card-text"> Location : {name} </p>
              <p class="card-text"> Starting from : {startdate}</p>
              <p class="card-text"> Type: {type} Bed: {bed} Bath: {bath} </p>
              <p class="card-text"> Desciption : {description} </p>
          </div>
          </div>
     </div>
     </div>




<div class="ui divided items">
  <div class="item">
    <div class="image">
      <img src="/images/wireframe/image.png">
    </div>
    <div class="content">
      <a class="header">12 Years a Slave</a>
      <div class="meta">
        <span class="cinema">Union Square 14</span>
      </div>
      <div class="description">
        <p></p>
      </div>
      <div class="extra">
        <div class="ui label">IMAX</div>
        <div class="ui label"><i class="globe icon"></i> Additional Languages</div>
      </div>
    </div>
  </div>
  </div>




      <div class="column">
        <div class="col-md-8">
            <img src="https://robohash.org/{id}?size=200x200" class="w-200" />
          </div>
         </div>
          <div class="col-md-8 px-3">
            <div class="card-block px-3">
              <a href="" class="card-title"><u>{name}</u></a>
              <br>
              </br>
              <p class="card-text">Location : One South Market at {name} </p>
               <br>
              </br>
              <p class="card-text"> Starting from : {startdate}</p>
               <br>
              </br>
               <br>
              </br>
              <p class="card-text">TYPE BEDROOMS BATHROOM Sleeps SIZE Kitchen type</p>
            </div>
          </div>
      </div>
      </div>
    </div>*/
    /*

HTML  CSS Result
EDIT ON
 <div class="support-grid"></div>

<div class="band">
    <div class="item-1">
          <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" class="card">
            <div class="thumb"></div>
            <article>
              <h1>International Artist Feature: Malaysia</h1>
              <span>Mary Winkler</span>
            </article>
          </a>
    </div>
    <div class="item-2">
          <a href="https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045" class="card">
            <div class="thumb"></div>
            <article>
              <h1>How to Conduct Remote Usability Testing</h1>
              <span>Harry Brignull</span>
            </article>
          </a>
    </div>
    <div class="item-3">
      <a href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724" class="card">
        <div class="thumb"></div>
        <article>
          <h1>Created by You, July Edition</h1>
          <p>Welcome to our monthly feature of fantastic tutorial results created by you, the Envato Tuts+ community! </p>
          <span>Melody Nieves</span>
        </article>
      </a>
    </div>
    <div class="item-4">
          <a href="https://webdesign.tutsplus.com/tutorials/how-to-code-a-scrolling-alien-lander-website--cms-26826" class="card">
            <div class="thumb"></div>
            <article>
              <h1>How to Code a Scrolling “Alien Lander” Website</h1>
              <p>We’ll be putting things together so that as you scroll down from the top of the page you’ll see an “Alien Lander” making its way to touch down.</p>
              <span>Kezz Bracey</span>
            </article>
          </a>
    </div>
    <div class="item-5">
          <a href="https://design.tutsplus.com/tutorials/stranger-things-inspired-text-effect--cms-27139" class="card">
            <div class="thumb"></div>
            <article>
              <h1>How to Create a “Stranger Things” Text Effect in Adobe Photoshop</h1>
              <span>Rose</span>
            </article>
          </a>
    </div>
    <div class="item-6">
      <a href="https://photography.tutsplus.com/articles/5-inspirational-business-portraits-and-how-to-make-your-own--cms-27338" class="card">
        <div class="thumb"></div>
        <article>
          <h1>5 Inspirational Business Portraits and How to Make Your Own</h1>
          
          <span>Marie Gardiner</span>
        </article>
      </a>
    </div>
    <div class="item-7">
      <a href="https://webdesign.tutsplus.com/articles/notes-from-behind-the-firewall-the-state-of-web-design-in-china--cms-22281" class="card">
        <div class="thumb"></div>
        <article>
          <h1>Notes From Behind the Firewall: The State of Web Design in China</h1>
          <span>Kendra Schaefer</span>
        </article>
      </a>
    </div>
  </div>
 VIEW RESOURCES 1×
0.5×
0.25×
 RERUN

    */

