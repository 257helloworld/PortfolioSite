import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactCard.css"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

function ContactCard() {
    return (
        <>
        <div className="card content">
            <p>Leave a Message</p>
            <label htmlFor="name">Your Name<span>*</span></label>
            <input type="text" name="name" className="txtInput" placeholder="Name"/>
            <label htmlFor="emailId">Your Email Id</label>
            <input type="text" name="emailId" className="txtInput" placeholder="Email Id"/>
            <label htmlFor="message">Message<span>*</span></label>
            <textarea name="message" className="txtInput" placeholder="Message"></textarea>

            <button className="btnMessage">
                <FontAwesomeIcon icon={faPaperPlane} className="btnIcon"></FontAwesomeIcon>
                Send Message
            </button>
        </div>
        </>
    )    
}

export default ContactCard;