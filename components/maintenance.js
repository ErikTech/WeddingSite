import Header from './Header'
// import Img from './assets/images/wedding_header.png'; // Tell Webpack this JS file uses this image


const layoutStyle = {
	margin: 20,
	padding: 20,
	background: "url('./assets/images/wedding_header.png')",
	height: '100%'
}



const Layout = (props) => (
	<div id="main-layout" style={layoutStyle}>
		{props.children}
		<style jsx>{`

			h1, h2 {
				font-family: 'Raleway', sans-serif;
				text-align: center;
				font-weight: 100
				width: 100%;
			}
			h1{
				font-size: 40px;
			}
			h2{
				font-size: 28px;
			}
		`}</style>
	</div>
)

export default Layout
