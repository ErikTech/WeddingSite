import "../styles/styles.styl"
import Header from './Header'
import Footer from './Footer'
import NavBar from './NavBar'
import Link from 'next/link'

const layoutStyle = {
	height: '100%',
	width: '100%',
	// overflowX: 'hidden',
	position: 'relative'
}

const linkStyle = {
	// marginRight: 15,
	textAlign: 'center',
	display: 'inline-flex',
	// fontFamily: 'Raleway',
	textDecoration: 'none',
	color: 'rgb(194, 180, 155)',
	fontSize: 18,
	fontFamily: "'Prata', serif",
	letterSpacing: 3,
	// borderRight: '1px solid #c2b49b'

}

const navBarStyle = {
	display: 'flex',
	justifyContent: 'space-around',
	// maxWidth: '80%',
	margin: '00px auto',
	padding: '20px 0',
	listStyle: 'none',
	textTransform: 'uppercase',
	textDecoration: 'none',
	color: 'rgb(194, 180, 155)',
	position: 'sticky',
	textAlign: 'center',
	top: 0,
	background: '#fff',
	maxWidth: '1070px',
	zIndex: '99'
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

			<div id="main-layout" style={layoutStyle}>
			<a className="lang-toggle" onClick={this.toggleLanguage} href="#">{
					this.state.language == 'en'
						? 'ESP'
						: 'ENG'
				}</a>
			<div className="leaf2"></div>
			<div className="leaf4"></div>

		 <Header language={this.state.language}/>
			<NavBar language={this.state.language}/>
			{
				React.cloneElement(React.Children.toArray(this.props.children)[0], {
					...this.state
				})
			}

			<Footer language={this.state.language}/>

			<style jsx="jsx">
				{
					` .leaf4 {
						height: 410px;
						position: absolute;
						width: 430px;
						-webkit-transform: scaleX(-1) rotate(-30deg);
						-ms-transform: scaleX(-1) rotate(-30deg);
						transform: scaleX(-1) rotate(-30deg);
						top: -175px;
						right: -90px;
						background: url("static/leaf4.png") no-repeat;
						background-size: 100%;
						background-position: center center;
					}
					.leaf2 {
						height: 370px;
						position: absolute;
						width: 360px;
						left: -60px;
						transform: rotate(-70deg);
						top: -175px;
						background: url("static/leaf2.png") no-repeat;
						background-size: 100%;
						background-position: center center;
					}
					.lang-toggle{
						font-family: 'Prata', sans-serif;
						display: block;
						color: #000;
						opacity: 0.5;
						font-size: 18px;
						cursor : pointer;
					}
					 `
				}</style>
		</div>)
	}
}

export default Layout
