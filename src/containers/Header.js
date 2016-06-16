import React from 'react';
import HeaderInfo from '../components/HeaderInfo';

var Header = React.createClass({
	render() {
		return (
			<div className="header">
				<HeaderInfo titleText={this.props.titleText} />
			</div>
		)
	}
});

export default Header;