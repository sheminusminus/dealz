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
			menuOptions: ['home', 'market', 'maps', 'groups', 'account']
		});
	},
	// what happens when the menu icon is clicked
	toggleMenu(evt) {
		this.setState({
			menuOpen: !this.state.menuOpen
		});
	},
	// what happens when a new menu option is selected
	menuSelection(evt) {
		var selection = parseInt(evt.target.getAttribute('data-optionIndex'));
		this.setState({
			activeOption: selection		
		});
		var that = this;
		setTimeout(function() {
			that.toggleMenu();
		}, 240);
	},
	render() {
		var menuOptions = this.state.menuOptions;
		var activeOption = this.state.activeOption;
		var menuOpen = this.state.menuOpen;
		var headerTitle = activeOption > 0 ? menuOptions[activeOption] : "apptitle";
		return (
			<div className="appBase">
				<div className="container">
					<Header titleText={headerTitle} />
					<SideMenu iconClick={this.toggleMenu} options={menuOptions} selectNew={this.menuSelection} active={activeOption} open={menuOpen} />
					<Footer />
				</div>
			</div>
		)
	}
});

export default AppBase;