import Link from 'next/link'


const headNamesStyle = {
	textAlign: 'center',
	fontSize: 42,
	color: 'rgb(194, 180, 155)',
	marginTop: 100,
	marginBottom: 100,
	textTransform: 'uppercase',
	letterSpacing: 10
}
const cursiveFont = {
	textTransform: 'lowercase',
	fontWeight: 100,
	letterSpacing: 0,
	fontSize: 50,
	margin: '20px',
	marginRight: '30px'
}

const Header = ({language}) => (<div>
	<h1 className="headerh1" style={headNamesStyle}>
		<Link href="/">
			<a>
				<span>Nina</span>

				<span className="cursive" style={cursiveFont}>{ language == 'en' ? 'and' : 'y'}</span>
				<span>Erik</span>

			</a>
		</Link>
		{/* <div> 2019</div> */}
	</h1>

	<link href="https://fonts.googleapis.com/css?family=Raleway:600" rel="stylesheet"/>
	<link href="https://fonts.googleapis.com/css?family=Mr+De+Haviland" rel="stylesheet"/>
	<link href="https://fonts.googleapis.com/css?family=Prata" rel="stylesheet"/>
	<link href="https://fonts.googleapis.com/css?family=Pinyon+Script" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />

	<meta name="viewport" content="width=device-width, initial-scale=1" />


	{/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine" /> */}
	<style jsx="jsx" global="global">
		{
			` @font-face {
				font-family: 'Mr_Sheffield';
				src: url("static/Mr_Sheffield.ttf");
			}
			body {
				margin: 0!important;
				max-width: 100%;
				overflow-x: hidden;
			}
			h1 a {
				color: rgb(194, 180, 155);
				text-decoration: none;
			}
			 `
		}</style>
</div>)

export default Header
