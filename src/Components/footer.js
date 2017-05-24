
import React,{ Component } from "react";
import { render } from "react-dom";

export default class Footer extends Component{
	render(){
		return(
			<div className="footer center">
				<ul className="list">
					<li className="lis center">首页</li>
					<li className="lis center">分类</li>
					<li className="lis center">Y-Club</li>
					<li className="lis center">购物车</li>
					<li className="lis center">我的</li>
				</ul>
			</div>
		)
	}
}