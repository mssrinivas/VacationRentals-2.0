
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
import './OwnerPropertyPlaces.css';
import {Route} from 'react-router-dom'
import PlaceDescription from '../PlaceDescription/PlaceDescription';
import  { Carousel, CarouselInner, CarouselItem, View, Container } from 'mdbreact';


class OwnerPropertyPlaces extends Component {

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

    let carousalBlock = this.state.photos.map(function (item, index) {

            return (
                <div className={index == 0 ? "carousel-item active" : "carousel-item"} key={index}>
                    <img className=" carousel-img property-display-img" src={item} width="350" height="200" alt="property-image" />
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
              <a class="header">{this.props.name}</a>
              <div class="meta">  
                <span class="cinema">Type : {this.props.type}</span>
              </div>
              <div class="description">
                <p>Description : {this.props.description}</p>
                <p>Unit : {this.props.unit}</p>
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


export default OwnerPropertyPlaces;
