import "../styles/styles.styl"
import Header from './Header'
import NavBar from './HomeNavBar'
import Link from 'next/link'

const layoutStyle = {
	height: '100%',
	width: '100%',
	overflow: 'hidden',
	position: 'fixed'
}


class Layout extends React.Component {

	constructor() {

		super()
		const language = typeof window != 'undefined'
			? localStorage.getItem('language') || 'en'
			: 'en';
		this.state = {
			language
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (typeof window != 'undefined' && prevState.lenguage != this.state.language) {
			localStorage.setItem('language', this.state.language)
		}

	}

	toggleLanguage = (e) => {
		e.preventDefault();

		this.setState({
			language: this.state.language == 'en'
				? 'es'
				: 'en'
		})
	}

	render() {

		return (

			<div id="index-layout" style={layoutStyle}>
			<a className="lang-toggle" onClick={this.toggleLanguage} href="#">{
					this.state.language == 'en'
						? 'ESP'
						: 'ENG'
				}</a>
			<NavBar language={this.state.language} className="home-nav-bar"/>
			{
				React.cloneElement(React.Children.toArray(this.props.children)[0], {
					...this.state
				})
			}

			<style jsx="jsx">
				{
					`#index-layout {
						background: url("../static/photos/homepage.jpg") no-repeat;
						background-size: cover;
						background-position: center 0px;
					}
					.lang-toggle{
						font-family: 'Prata', sans-serif;
						display: block;
						color: #000;
						opacity: 0.5;
						font-size: 18px;
						cursor : pointer;
					}
					.lang-toggle:hover {
						opacity: 0.9;
					}
					 `
				}</style>
		</div>)
	}
}

export default Layout
