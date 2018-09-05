import Layout from '../components/MyLayout.js'
import EventInfo from '../components/EventTimeline.js'

const timelineData1 = [
	{
		eventName: 'The Wedding',
		date: 'Saturday, March 16, 2019',
		attire: 'Formal Attire',
		attireDesc: '',
		schedule: [
			{
				times: '4:30 PM - 6:30 PM',
				name: 'Ceremony',
			},
			{
				times: '6:00 PM - 7:00 PM',
				name: 'Cocktail & Toast',
			},
			{
				times: '7:00 PM - 2:00 AM',
				name: 'Reception',
			}
		]
	}
]

const timelineData1Esp = [{
	eventName: 'La Boda',
	date: 'Sábado, 16 de marzo, 2019',
	attire: 'Vestimenta Formal',
	attireDesc: '',
	schedule: [
		{
			times: '4:30 PM - 6:30 PM',
			name: 'Ceremonia'
		},
		{
			times: '6:00 PM - 7:00 PM',
			name: 'Cóctel y Brindis ',
		},
		{
			times: '7:00 PM - 2:00 AM',
			name: 'Recepción' ,
		}
	]
}
]

const timelineData2 = [
	{
		eventName: 'Trip to Volcan Poas',
		date: 'FRIDAY, MARCH 15, 2019',
		attire: 'Outdoor Attire',
		attireDesc: 'Comfortable clothes and shoes, layers',
		schedule: [
			{
				times: '8:00 AM',
				name: 'Costa Rica Marriot Hotel San Jose'
			},
			{
				times: 'TBD',
				name: 'Cost per person'
			}

		]
	}
]

const timelineData2Esp = [{
	eventName: 'Tour al Volcán Poás ',
	date: 'Viernes, 15 de marzo, 2019',
	attire: 'Ropa Deportiva',
	attireDesc: 'Ropa cómoda y en capas, zapatos para caminar',
	schedule: [
		{
			times: '8:00 AM',
			name: 'Costa Rica Marriot Hotel San Jose'
		},
		{
			times: 'Por determinarse',
			name: 'Costo por Persona: '
		}

	]
}
]
const EventsPage = ({language}) => (
	<div>
	<div className="container">
		<h2>{language == 'en' ? `Events` : `Eventos`}</h2>
		<div className="content">

			<div>
				<div>
					<EventInfo eventName={language == 'en' ? timelineData1[0].eventName : timelineData1Esp[0].eventName} date={language == 'en' ? timelineData1[0].date : timelineData1Esp[0].date} attireDesc={language == 'en' ? timelineData1[0].attireDesc : timelineData1Esp[0].attireDesc}  timeline={language == 'en' ? timelineData1 : timelineData1Esp} attire={language == 'en' ? timelineData1[0].attire : timelineData1Esp[0].attire} ></EventInfo>
					<EventInfo eventName={language == 'en' ? timelineData2[0].eventName : timelineData2Esp[0].eventName} date={language == 'en' ? timelineData2[0].date : timelineData2Esp[0].date} attireDesc={language == 'en' ? timelineData2[0].attireDesc : timelineData2Esp[0].attireDesc}  timeline={language == 'en' ? timelineData2 : timelineData2Esp} attire={language == 'en' ? timelineData2[0].attire : timelineData2Esp[0].attire} ></EventInfo>
					<div>

					</div>

				</div>
			</div>

		</div>
	</div>

	<style jsx="jsx">
		{
			`.dateinfo {
				margin-top: 30px;
				font-size: 17px;
				font-family: Prata;
				margin-bottom: 0;
				letter-spacing: 3px;
				margin-bottom: 15px;
				text-transform: uppercase;
			}
			.timeline{
				text-transform: uppercase;
				letter-spacing: 1px;
			}
			.attireInfo {
				margin-top: 30px;
				font-size: 17px;
				font-family: Prata;
				margin-bottom: 0;
				letter-spacing: 3px;
				margin-bottom: 15px;
				text-transform: uppercase;
				margin-top: 10px;
				font-size: 14px;
			}

			.container {
				// width: 70%;
				margin: 0 auto;
				display: block;
				overflow: hidden;
				text-align: center;
				color: rgb(194, 180, 155);
			}
			.container hr {
				clear: both;
			}
			.container .half {
				width: 50%;
				display: inline-block;
				// border: 1px solid black;
				box-sizing: border-box;
				float: left;
			}
			.volcano {
				padding-left: 30px;
			}
			.volcano img {
				border: 1px solid black;
				width: 100%;
				height: 320px;
			}
			h1 {
				color: rgb(194, 180, 155);
				// font-family: 'Mr De Haviland', cursive;
				font-family: 'Pinyon Script', cursive;
				letter-spacing: 4px;
				font-weight: normal;
				font-size: 52px;
				margin-bottom: 0;
				padding-left: 10px;
			}
			.friday h1 {
				font-size: 42px;
			}
			.friday {
				margin-top: 80px;
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
				// max-width: 70%;
				line-height: 24px;
				margin: 0 auto;
				font-family: Roboto;

			}
			.content h3 {
				font-family: "Prata", serif;
				clear: both;
			}
			.content ul {
				padding-left: 0;
				margin-left: 0;
			}
			.content ul li {
				margin: 5px 0;
				font-family: Roboto;

			}
			.content ul li strong {
				padding-right: 15px;
			}
			 `
		}</style>
</div>)


export default () => (<Layout><EventsPage/></Layout>)
