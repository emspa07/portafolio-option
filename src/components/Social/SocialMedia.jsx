import { FormSection, ContactList } from "./elements";
import { BsGithub , BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const SocialMedia = () => {
    return (
      <FormSection>
        <h2>Ponte en contacto</h2>
            <ContactList>
            <ul>
            <li><a href="https://github.com/emspa07" target="_blank" rel="noreferrer"><BsGithub /></a></li>
            <li><a href="https://www.instagram.com/emspaulin/?igshid==ZDc4ODBmNjlmNQ==" target="_blank" rel="noreferrer"><BsInstagram /></a></li>
            <li><a href="https://www.linkedin.com/in/emily-paulin-cuenca" target="_blank" rel="noreferrer"><BsLinkedin /></a></li>
            <li><a href="mailto:emilypaulin.95m@gmail.com" target="_blank" rel="noreferrer"><FiMail /></a></li>
            </ul>
            </ContactList>
      </FormSection>
    );
  };

export default SocialMedia;