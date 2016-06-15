import React from 'react';

var MenuOption = React.createClass({
	getItemText() {
		return this.props.text;	
	},
	render() {
		var text = this.getItemText();
		return (
			<li className="menuOption">
				{text}
			</li>
		)
	}
});

export default MenuOption;