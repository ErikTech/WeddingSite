const MapComponent = (props) => (
	<div>
	<div className="map">
		<iframe
			src={props.mapData.src}
			frameBorder="0"
			allowFullScreen
			width="600"
			height="450"
			></iframe>
		<p>
			<strong>{props.language == 'en' ? "Driving Directions:" : "Cómo llegar:"}  </strong>
			{props.language == 'en' ? props.mapData.dd : props.mapData.ddEsp}
		</p>
		{props.mapData.ss ?
			<div>
			{props.language == 'en' ? <div><p><strong>Complimentary shuttle service</strong> from Airport to Hotel</p></div> : <div><p>Servicio de transporte de cortesía del aeropuerto al hotel.</p></div>}
			</div> : null
			}
	</div>
	<style jsx="jsx">
		{
			`
			.map {
				margin-left: 30px;
				margin-bottom: 60px;
			}
			.map p {
				color: rgb(194, 180, 155);
				font-size: 13px;
			}
			.map iframe {
				width: 100%;
				border: 1px solid rgb(194, 180, 155);
				box-sizing: border-box;
				height: 300px;
			}
			`
		}</style>
</div>
)

export default MapComponent
