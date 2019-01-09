import React from 'react';
import OwnerNavBar from '../OwnerNavBar/OwnerNavBar';
import OwnerSideBar from '../OwnerSideBar/OwnerSideBar';
import OwnerProperty from '../OwnerProperty/OwnerProperty';
import './OwnerDashBoard.css'
import OwnerNavigation from '../OwnerNavigation/OwnerNavigation';
import NavDropDown from '../OwnerNavigation/NavDropDown'
import {Redirect} from 'react-router'
import cookie from 'react-cookies'
import OwnerPropertyPlaces from '../OwnerPropertyPlaces/OwnerPropertyPlaces'

class OwnerDashBoard extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      property: [],
      propertylocation : [],
      redirect : false,
      currentPage: 1,
      todosPerPage: 2
    }
      this.handleClickPage = this.handleClickPage.bind(this);
    }
  
    handleClickPage(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }


  componentDidMount() {
    var result = []
    fetch('http://localhost:4004/mypropertylistings/' + localStorage.getItem("ownery"))
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
    let redirect = null;
    if(!cookie.load('cookieowner'))
    {
      redirect = (<Redirect to="/owner/login" />)
    }

    const { currentPage, todosPerPage } = this.state;

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = this.state.placeslist.slice(indexOfFirstTodo, indexOfLastTodo);

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.property.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <button class="backgroundbutt btn"
              key={number}
              id={number}
              onClick={this.handleClickPage}
            class="colorful">{number}</button>
          );
        });

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
      {redirect}
      <div>
      <OwnerNavigation properties={this.state.propertylocation}  />
      </div>
      <br />
      <hr />
      <div>
      </div>
      <div id="bodydiv" >
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

export default OwnerDashBoard;