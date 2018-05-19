import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Navbar from "./Navbar";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import Viejas from "./Viejas";
class Jugar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="time">
            <div className="container">
              <h3>Explicación:</h3>
              <ol className ="lista">
                <li>Debes iniciar una partida, una vez iniciada tienes que esperar
                que otra persona se conecte y así poder comenzar a jugar.</li>
                <li>El juego consiste en 5 preguntas de opción múltiple con 4 posibles respuestas.</li>
                <li>El resultado se conocerá una vez que ambos jugadores acaben de responder las 5 preguntas.</li>
                <li>Al finalizar, podrás observar tus resultados en tu historial de partidas.</li>                
              </ol>
              <br />
            </div>
          </div>

          <div className="time">
            <h3>¿Te sientes preparado?, entonces...</h3>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={() => FlowRouter.go("/Partida")}
            >
              A jugar!
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col s8">
            <div className="container">
              <h3>Partidas jugadas:</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="container">
              <Viejas />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jugar;
