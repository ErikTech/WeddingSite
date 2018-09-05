import Layout from '../components/MyLayout.js'
import Gallery from 'react-grid-gallery'

const fancyImages = [
	{
		src: "../static/photos/professional/backring.jpg",
		thumbnail: "../static/thumbnails/professional/backring.jpg",
		thumbnailHeight: 200,
		thumbnailWidth: 200
	}, {
		src: "../static/photos/professional/package.jpg",
		thumbnail: "../static/thumbnails/professional/package.jpg",
		thumbnailHeight: 200,
		thumbnailWidth: 200
	}, {
		src: "../static/photos/professional/smile1.jpg",
		thumbnail: "../static/thumbnails/professional/smile1.jpg",
		thumbnailHeight: 200,
		thumbnailWidth: 200
	}, {
		src: "../static/photos/professional/cute3.jpg",
		thumbnail: "../static/thumbnails/professional/cute3.jpg",
		thumbnailHeight: 200,
		thumbnailWidth: 200
	}, {
		src: "../static/photos/professional/carrynina.jpg",
		thumbnail: "../static/thumbnails/professional/carrynina.jpg",
		thumbnailHeight: 200,
		thumbnailWidth: 200
	}, {
		src: "../static/photos/professional/cute5.jpg",
		thumbnail: "../static/thumbnails/professional/cute5.jpg",
		thumbnailHeight: 200,
		thumbnailWidth: 200
	}, {
		src: "../static/photos/professional/beach1.jpg",
		thumbnail: "../static/thumbnails/professional/beach1.jpg",
		thumbnailHeight: 200,
		thumbnailWidth: 200
	}, {
		src: "../static/photos/professional/beach2.jpg",
		thumbnail: "../static/thumbnails/professional/beach2.jpg",
		thumbnailHeight: 200,
		thumbnailWidth: 200
	}, {
		src: "../static/photos/professional/beachfun4.jpg",
		thumbnail: "../static/thumbnails/professional/beachfun4.jpg",
		thumbnailHeight: 200,
		thumbnailWidth: 200
	}, {
		src: "../static/photos/professional/cute7.jpg",
		thumbnail: "../static/thumbnails/professional/cute7.jpg",
		thumbnailHeight: 200,
		thumbnailWidth: 200
	}
]
const otherImages = [
	{
		src: "../static/photos/pose3.JPG",
		thumbnail: "../static/thumbnails/pose3.JPG",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}, {
		src: "../static/photos/lion.JPG",
		thumbnail: "../static/thumbnails/lion.JPG",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}, {
		src: "../static/photos/cute1.JPG",
		thumbnail: "../static/thumbnails/cute1.JPG",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}, {
		src: "../static/photos/faces1.JPG",
		thumbnail: "../static/thumbnails/faces1.JPG",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}, {
		src: "../static/photos/beachfun2.JPG",
		thumbnail: "../static/thumbnails/beachfun2.JPG",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}, {
		src: "../static/photos/kiss2.JPG",
		thumbnail: "../static/thumbnails/kiss2.JPG",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}, {
		src: "../static/photos/faces6.JPG",
		thumbnail: "../static/thumbnails/faces6.JPG",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}, {
		src: "../static/photos/faces4.JPG",
		thumbnail: "../static/thumbnails/faces4.JPG",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}, {
		src: "../static/photos/waterfallkiss.JPG",
		thumbnail: "../static/thumbnails/waterfallkiss.JPG",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}, {
		src: "../static/photos/faces2.JPG",
		thumbnail: "../static/thumbnails/faces2.JPG",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}, {
		src: "../static/photos/pose2.JPG",
		thumbnail: "../static/thumbnails/pose2.JPG",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}, {
		src: "../static/photos/kiss3.JPG",
		thumbnail: "../static/thumbnails/kiss3.JPG",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}, {
		src: "../static/photos/pose1.JPG",
		thumbnail: "../static/thumbnails/pose1.JPG",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}, {
		src: "../static/photos/faces5.JPG",
		thumbnail: "../static/thumbnails/faces5.JPG",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}, {
		src: "../static/photos/cute3.JPG",
		thumbnail: "../static/thumbnails/cute3.JPG",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}, {
		src: "../static/photos/faces7.JPG",
		thumbnail: "../static/thumbnails/faces7.JPG",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}, {
		src: "../static/photos/ringkiss1.JPG",
		thumbnail: "../static/thumbnails/ringkiss1.JPG",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}, {
		src: "../static/photos/pose4.JPG",
		thumbnail: "../static/thumbnails/pose4.JPG",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}, {
		src: "../static/photos/nina_erik_profile.jpg",
		thumbnail: "../static/thumbnails/nina_erik_profile.jpg",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}, {
		src: "../static/photos/proposal.JPG",
		thumbnail: "../static/thumbnails/proposal.JPG",
		thumbnailWidth: 200,
		thumbnailHeight: 200,
		// isSelected: true,
		// caption: "After Rain (Jeshu John - designerspics.com)"
	}
]

const PhotoContent = ({language}) => (
	<div>
	<div className="container">
		<h2>{language == 'en'	? `Photos`	: `Fotos`}</h2>
		<Gallery images={fancyImages} rowHeight={180} enableImageSelection={false}/>
		<br/>
		<hr/>
		<br/>
		<Gallery images={otherImages} rowHeight={180} enableImageSelection={false}/>

	</div>
</div>

)

export default () => (<Layout><PhotoContent/></Layout>)
