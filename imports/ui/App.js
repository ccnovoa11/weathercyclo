import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

import Thermometer from "./Thermometer.js";
import DataDays from "./DataDays.js";
import Form from "./Form.js";
import Comentario from "./Comentario.js";
import AccountsUIWrapper from './AccountsUIWrapper.js';
import { Comentarios } from "../api/comentarios.js";

export class App extends Component {

 constructor(props) {
  super(props);
  this.state={
    place: null,
    data: null,
    cityData: null,
    min: null,
    max: null,
    abbr: null,
    img: null,
    current: null,
    dataDays: null,
    latt: null,
    long: null};
  }

  place(place){
    this.setState({place: place});

  }

  componentDidUpdate(){
    if (this.state.place !== null){
      this.callAPI();      
      this.setState({place: null});
    }    
  }



 handleSubmit(event) {
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
    Comentarios.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),           
      username: Meteor.user().username
    }); 
    
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

callAPI() {
  fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query="+ this.state.place)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    this.setState({data: data });
    this.obtainCityData();
  })
  .catch((err) => {console.log(err.message)});
}

obtainCityData() {
  if (this.state.data !== null) {
    fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/"+ this.state.data[0].woeid +"/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      this.setState({min: data.consolidated_weather[0].min_temp});
      this.setState({max: data.consolidated_weather[0].max_temp});
      this.setState({current: data.consolidated_weather[0].the_temp });
      this.setState({abbr: data.consolidated_weather[0].weather_state_abbr});
      this.setState({img: data.consolidated_weather[0].weather_state_name});
      this.setState({dataDays: data.consolidated_weather});

      var lattlong = data.latt_long.split(",");
      this.setState({latt: lattlong[0]});
      this.setState({long: lattlong[1]});

      //console.log(lattlong);
      //console.log("LATT: "+ this.state.latt);
      //console.log("TEMP MIN: "+ this.state.min);
      //console.log("TEMP MAX: "+ this.state.max);
      //console.log("CURRENT TEMP: "+ this.state.current);
    })
    .catch((err) => {console.log(err.message)});
  }
}




mostrarComentarios(){
  return this.props.comentarios.map((comentario) =>(
    <Comentario key={comentario._id} comentario={comentario}/>
    ));
}

  render() {
    return (
      <div className="container">        
        <div className="titulo row">
          <div className="col-sm-10">
            <h1>Navbar</h1>
          </div>
          <div className="col-sm-2">
            <AccountsUIWrapper />
          </div>
        </div>
        <div className="time row">
          <h2>Welcome to weathercyclo</h2>
          <p>Here in weathercyclo you can search for information about the weather of different places.</p>
          <Form place={this.place.bind(this)}></Form>
        </div>

        <div className="titulo row">
          <div className="col-sm-6">
            <Thermometer abbr={this.state.abbr}
                         img={this.state.img} 
                         min={this.state.min} 
                         max={this.state.max} 
                         current={this.state.current}/>
          </div>
          <div className="col-sm-6">        
            <DataDays dataDays = {this.state.dataDays} 
                      lat={this.state.latt} 
                      lon={this.state.long}/>
          </div>
        </div>
      </div>
      );
  }
}

App.propTypes = {
  comentarios: PropTypes.array.isRequired
};

export default withTracker(
  () => {
    Meteor.subscribe("comentarios");
    return {
      comentarios: Comentarios.find({}, { sort: { createdAt: -1 } }).fetch()
    };
  }
  )(App);