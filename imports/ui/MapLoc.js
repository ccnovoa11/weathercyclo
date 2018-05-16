import React, { Component } from "react";

class MapLoc extends Component {
	constructor(props) {
		super(props);		
	}

	componentDidMount(){				
		if (this.props.latt !== null && this.props.long !== null) {
			console.log(this.props.long);
			console.log(this.props.latt);
			console.log("NOTIENEDATOS???");
		}

		function initMap() {
        var uluru = {lat: this.props.long, lng: this.props.latt};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
	}

	render() {
		return (			
			<div>
				<h2>Ubicación:</h2>
				<div id="map"></div>
				<p>Latitud: {this.props.latt}</p>
				<p>Longitud: {this.props.long}</p>

				<script async defer
					src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtJ3wrietM7n7MkFXju31UkszXcb3ljVw&callback=initMap">
				</script>
			</div>

			
			); 
	}

}

export default MapLoc;