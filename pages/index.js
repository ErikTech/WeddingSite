import Layout from '../components/HomeLayout.js'
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

const IndexContent = ({language}) => (<div>
	<link href="https://fonts.googleapis.com/css?family=Raleway:600" rel="stylesheet"/>
	<link href="https://fonts.googleapis.com/css?family=Mr+De+Haviland" rel="stylesheet"/>
	<link href="https://fonts.googleapis.com/css?family=Prata" rel="stylesheet"/>
	<link href="https://fonts.googleapis.com/css?family=Pinyon+Script" rel="stylesheet" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />


	<div id="main" className="index">
		<div className="container">
			<h1 className="headerh1" style={headNamesStyle}>
				<Link href="/">
					<a>
						<span>Erik</span>

						<span className="cursive" style={cursiveFont}>{ language == 'en' ? 'and' : 'y'}</span>
						<span>Nina</span>
						<div>
						{
							language == 'en'
								?
										<div className="date">March
											<span>16, 2019</span>
										</div>
								:
										<div className="date">
											<span>16 de</span>&nbsp;
											marzo
											<span>del 2019</span>
										</div>
						}
						</div>

					</a>
				</Link>
				{/* <div> 2019</div> */}
			</h1>

			{/* <div className="hashtag"><a href="https://www.instagram.com/explore/tags/ninaelopez/" target="_blank">#NinaELopez</a></div> */}

			<div className="hashtag"><a href="/photos" target="_blank">Check out the event photos!</a></div>
			</div>
	</div>
	<style jsx="jsx">
		{
			`.hashtag {
				position: fixed;
				bottom: 0;
				text-align: left;
				font-weight: 300;
				left: 0;
				color: #fff;
				background: #000;
				opacity: 0.5;
				padding-right: 10px;



			}
			.hashtag a{
				display: block;
				font-size: 18px;
				opacity: 1;
				padding: 5px;
				padding-right: 10px;
				color: #fff;
				font-family: 'Prata', sans-serif;
				text-transform: uppercase;
			}
			.hashtag:hover{
				opacity: 0.75;

			}
			.container {
				width: 100%;
				max-width: 100%;
				margin: 0 auto;
			}
			h1 .date {
				font-family: 'Pinyon Script', cursive;
				font-size: 38px;
				font-weight: 300;
				// text-transform: capitalize;
				text-transform: none!important;
				letter-spacing: 0px;
			}
			h1 .date span {
				font-family: 'Pinyon Script', cursive;
				font-size: 25px;
				margin-left: 10px;
				font-weight: normal;
			}
			p {
				color: #fff;
				font-size: 16px;
				max-width: 70%;
				line-height: 24px;
				margin: 20px auto;
				font-family: Roboto;

			}

			a,
			h1 {
				font-family: "Raleway";
				text-align: center;
				font-size: 40px;
				width: 100%;
			}
			h1{
				position: absolute;
				top: 240px;
			}
			h1 a{
				color: #fff;
			}

			ul {
				padding: 0;
			}

			li {
				list-style: none;
				margin: 5px 0;
			}

			a {
				text-decoration: none;
				color: blue;
			}

			 `
		}</style>
</div>)

export default() => (<Layout><IndexContent/></Layout>)
