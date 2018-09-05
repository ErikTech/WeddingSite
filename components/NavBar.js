import Link from 'next/link'
import "../styles/styles.styl"


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

const NavBar = ({language}) => (
	<div>
	<ul className="navbar" style={navBarStyle}>
	<li>
		<Link href="/">
			<a style={linkStyle}>{language == 'en'	? `Home`	: `Inicio`}</a>
		</Link>
	</li>
	<li>
		<Link href="/photos">
			<a style={linkStyle}>{language == 'en'	? `Photos`	: `Fotos`}
			</a>
		</Link>
	</li>

	<li>
		<Link href="/events">
			<a style={linkStyle}>{language == 'en'	? `Events`	: `Eventos`}</a>
		</Link>
	</li>
	<li>
		<Link href="/travel">
			<a style={linkStyle}>{language == 'en'	? `Travel`	: `Estadía`}</a>
		</Link>
	</li>
	<li>
		<Link href="/registry">
			<a style={linkStyle}>{language == 'en'	? `Registry`	: `Registro`}</a>
		</Link>
	</li>
</ul>

<style jsx="jsx">
	{
		` ul li a {
			text-align: center;
			margin-right: 0!important;
			padding: 10px 0;

		}
		ul li a:hover {
			opacity: 0.8;

		}
		// .navbar{
		// 	@media (max-width: 768px){
		// 	li
		// 		width: 100%;
		// 		display: block;
		// }}
		 `
	}</style>
</div>)

export default NavBar
