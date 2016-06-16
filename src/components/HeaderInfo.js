import React from 'react';

var HeaderInfo = React.createClass({
	render() {
		return (
			<h1 className="pageTitle">{this.props.titleText}</h1>
		)
	}
});

export default HeaderInfo;