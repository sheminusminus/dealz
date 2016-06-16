import React from 'react';

var MenuIcon = React.createClass({
	render() {
		return (
			<div className="icon menuIcon" onClick={this.props.iconClick}>
			</div>
		)
	}
});

export default MenuIcon;