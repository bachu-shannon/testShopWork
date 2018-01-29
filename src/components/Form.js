import React from "react";
import {connect} from 'react-redux';
import {getDataRequest} from "../actions/UsersAction";
import {Input} from 'semantic-ui-react';


class Form extends React.Component {

	handleChange(event) {
		const dataLoad = this.props.dataLoad;
		const reader = new FileReader();
		reader.onload = function (e) {
			const dataFile = JSON.parse(e.target.result);
			dataLoad(dataFile);
		};
		reader.readAsText(event.target.files[0]);
	}

	render() {
		return (
			<Input
				type="file"
				onChange={this.handleChange.bind(this)}
			/>
		)
	}

}

const mapDispatchToProps = (dispatch) => {
	return {
		dataLoad: (data) => dispatch(getDataRequest(data)),
	}
};

const mapStateToProps = (state) => {
	return {
		data: state.data,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);