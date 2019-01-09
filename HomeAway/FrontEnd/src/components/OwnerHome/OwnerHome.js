import React from 'react';
import OwnerNavBar from '../OwnerNavBar/OwnerNavBar';
import OwnerSideBar from '../OwnerSideBar/OwnerSideBar';
import OwnerProperty from '../OwnerProperty/OwnerProperty';
import OwnerNavigation from '../OwnerNavigation/OwnerNavigation';
import NavDropDown from '../OwnerNavigation/NavDropDown'
import './OwnerHome.css'
import {Redirect} from 'react-router';
import cookie from 'react-cookies'
import OwnerPropertyPlaces from '../OwnerPropertyPlaces/OwnerPropertyPlaces'

class OwnerHome extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      property: [],
      propertylocation : [],
      currentPage: 1,
      todosPerPage: 2
    };
    this.handleClickPage = this.handleClickPage.bind(this);
  }

  handleClickPage(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  componentDidMount() {
    var result = []
    fetch('http://localhost:4004/allpropertylisting/' + localStorage.getItem("ownery"))
    .then((response) => response.json())
    .then((responseJson) => {
       console.log(responseJson);
      for(var i=0;i<responseJson.length;i++){
        console.log(responseJson[i].name)
        result.push({value:responseJson[i].name, text:responseJson[i].name})
    }
    console.log(result)
    this.setState({property : responseJson});
    this.setState({propertylocation : result});
  })
  }
  render() {
    let Redirect_to_login = null;
    if(!cookie.load('cookieowner'))
    {
      Redirect_to_login = (<Redirect to="/owner/login" />)
    }
    const { currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    let currentTodos = null;
    let renderPageNumbers = null;
    if(this.state.property===null)
        currentTodos = null;
    else
   {   currentTodos = this.state.property.slice(indexOfFirstTodo, indexOfLastTodo);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.property.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }
        renderPageNumbers = pageNumbers.map(number => {
          return (
            <button class="backgroundbutt btn"
              key={number}
              id={number}
              onClick={this.handleClickPage}
            class="colorful">{number}</button>
          );
        });
      }

        let redirecty_value = null;
        redirecty_value  = (
          <div class="middle">
           <table class="tabledef">
           <tbody>
           {
             currentTodos.map((trip, index) => {
                 return (
                   <OwnerPropertyPlaces
                      key={index}
                     id={trip.id}
                     name={trip.name}
                     type={trip.type}
                     location={trip.location}
                     bed={trip.bed}
                     bath={trip.bath}
                     description={trip.description}
                     startdate={trip.startdate}
                     enddate={trip.enddate}
                     rate={trip.rate}
                     unit={trip.unit}
                   />
                 );
               })
             }
             </tbody>
             </table>
           </div>
         );

    return (
      <div>
      {Redirect_to_login}
      <div>
      <OwnerNavigation properties={this.state.propertylocation}  />
      </div>
      <div class="divide">
      <hr />
      </div>
      <div class="silevrback">
      {/*<OwnerProperty properties={this.state.property}/>*/}
      {redirecty_value}
      </div>
      <div class="centerofpage">
            <ul id="pagenumbers">
              {renderPageNumbers}
            </ul>
            </div> 
      </div>
    );
  }
}

export default OwnerHome;