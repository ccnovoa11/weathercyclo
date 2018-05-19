import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

import Navbar from "./Navbar";
import Curiosidad from "./Curiosidad.js";
import { Curiosidades } from "../../api/curiosidades.js";

export class ListaCuriosidades extends Component {

 constructor(props) {
  super(props);
}

handleSubmit(event) {
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
    Curiosidades.insert({
      text,
      createdAt: new Date()
    }); 
    
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  puede(){
    if (Meteor.user()) {
      return (
        <div>
        <p className = "zonaComentario">¿Sabes algo más que no está acá? ¡Cuéntanos!</p>
              <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
              <input
                type="text"
                ref="textInput"
                placeholder="Curiosidad..."/>
              </form>
        </div>
      );
    }
  }

mostrarCuriosidades(){
  return this.props.curiosidades.map((curiosidad) =>(
    <Curiosidad key={curiosidad._id} curiosidades={curiosidad}/>
    ));
}

  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">        
          <div className="titulo row">
              <h1>Curiosidades:</h1>
          </div>

          <div className="titulo row">              
              {this.puede()}      
              {this.mostrarCuriosidades()}
          </div>
        </div>
      </div>
      );
  }
}

ListaCuriosidades.propTypes = {
  curiosidades: PropTypes.array.isRequired
};

export default withTracker(
  () => {
    Meteor.subscribe("curiosidades");
    return {
      curiosidades: Curiosidades.find({}, { sort: { createdAt: -1 } }).fetch()
    };
  }
  )(ListaCuriosidades);