import React, { Component } from 'react';
import { Curiosidades } from '../../api/curiosidades.js';

// Task component - represents a single todo item
export default class Curiosidad extends Component {

	render() {
		return (
			<div>
				<div className ="curiosidad col s6">	            	
	            	<p> 
	            		{this.props.curiosidades.text}
	            	</p>
	            </div>
			</div>
			);
	}
}