import Layout from '../components/MyLayout.js'

const SorryContent = ({language}) => (
	<div>
		<h1>{language == 'en' ? "Wish you could make it!" : "Wish you could make it"}</h1>
			{language == 'en' ?
                        <div><p>We’re sad you can’t make it but we’ll celebrate double in your honor. </p><br /><p>To keep up to date with all the wedding shenanigans, make sure to follow our hashtag <a href="https://www.instagram.com/explore/tags/ninaelopez/" target="_blank">#NinaElopez!</a></p></div>
                        :
                        <div><p>We’re sad you can’t make it but we’ll celebrate double in your honor. </p><br /><p>To keep up to date with all the wedding shenanigans, make sure to follow our hashtag <a href="https://www.instagram.com/explore/tags/ninaelopez/" target="_blank">#NinaElopez!</a></p></div>
                  }
			 <style jsx>{`
         h1{
           text-align: center;
           margin-top: 100px;
           font-family: 'Pinyon Script', sans-serif;
           color: rgb(194, 180, 155);
           // color: #143c18;
           // text-transform: capitalize;
           // letter-spacing: 5px;
           font-size:50px;
           font-weight: 100;
         }
         p{
           text-align: center;
           font-size: 21px;
           width: 70%;
           margin: 0 auto;
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

export default () => (<Layout><SorryContent/></Layout>)
