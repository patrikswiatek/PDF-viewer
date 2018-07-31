import React from 'react';
import Nav from './nav';
import {StyleSheet, css} from 'aphrodite/no-important';

class Menu extends React.Component {
	/***
	 * Renders the app, normally if the menu isn't active otherwise scaled
	 */
	renderChildren = () => {
		return React.Children.map(this.props.children, (child, index) => {
			if (index === 0) {
				const classes = child.props.className;
				const activeClass = css(styles.app, this.props.active && styles.appScale);
				const propsClass = this.props.active && this.props.appClassName ? this.props.appClassName : '';
				return React.cloneElement(child, {
					className: `${classes} ${activeClass} ${propsClass}`,
				});
			} else {
				return child;
			}
		});
	};

	render() {
		return (<div
			className={css(styles.menu, this.props.active && styles.menuActive) + ` ${this.props.menuClassName ? this.props.menuClassName : ''}`}>
			<div
				className={` ${this.props.navWrapperClassName ? this.props.navWrapperClassName : ''} ` + css(styles.navWrapper, this.props.active && styles.navActive)}>
				<Nav
					nav={this.props.nav}
					navItemClassName={this.props.navItemClassName}
					linkClassName={this.props.linkClassName}
					reactRouter={this.props.reactRouter}
					closeMenu={this.props.closeMenu}
					navClassName={this.props.navClassName}
					tagLine={this.props.tagLine}
					extraComponentBottom={this.props.extraComponentBottom}
					extraComponentTop={this.props.extraComponentTop}
					navLinkStyle={this.props.navLinkStyle}
				/>
			</div>
			{this.renderChildren()}
		</div>);
	}
}

export default Menu;

const TRANSLATE = 230;

const styles = StyleSheet.create({
	menu: {
		overflow : 'auto',
		position: 'relative', height: '100vh',
	}, menuActive: {

	}, app: {
		transition: 'all .4s cubic-bezier(.94,.06,.32,.95)',
		'-webkit-font-smoothing': 'subpixel-antialiased',
		overflow: 'auto'
	}, navWrapper: {
		clear: 'both',
		display: 'inline-block',
		alignItems: 'center',
		height: '100vh',
		width: '230px',
		minHeight: '100vh',
		position: 'fixed',
		top: '0',
		left: '0',
		zIndex: '-1',
		background: '#272d34',
	}, navActive: {
		zIndex: '0',
	}, appScale: {
		transform: `translateX(${TRANSLATE}px)`,
	}
});
