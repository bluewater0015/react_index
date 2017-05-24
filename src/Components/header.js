
import "../css/reset.css";
import "../css/common.css";
import React,{ Component } from "react";
import { render } from "react-dom";
import Input from "./input";
export default class Header extends Component{
	render(){
		return(
			<div className="header center">
				<Input />
			</div>
		)
	}
}

