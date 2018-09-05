import Layout from '../components/MyLayout.js'
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
// const config = {
// 	apiKey: "AIzaSyDd2OFPx1XZoXxjJlGjaNQoqffCrs7YiS0",
// 	authDomain: "wedding-project-b05cd.firebaseapp.com",
// 	databaseURL: "https://wedding-project-b05cd.firebaseio.com",
// 	projectId: "wedding-project-b05cd",
// 	storageBucket: "wedding-project-b05cd.appspot.com",
// 	messagingSenderId: "741864273934"
// };
// firebase.initializeApp(config);
// //
//

// .then(function() {
// 		console.log("Document successfully written!");
// })
// .catch(function(error) {
// 		console.error("Error writing document: ", error);
// });

const ThanksContent = ({language}) => (
	<div>
		<h1>{language == 'en' ? "Thank you!" : "¡Gracias!"}</h1>
		{language == 'en' ? <div><p>We’re so excited you’ll be able to celebrate this special day with us.</p><p> Make sure to use our hashtag <a href="https://www.instagram.com/explore/tags/ninaelopez/" target="_blank">#NinaELopez</a> so we can keep all our memories together.</p><p> See you soon!</p></div>
		 :
		 <div><p>We’re so excited you’ll be able to celebrate this special day with us.</p><p> Make sure to use our hashtag <a href="https://www.instagram.com/explore/tags/ninaelopez/" target="_blank">#NinaELopez</a> so we can keep all our memories together.</p><p> See you soon!</p></div>
	 }
		<style jsx>{`
			h1{
				text-align: center;
				margin-top: 100px;
				font-family: 'Pinyon Script', sans-serif;
				color: rgb(194, 180, 155);
				// color: #143c18;
				text-transform: capitalize;
				// letter-spacing: 5px;
				font-size:50px;
				font-weight: 100;
			}
			p{
				text-align: center;
				font-size: 21px;
				font-family: 'Roboto', serif;
				text-transform: uppercase;
				color: rgb(194, 180, 155);
				// color: #143c18;

			}
			p a {
				color: #143c18;
			}
	 `}</style>
 </div>
)
export default () => (<Layout><ThanksContent/></Layout>)
