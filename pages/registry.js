import Layout from '../components/MyLayout.js'

const RegistryContent = ({language}) => (
	<div>
	<div className="container">
		<h2>{language == 'en' ? `Registry` : `Registro`}</h2>

		{language == 'en' ?
			<p>We’re so lucky to be able to spend our wedding day with all of our friends and family; your presence is truly the best gift you can give us.</p>
			:
			<p>Estamos muy agradecidos de poder pasar un día tan especial con nuestra familia y amigos; su presencia es verdaderamente el mejor regalo que pueden darnos. </p>
		}

		{language == 'en' ?
			<p>Nevertheless if you’d like to get us a gift to celebrate and since we live in a small apartment , we’ve created a registry fund that we’ll use to save for the down payment of our first home.</p>
			:
			<p>Sin embargo, si nos quieren regalar algo adicional, hemos creado una cuenta bancaria como registro de regalos, con el propósito de ahorrar y poder usarlo más adelante para comprar nuestra primera casa.  </p>
		}


		<a className="registry" href="https://registry.theknot.com/nina-byram-erik-lopez-march-2019/24716823" target="_blank">
			<div className="reg_image">
				<img src="https://media.xogrp.com/images/8e2561a7-b17f-441e-89f3-b057234c9ead~sc_272.272?fallback=5fa481ef-43bb-43ae-aab3-665614c9d774" alt="house fund"/>
				<p>First Home Fund!</p>
				<span>Click to gift</span>
			</div>
		</a>
		<h3>{language == 'en' ? "Thank you!" : "¡Gracias a todos!"}</h3>


		<br/>
		<div className="finalImg">
			{/* <img src="../static/photos/professional/trees1.jpg" alt="Nina and Erik under trees with Rex"/> */}
		</div>

	</div>

	<style jsx="jsx">
		{
			` .reg_image {
				// height: 200px;
				width: 200px;
				border: 1px solid rgba(0,0,0,.12);
				    color: #1f1f1f;
				margin: 30px auto;
				padding: 15px;
				box-sizing: border-box;
				// border: 1px solid rgb(194, 180, 155);
		    box-shadow: 0 1px 8px 0 rgba(0,0,0,.12);

			}
			.reg_image span{
				display: block;
				text-align: center;
				font-family: "Raleway", sans-serif;
				color: rgb(194, 180, 155);
				font-weight: 100!important;
				font-size: 12px!important;

			}
			.reg_image p {
				display: block;
			}
			.finalImg{
				margin: 0 auto;
				border: 1px solid rgb(194, 180, 155);
				display: block;
				background: url('../static/photos/professional/trees1.jpg') no-repeat;
				background-size: cover;
				background-position: center center;
				// max-height: 800px;
				height: 600px;
				width: 400px;
			}
			h3 {
				font-family: 'Pinyon Script', serif;
				color: rgb(194, 180, 155);
				// text-transform: uppercase;
				text-align: center;
				font-weight: 100;
				font-size: 45px;
				margin-top: 60px;
			}

			a.registry {
				display: block;
				text-decoration:  none;
				max-width: 240px;
				margin: 0 auto;
			}
			a.registry:hover .reg_image{
				border: 1px solid rgba(0,0,0,.42)!important;
			}
			a.registry:hover p,
			a.registry:hover span{
				color: #1f1f1f;
			}

			a.registry img {
				// margin: 0 auto;
				display: block;
				width: 100%;
				box-sizing: border-box;
				border: 1px solid rgb(194, 180, 155);
			}
			p {
				text-transform: uppercase;
				text-align: center;
			}


			 `
		}</style>
</div>)
export default () => (<Layout><RegistryContent/></Layout>)
