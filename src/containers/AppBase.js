import React from 'react';
import Header from './Header';
import Footer from './Footer';

var AppBase = React.createClass({
	render() {
		return (
			<div className="appBase">
				<Header />
				
				<Footer />
			</div>
		)
	}
});

export default AppBase;