import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactCard.css"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

function ContactCard() {

    const handleSubmit = async (e) => {
        e.preventDefault();
      };
  
    return (
        <>
        <div className="card content">
            <p>Leave a Message</p>
            <form name="messages" data-netlify="true" onSubmit={"submit"} method="post">

            <label htmlFor="name">Your Name<span>*</span></label>
            <input type="text" name="name" className="txtInput" placeholder="Name"/>
            <label htmlFor="emailId">Your Email Id</label>
            <input type="text" name="emailId" className="txtInput" placeholder="Email Id"/>
            <label htmlFor="message">Message<span>*</span></label>
            <textarea name="message" className="txtInput" placeholder="Message"></textarea>

            <button type="submit" className="btnMessage">
                <FontAwesomeIcon icon={faPaperPlane} className="btnIcon"></FontAwesomeIcon>
                Send Message
            </button>
            </form>
        </div>
        </>
    )    
}

export default ContactCard;