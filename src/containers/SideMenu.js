import React from 'react';
import MenuOption from '../components/MenuOption';
import MenuIcon from '../components/MenuIcon';

var SideMenu = React.createClass({
	getMenuOptions() {
		var options = [];
		for (var i = 0; i < this.props.options.length; i++) {
			var k = 'opt' + i;
			var isActive = this.props.active == i ? true : false;			
			options.push(
				<MenuOption selectNew={this.props.selectNew} active={isActive} index={i} key={k} text={this.props.options[i]} />	
			);
		}
		return options;
	},
	// get classnames for the menu
	getMenuClasses() {
		if (this.props.open) {
			return "sideMenu open";
		}
		return "sideMenu";
	},
	// get classnames for the interior list
	getMenuListClasses() {
		if (this.props.open) {
			return "menuList open";
		}
		return "menuList";	
	},
	render() {
		var options = this.getMenuOptions();
		var menuClasses = this.getMenuClasses();
		var menuListClasses = this.getMenuListClasses();
		return (
			<div className={menuClasses} id="side-menu">
				<MenuIcon iconClick={this.props.iconClick} />
				<ul className={menuListClasses}>
					{options}
				</ul>
			</div>
		)
	}
});

export default SideMenu;