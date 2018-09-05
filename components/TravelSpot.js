import MapComponent from '../components/MapDirections.js'

const TravelSpot = (props) => (<div>


	<div className={'half half'+ props.index}>
		<div className="hotelName">
			<span>
				<a href={props.url}>{props.name}</a>
			</span>
		</div>
		<div>
			<p className="groupRate">{props.rate}</p>
		</div>
		<div className="address">
			<div>{props.address}</div>
			<div>{props.location}</div>
		</div>
		<div className="call">
			<a href="'tel:'{props.number}">{props.number}</a>
			ext +{props.ext}
		</div>
		<div className="website">
			<a href={props.url}>{props.language == 'en' ? "Visit Website": "Ir a la página web"}</a>
		</div>
	</div>
	<div className="half">
		<MapComponent mapData={props.mapData}
		language={props.language}
		/>
	</div>
	{props.index == 0 ? <div className="divider"></div> : null}
	<style jsx="jsx">
		{
			` .half {
				width: 50%;
				display: inline-block;
				// border: 1px solid black;
				box-sizing: border-box;
				float: left;
			}
			.divider{
				width: 100%;
				background: rgb(194, 180, 155);
				height: 1px;
				margin: 100px auto;
				max-width: 400px;
				display: block;
				// padding-top: 100px;
				clear: both;
			}
			.groupRate {
				color: rgb(194, 180, 155);
				text-align: center;
				font-family: Prata;
				text-transform: uppercase;
				margin: 45px auto;
				letter-spacing: 1px;

			}
			.website {

				text-transform: uppercase;
				margin: 45px auto;

			}
			.website a {
				text-decoration: none;
				padding: 15px;
				color: rgb(194, 180, 155);
				text-align: center;
				font-family: Prata;
				display: block;
				letter-spacing: 1px;

			}
			.website a:hover {
				opacity: 0.5;
			}
			.address {
				color: rgb(194, 180, 155);
				text-align: center;
				// font-weight: 600;
				text-transform: uppercase;

			}
			.address > div {
				padding: 4px;
			}
			.call {
				color: rgb(194, 180, 155);
				text-align: center;
				padding-top: 4px;
				text-transform: uppercase;

			}
			.call a {
				color: rgb(194, 180, 155);
				text-align: center;
				padding-top: 4px;
				text-transform: uppercase;
				padding-right: 15px;
			}
			.hotelName {
				text-align: center;
			}
			.hotelName a {
				font-family: 'Pinyon Script', cursive;
				text-align: center;
				font-size: 45px;
				color: rgb(194, 180, 155)!important;
				text-decoration: none;
			}
				.listItem {
					width: 100%;
					display: block;
					padding: 20px 0;
				}
				.listItem span {
					display: inline-block;
					width: 50%;
				}
			}
			 `
		}</style>
</div>)

export default TravelSpot
