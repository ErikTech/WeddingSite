import Link from 'next/link'



const linkStyle = {
  marginRight: 15,
  textAlign: 'center',
  display: 'inline-flex',
  // fontFamily: 'Raleway',
  textDecoration: 'none',
  color: 'rgb(194, 180, 155)',
  fontSize: 12,
  fontFamily: "'Julius Sans One', sans-serif",

}
const headImg = {
  // backgroundImage: 'url("http://localhost:3000/wedding_header.png")',

}
const navBarStyle = {
  backgroundSize: '100 100',
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  textTransform: 'uppercase',
  textDecoration: 'none',
  padding: '40px 0',
  clear: 'both',
  width: '100%',
  // zIndex: '99'
  // display: 'block'
}
const headNamesStyle ={
  textAlign: 'center',
  fontFamily: "'Julius Sans One', sans-serif",
  fontSize: 38,
  color: 'rgb(194, 180, 155)'
}
const cursiveFont = {
  fontFamily: 'Mr Sheffield Regular'
}

const Footer = ({language}) => (
<div>

<FootNav language={language}></FootNav>
</div>
)

const FootNav = ({language}) => (
  <ul style={navBarStyle}>
    <li>
      <Link href="mailto:erik.lopez.tech@gmail.com?subject=Regarding the Wedding">
        <a style={linkStyle}>{language == 'en' ? "Contact Erik" : "Contactenos"}</a>
      </Link>
    </li>
    {/* <li>
        <Link href="/info">
        <a style={linkStyle}>Requests</a>
      </Link>
    </li> */}
    {/* <li>
        <Link href="/rsvp">
        <a style={linkStyle}>RSVP</a>
      </Link>
    </li> */}
  </ul>

)

export default Footer
