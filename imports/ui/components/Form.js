import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state={
			place: null
		};

	}

	getPlace(event){
		this.setState({place: event.target.value});
	}

	handleSubmit( ) {
		const place = this.state.place;
		this.props.place(place);
		//const m = this.state.peleador1+ " vs " + this.state.peleador2;
		//console.log(m);
	}

	render() {
		return (			
			<div className = "formulario">
				<div>
					<input className="form" 
						placeholder = "Search a place"
                		onChange={(evt)=>this.getPlace(evt)}
                		required/>
                	<br/>
                	<button className="btn btn-primary waves-effect waves-light"
              				type="submit"
                			id="boton" 
                			onClick={()=>this.handleSubmit()}>GO</button>
             	</div>
            </div>	
			); 
	}

}

export default Form;