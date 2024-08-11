import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactCard.css"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { db } from '../../Services/Firebase.js'
import { collection, addDoc } from 'firebase/firestore';
import { useState, useRef } from "react";
import { Alert, Snackbar } from "@mui/material";

function ContactCard() {
    const [submitEnabled, setSubmitEnabled] = useState(false)
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const messageInputRef = useRef(null);

    const validate = () => {
        if(nameInputRef.current.value.length > 3 && messageInputRef.current.value.length > 1) {
            setSubmitEnabled(true)
        } else {
            setSubmitEnabled(false)
        }
    }

    const handleSubmit = async (e) => {
        try {
            const docRef = await addDoc(collection(db, "messages"), {
                name: nameInputRef.current.value,
                email: emailInputRef.current.value,
                message: messageInputRef.current.value
              });
              
        } catch (err) {
            console.error('Error adding document:', err);
        }
      };
  
    return (
        <>
        <div className="card content">
            <p>Leave a Message</p>

            <label htmlFor="name">Your Name<span>*</span></label>
            <input ref={nameInputRef} onChange={validate} type="text" name="name" className="txtInput" placeholder="Name"/>

            <label htmlFor="emailId">Your Email Id</label>
            <input ref={emailInputRef} onChange={validate} type="text" name="emailId" className="txtInput" placeholder="Email Id"/>

            <label htmlFor="message">Message<span>*</span></label>
            <textarea ref={messageInputRef} onChange={validate} name="message" className="txtInput" placeholder="Message"></textarea>

            <button onClick={handleSubmit} className="btnMessage" disabled={!submitEnabled}>
                <FontAwesomeIcon icon={faPaperPlane} className="btnIcon"></FontAwesomeIcon>
                Send Message
            </button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert
    // onClose={handleClose}
    severity="success"
    variant="filled"
    sx={{ width: '100%' }}
  >
    Your message is submitted.
  </Alert>
</Snackbar>
        </div>
        </>
    )    
}

export default ContactCard;