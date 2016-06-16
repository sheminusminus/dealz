import React from 'react';

var MenuOption = React.createClass({
	getItemText() {
		return this.props.text;	
	},
	render() {
		var classes = "menuOption";
		var text = this.getItemText();
		if (this.props.active) {
			classes += " active";
		}
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