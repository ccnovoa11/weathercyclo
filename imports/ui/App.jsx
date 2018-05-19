import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar";
import { Meteor } from "meteor/meteor";
import Login from "./components/Login";
import { Accounts } from 'meteor/accounts-base';
import Thermometer from "./components/Thermometer.js";
import DataDays from "./components/DataDays.js";
import Form from "./components/Form.js";

class App extends Component {
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

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>Bienvenido a weathercyclo</h1>
          <h5>En weathercyclo puedes consultar los datos climáticos de un lugar, poner a prueba tus conocimientos y aprender cosas nuevas!</h5>
          <div className = "time">
            <Form place={this.place.bind(this)}></Form>
          </div>
        </div>

        <div className="titulo row">
          <div className="col s6">
            <Thermometer abbr={this.state.abbr}
                         img={this.state.img} 
                         min={this.state.min} 
                         max={this.state.max} 
                         current={this.state.current}/>
          </div>
          <div className="col s6">        
            <DataDays dataDays = {this.state.dataDays} 
                      lat={this.state.latt} 
                      lon={this.state.long}/>
          </div>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
  };
})(App);
