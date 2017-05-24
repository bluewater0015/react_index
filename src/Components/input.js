


import React,{ Component } from "react";
import { render } from "react-dom";

export default class Input extends Component {
	render(){
		return (
			<div className="input_box center">
				<input className="input" type="text" placeholder="请输入" />
			</div>
		)
	}
}