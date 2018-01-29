import React from "react";
import {connect} from 'react-redux';
import {getDataRequest} from "../actions/UsersAction";
import {FormGroup, PageHeader, FormControl} from "react-bootstrap";


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
			<form>
				<FormGroup>
					<PageHeader>Выберите файл</PageHeader>
					<FormControl
						type="file"
						onChange={this.handleChange.bind(this)}
					/>
					<FormControl.Feedback/>
				</FormGroup>
			</form>
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