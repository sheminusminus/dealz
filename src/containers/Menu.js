import React from 'react';
import MenuOption from '../components/MenuOption';

var Menu = React.createClass({
	makeOptions() {
		var options = [];
		for (var i = 0; i < this.props.options.length; i++) {
			var k = 'opt' + i;
			options.push(
				<MenuOption index={i} key={k} text={this.props.options[i]} />	
			);
		}
		return options;
	},
	render() {
		var options = this.makeOptions();
		return (
			<ul className="menu">
				{options}
			</ul>
		)
	}
});

export default Menu;