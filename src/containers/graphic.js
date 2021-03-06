import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getRepos} from "../actions/gitwatcher";
import Graph from "./graph.js";
import Fetching from "../components/static/fetching";
import Nodata from "../components/static/nodata";

class Graphic extends Component{
	componentDidMount() {
		const username = this.props.username;
		this.props.getRepos(username);
	}
	render(){
		const isFetching = this.props.repo.isFetching;
		const isFetched = this.props.repo.isFetched;
		return(
			<div className="container">
				{isFetching?(<Fetching/>):(isFetched?(<Graph/>):(<Nodata/>))}
			</div>
		);
	}

}

function mapStateToProps(state){
	return {
		git:state.git,
		repo:state.repo
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({getRepos},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Graphic);