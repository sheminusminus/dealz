import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

var AppBase = React.createClass({

	render() {
		var menuOptions = ['Home', 'Marketplace', 'Maproom'];
		return (
			<div className="appBase">
				<Header />
				<Menu options={menuOptions} />
				<Footer />
			</div>
		)
	}
});

export default AppBase;