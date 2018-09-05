const Timeline = props => (<div>
	{
		props.data.map((day, index) => (<div key={index}>
			<ul >
				{
					day.schedule.map((event) => (
						<li key={event.name}>
							<strong>{event.name}</strong>
							{event.times}
						</li>))
				}
			</ul>
			<br />
		</div>))
	}

	<style jsx="jsx">
		{
			` ul {
				padding-left: 0;
				margin-left: 0;
			}
			ul li {
				margin: 5px 0;
				font-family: Roboto;

			}
			ul li strong {
				padding-right: 15px;
			}
			 `
		}</style>
</div>)

export default Timeline
