import Layout from '../components/MyLayout.js'
import TravelSpot from '../components/TravelSpot.js'

const mapData = [
	{
		src: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15717.078715309472!2d-84.19027079148758!3d9.994568217814447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8fa0f9c450507873%3A0xb27b62220e3f31a4!2sJuan+Santamaria+Airport%2C+Alajuela+Province%2C+Alajuela%2C+Costa+Rica!3m2!1d9.9980535!2d-84.2040896!4m5!1s0x8fa0fa32f22d8ef5%3A0xa2e125b9e9634d7c!2sCosta+Rica+Marriott+Hotel+San+Jose%2C+700+meters+west+from+Bridgestone%2FFirestone%2C+La+Ribera+de+Belen%2C+CR-H%2C+Heredia%2C+Costa+Rica!3m2!1d9.987204!2d-84.173588!5e0!3m2!1sen!2sus!4v1531783102096',
		dd: 'From Juan Santamaría International Airport: Go south on the Autopista General Cañas for 3 miles. Follow arrow to hotel; main entrance will be 700 meters west on the left.',
		ddEsp: 'Del aeropuerto Juan Santamaría, diríjase hacia el sur en la Autopista General Cañas por 3 millas. Siga los rótulos del hotel; la entrada principal va a estar a 700 metros al oeste a la izquierda.',
		ss: true
	},
	{
		src: 'https://www.google.com/maps/embed/v1/directions?origin=Juan%20Santamaria%20International%20Airport%2C%20Alajuela%20Province%2C%20Alajuela%2C%20Costa%20Rica&destination=Calle%20los%20Almendros%2C%20San%20Jos%C3%A9%2C%20Pozos%2C%20Costa%20Rica&key=AIzaSyCMa18KRMgQ-Uo1DBsi5WFWP3wjrxGWQz4',
		dd: 'Take The General Canas Highway to Radial de Belen Road, make a left turn at Panasonic Building. The hotel will be two kms ahead on right hand side.',
		ddEsp: 'Viniendo del aeropuerto, tome el Highway One a San José, en el primer semáforo gire a la izquierda y verá la entrada al hotel justo enfrente.',
		ss: false
	}
]

const travelData = [
	{
		name: 'Marriott Hotel, San José',
		rate: "Ask Erik or Nina about the hotel group rate",
		rateEsp: "Pregúntenle a Erik o a Nina sobre las tarifas especiales",
		url: 'https://www.marriott.com/hotels/travel/sjocr-costa-rica-marriott-hotel-san-jose/',
		address: 'La Ribera de Belen, Heredia Province',
		location: 'Heredia, Costa Rica',
		number: '+506 2298 0000',
		ext: '0345',
		mapDataIndex: 0
	},
	{
		name: 'Holiday Inn Express',
		rate: "Ask Erik or Nina about the hotel group rate",
		rateEsp: "Pregúntenle a Erik o a Nina sobre las tarifas especiales",
		url: 'https://www.ihg.com/holidayinnexpress/hotels/us/en/san-jose/sjoin/hoteldetail',
		address: 'DEL CENTRO EMPRESARIAL FORUM DOS 150 Metros Sur y 50 Metros Oeste',
		location: 'San José, 10903, Costa Rica',
		number: '+506 2298 0000',
		ext: '0345',
		mapDataIndex: 1
	}
]



const TravelContent = ({language}) => (
<div>
		<div className="container">
		<h2>{language == 'en' ? `Travel` : `Estadía`}</h2>
		<div className="main">
			<div>

				{travelData.map((data, index) => (
					<TravelSpot
						name={data.name}
						url={data.url}
						index={index}
						rate={language == 'en' ? data.rate : data.rateEsp}
						address={data.address}
						number={data.number}
						ext={data.ext}
						location={data.location}
						mapData={mapData[data.mapDataIndex]}
						key={data.mapDataIndex}
						language={language}
					/>
				))}

			</div>
	</div>
</div>
	<style jsx="jsx">
		{
			`
				.main{
					// display: flex;
					// padding-bottom: 100px;
				}

			.container {
				color: #143c18;
				max-width: 1070px;
			}
			.container a {
				color: rgb(194, 180, 155);
			}
			.container a:hover,
			.container a:visited {
				color: rgb(194, 180, 155);
			}

			.textRight {
				text-align: right;
				display: inline-block;
			}
			.container {
				width: 70%;
				margin: 0 auto;
				display: block;
				overflow: hidden;
				font-family: Roboto;

			}

			h2 {
				font-family: "Raleway", sans-serif;
				text-align: center;
				text-transform: uppercase;
				letter-spacing: 5px;
				padding-bottom: 30px;
				border-bottom: 1px solid rgb(194, 180, 155);
				width: auto;
				max-width: 300px;
				margin: 0 auto;
				color: rgb(194, 180, 155);
				margin-top: 60px;
				padding-bottom: 50px;
		    margin-bottom: 65px;
			}
			p {
				font-size: 16px;
				max-width: 100%;
				line-height: 24px;
				margin: 20px auto;
				font-family: Roboto;

			}

			 `
		}</style>
</div>)


export default () => (<Layout><TravelContent/></Layout>)
