
import { AiFillGithub , AiFillLinkedin , AiFillTwitterCircle , AiFillFacebook , AiFillInstagram } from 'react-icons/ai';

const Footer = () => {

    let date = new Date();

    let Year  = date.getFullYear();

    return(
        <footer>
          <div className="footer_container">
            <div className="social">
            <a href="https://github.com/NithinBalasubramanian" target="_blank"   aria-label="Github" rel="noopener noreferrer">
                    <AiFillGithub size="35px" color="#fff" style={{margin:"10px"}} />
                </a>
                <a href="https://www.linkedin.com/in/techidiots-in-2203ba20a/"   aria-label="Linkedin" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin size="35px" color="#fff" style={{margin:"10px"}} />
                </a>
                <a href="https://twitter.com/Techidiots3" target="_blank"  aria-label="Twitter" rel="noopener noreferrer">
                    <AiFillTwitterCircle size="35px" color="#fff" style={{margin:"10px"}} />
                </a>
                <a href="https://www.facebook.com/TechIdiots-101195472074045"   aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <AiFillFacebook size="35px" color="#fff" style={{margin:"10px"}} />
                </a>
                <a href="https://www.instagram.com/techidiots/" target="_blank"  aria-label="Instagram" rel="noopener noreferrer">
                    <AiFillInstagram size="35px" color="#fff" style={{margin:"10px"}} />
                </a>
            </div>
            <p className="copyCont">2020 - { Year } - &copy; || All Right Reserved  <br/>
            <a href="mailto:info@techidiots.in" target="_blank" rel="noreferrer">info@techidiots.in</a> || TECHIDIOTS </p>
          </div>
        </footer>
    )
}

export default Footer;
