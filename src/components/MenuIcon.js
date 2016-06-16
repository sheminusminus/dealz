import React from 'react';

var MenuIcon = React.createClass({
	render() {
		var toggleElement = "side-menu";
		var toggleClass="open";
		return (
			<div className="icon menuIcon" onClick={this.props.iconClick}>
			</div>
		)
	}
});

export default MenuIcon;