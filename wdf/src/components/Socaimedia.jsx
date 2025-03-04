import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";
import './Socaimedia.css'

const SocialIcons = () => {
  return (
    <div className="social-container">
      <div className="social-icons">
        <a href="https://www.instagram.com" className="instagram" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com" target="_blank" className="facebook" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.github.com" target="_blank" className="github" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
