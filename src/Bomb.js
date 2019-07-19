import React, { Component } from 'react';

export default class Bomb extends Component {

	constructor(props){
		super()
		this.state = {
			secondsLeft: props.initialCount
		}
	}


	render () {

		if(this.state.secondsLeft === 0){
				var bomb = 'Boom!'
			} 
		else{
				var bomb = `${this.state.secondsLeft} seconds left before I go boom!`
			}

		return (	
			<div>
			{bomb}
			</div>
		)
		
	}
}