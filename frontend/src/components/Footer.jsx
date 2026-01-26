import '../styles/Footer.css';

function Footer() {
const d = new Date();
let year = d.getFullYear();
const name = "Henri Jormanainen";
const allRightsReserved = "All rights reserved.";
return (
<>
<footer className="footer">
<section className="footer-contact">

<h2>Contact</h2>
<a href="" target="_blank" rel="noopener noreferrer">
<img className="logo" src="/icons/github-mark.svg" alt="Github Invertocat Logo" />
</a>

<a href="" target="_blank" rel="noopener noreferrer">
<img className="logo" src="/icons/linkedin.svg" alt="LinkedIn Logo" />
</a>

<a href="">
<img className="logo" src="icons/email.svg" alt="Email Icon" />
</a>

</section>
<section className="allrightreserved">
<h2>&copy; {year} {name} {allRightsReserved}</h2>
</section>
</footer>
</>
);
}

export default Footer;