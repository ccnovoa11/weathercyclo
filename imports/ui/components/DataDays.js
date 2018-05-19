import React, { Component } from "react";

class DataDays extends Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate(){
		/*if (this.props.lat !== null && this.props.lon !== null && this.props.dataDays !== null){
			console.log("VAMOAVER");
			console.log(this.props.lat);
			console.log(this.props.lon);
			console.log(this.props.dataDays[1]);
		}*/			
	}

	information1(){
		if(this.props.dataDays !== null){
			var imagen = "https://www.metaweather.com/static/img/weather/png/64/"+this.props.dataDays[1].weather_state_abbr+".png";
			var imagen2 = "https://www.metaweather.com/static/img/weather/png/64/"+this.props.dataDays[2].weather_state_abbr+".png";

			return (
				<div className="row">
					<div className="time col s6">
						<h4> {this.props.dataDays[1].applicable_date} </h4>						
						<div className="row">
							<div className="col s6">
								<img className="time" 
									 src= {imagen}/>
							</div>
							<div className="col s6">
								<br/>	
								<p> {this.props.dataDays[1].weather_state_name} </p>
							</div>
						</div>
						<br/>
						<p> Max: {this.props.dataDays[1].max_temp.toFixed(2)} °C</p>
						<p> Min: {this.props.dataDays[1].min_temp.toFixed(2)} °C</p>
					</div>
					<div className="time col s6">
						<h4> {this.props.dataDays[2].applicable_date} </h4>						
						<div className="row">
							<div className="col s6">
								<img className="time" 
									 src= {imagen2}/>
							</div>
							<div className="col s6">
								<br/>	
								<p> {this.props.dataDays[2].weather_state_name} </p>
							</div>
						</div>
						<br/>
						<p> Max: {this.props.dataDays[2].max_temp.toFixed(2)} °C</p>
						<p> Min: {this.props.dataDays[2].min_temp.toFixed(2)} °C</p>
					</div>
				</div>
				);
		}
	}

	information2(){
		if(this.props.dataDays !== null){
			var imagen = "https://www.metaweather.com/static/img/weather/png/64/"+this.props.dataDays[3].weather_state_abbr+".png";
			var imagen2 = "https://www.metaweather.com/static/img/weather/png/64/"+this.props.dataDays[4].weather_state_abbr+".png";

			return (
				<div className="row">
					<div className="time col s6">
						<h4> {this.props.dataDays[3].applicable_date} </h4>
						<div className="row">
							<div className="col s6">
								<img className="time" 
									 src= {imagen}/>
							</div>
							<div className="col s6">
								<br/>	
								<p> {this.props.dataDays[3].weather_state_name} </p>
							</div>
						</div>
						<br/>
						<p> Max: {this.props.dataDays[3].max_temp.toFixed(2)} °C</p>
						<p> Min: {this.props.dataDays[3].min_temp.toFixed(2)} °C</p>
					</div>
					<div className="time col s6">
						<h4> {this.props.dataDays[4].applicable_date} </h4>						
						<div className="row">
							<div className="col s6">
								<img className="time" 
									 src= {imagen2}/>
							</div>
							<div className="col s6">
								<br/>	
								<p> {this.props.dataDays[4].weather_state_name} </p>
							</div>
						</div>
						<br/>
						<p> Max: {this.props.dataDays[4].max_temp.toFixed(2)} °C</p>
						<p> Min: {this.props.dataDays[4].min_temp.toFixed(2)} °C</p>
					</div>
				</div>
				);
		}
	}

	latlong(){
		if(this.props.lat !== null && this.props.lon !==null){
			return(
				<div className="time">
					<h2>Ubicación:</h2>
					<p>Latitud: {this.props.lat}</p>
					<p>Longitud: {this.props.lon}</p>
				</div>
				);
		}

	}

	render() {
		return (			
			<div>
				{this.latlong()}
				{this.information1()}
				{this.information2()}
			</div>		
			); 
	}

}

export default DataDays;