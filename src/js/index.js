//index.js
import "../css/reset.css";
import "../css/common.css";
import React,{ Component } from "react";
import { render } from "react-dom";

//var react = requie("react");
//var React = require("react");
//var ReactDOM = require("react-dom");
import Header from "../Components/header";
import Content from "../Components/content";
import Footer from "../Components/footer";

class Main extends Component{
	render(){
		return (
			<div className="container">
				<Header />
				<Content url = "http://datainfo.duapp.com/shopdata/getGoods.php" />
				<Footer />
			</div>
		)
	}
}
render(
	<Main />,
	document.getElementById("root")
);
