import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import Footer from './Footer';

var AppBase = React.createClass({
	getInitialState() {
		return {
			menuOpen: false,
			menuOptions: [],
			activeOption: 0,
			userInfo: {}
		};
	},
	componentWillMount() {
		this.setState({
			menuOptions: ['Home', 'Market', 'Maps', 'Groups', 'Account']
		});
	},
	toggleMenu(evt) {
		this.setState({
			menuOpen: !this.state.menuOpen
		});
	},
	menuSelection(evt) {
		var selection = parseInt(evt.target.getAttribute('data-optionIndex'));
		this.setState({
			activeOption: selection		
		});
		this.toggleMenu();
	},
	render() {
		var menuOptions = this.state.menuOptions;
		var activeOption = this.state.activeOption;
		var menuOpen = this.state.menuOpen;
		return (
			<div className="appBase">
				<div className="container">
					<Header />
					<SideMenu iconClick={this.toggleMenu} options={menuOptions} selectNew={this.menuSelection} active={activeOption} open={menuOpen} />
					<Footer />
				</div>
			</div>
		)
	}
});

export default AppBase;