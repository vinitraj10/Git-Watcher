import React,{Component} from "react";
import {connect} from  "react-redux";

class Content extends Component{
	render(){
		if(!this.props.git.user){
			return(
				<div className = "container">
					<div className = "columns content">
						<div className = "column col-3"></div>
						<div className = "column col-6">
						<h1>Search For User:-</h1>
						</div>
					</div>
				</div>
			);
		}
		else{
			return (
				<div className = "container">
					<div className = "columns content">
						<div className = "column col-3"></div>
						<div className = "column col-6">
							<figure className="avatar avatar-xl">
							  <img src={this.props.git.user.avatar_url}/>
							</figure>
						</div>
					</div>
				</div>
			);
		}
	}
}

function mapStateToProps(state){
	return {
		git:state.git
	}
}
export default connect(mapStateToProps)(Content);