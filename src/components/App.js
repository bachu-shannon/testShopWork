import React from "react";
import {connect} from 'react-redux';
import Form from "./Form";
import {updateDataRequest} from "../actions/UsersAction";
import {Table} from 'semantic-ui-react';
import User from './User';

class Users extends React.Component {
	saveUser(item, index) {
		const data = this.props.data.data;
		data[index] = item;
		this.props.updateDataRequest(data);
	}

	deleteUser(deletingItem) {
		const data = this.props.data.data;
		const elementIndex = data.indexOf(deletingItem);
		data.splice(elementIndex, 1);
		this.props.updateDataRequest(data);
	}

	renderUsers() {
		let tableHeaderTitles = Object.keys(this.props.data.data[0]);
		return (
			<Table celled>
				<Table.Header>
					<Table.Row>
						{tableHeaderTitles.map((title, index) => {
							if (title !== undefined)
								return <Table.HeaderCell key={index}>{title}</Table.HeaderCell>;
						})}
						<Table.HeaderCell colSpan="2" key="actions">Actions</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{this.props.data.data.map((user, index) => {
						return <User
							key={index + '-user'}
							index={index}
							item={user}
							saveUser={this.saveUser.bind(this)}
							deleteUser={this.deleteUser.bind(this)}
						/>
					})}
				</Table.Body>
			</Table>
		)
	}

	render() {
		return (this.props.data.fetched) ?
			this.renderUsers() :
			<Form/>;
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateDataRequest: (data) => dispatch(updateDataRequest(data)),
	}
};

const mapStateToProps = (state) => {
	return {
		data: state.data,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);