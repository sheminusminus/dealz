import React from 'react';

var MenuOption = React.createClass({
	// get the text for this option
	getItemText() {
		return this.props.text;	
	},
	// get the class names for this option
	getItemClasses() {
		if (this.props.active) {
			return "menuOption active";
		}	
		return "menuOption";
	},
	render() {
		var classes = this.getItemClasses();
		var text = this.getItemText();
		return (
			<li className={classes}>
				<a href="#" className="optionAnchor" onClick={this.props.selectNew} data-optionIndex={this.props.index}>
					{text}
				</a>
			</li>
		)
	}
});

export default MenuOption;