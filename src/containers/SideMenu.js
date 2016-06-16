import React from 'react';
import MenuOption from '../components/MenuOption';
import MenuIcon from '../components/MenuIcon';

var SideMenu = React.createClass({
	makeOptions() {
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
	render() {
		var options = this.makeOptions();
		var menuClasses = "sideMenu";
		var menuListClasses ="menuList";
		if (this.props.open) {
			menuClasses += " open";
			menuListClasses += " open";
		}
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