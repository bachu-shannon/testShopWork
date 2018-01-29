import React from "react";
import {Table, Button, Input} from 'semantic-ui-react';

export default class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editingItem: {},
			isEditing: false
		};
	}

	onHandleChange(event) {
		const editInputName = event.target.name;
		let editInputValue = event.target.value;
		const editingItem = this.state.editingItem;

		(editInputName === 'candidateNeedOffer') ? editInputValue = parseInt(editInputValue) : editInputValue;

		editingItem[editInputName] = editInputValue;
		this.setState({
			editingItem
		});
	}

	onEditClick() {
		this.setState({
			isEditing: true
		});
	}

	onCancelClick() {
		this.setState({
			isEditing: false
		})
	}

	onSaveClick() {
		const editItem = {...this.props.item, ...this.state.editingItem};
		this.props.saveUser(editItem, this.props.index);
		this.setState({
			isEditing: false
		});
	}

	onDeleteClick(e) {
		e.preventDefault();
		this.props.deleteUser(this.props.item);
		this.setState({
			isEditing: false
		})
	}

	renderCellUser() {
		const listItemKey = Object.keys(this.props.item);
		return listItemKey.map((key) => {
			if (this.state.isEditing) {
				return (
					(key === 'id') ?
						<Table.Cell key={'user-' + this.props.index + '-' + key}>
							{this.props.item[key]}
						</Table.Cell> :
						<Table.Cell key={'user-edit-' + this.props.index + '-' + key}>
							<Input size='small' name={key} defaultValue={this.props.item[key]}
								   onChange={this.onHandleChange.bind(this)}/>
						</Table.Cell>
				)
			}
			return (
				<Table.Cell key={'user-' + this.props.index + '-' + key}>
					{this.props.item[key]}
				</Table.Cell>
			)
		});
	}

	renderButtonsUser() {
		if (this.state.isEditing) {
			return [
				<Table.Cell key={'user-' + this.props.index + '-save'}>
					<Button compact color='blue' onClick={this.onSaveClick.bind(this)}>save</Button>
				</Table.Cell>,
				<Table.Cell key={'user-' + this.props.index + '-cancel'}>
					<Button compact color='red' onClick={this.onCancelClick.bind(this)}>cancel</Button>
				</Table.Cell>
			]
		}
		return [
			<Table.Cell key={'user-' + this.props.index + '-edit'}>
				<Button compact color='blue' onClick={this.onEditClick.bind(this)}>edit</Button>
			</Table.Cell>,
			<Table.Cell key={'user-' + this.props.index + '-delete'}>
				<Button compact color='red' onClick={this.onDeleteClick.bind(this)}>delete</Button>
			</Table.Cell>
		]
	}

	renderUser() {
		return (
			<Table.Row>
				{this.renderCellUser()}
				{this.renderButtonsUser()}
			</Table.Row>
		)
	}

	render() {
		return this.renderUser();
	}
}