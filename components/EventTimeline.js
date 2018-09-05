import Timeline from '../components/Timelines.js'

const WeddingInfo = (props) => (
	<div>

		<h1>{props.eventName}</h1>
		<p className="dateinfo">{props.date}</p>
		<div className="timeline">
			<Timeline data={props.timeline} key={props.key}/>
		</div>
		<div>
			<p className="attireInfo">
				<strong>
					{props.attire}
				</strong>
			</p>
			<p className="timeline">
				{props.attireDesc}
			</p>
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
				p {
					font-size: 16px;
					line-height: 24px;
					margin: 0 auto;
					font-family: Roboto;
				}
				 `
			}</style>
	</div>
)

export default WeddingInfo
