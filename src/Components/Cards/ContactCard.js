import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactCard.css"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { db } from '../../Services/Firebase.js'
import { collection, addDoc } from 'firebase/firestore';
import { useState, useRef, useEffect } from "react";
import { Alert, Slide, Snackbar } from "@mui/material";

function ContactCard() {
    const successMessage = {message: 'Your message is received :)',
        type: 'success'}
    const [submitEnabled, setSubmitEnabled] = useState(false);
    const [isSubmitLoading, setIsSubmitLoading] = useState(false)
    const [submitBtnText, setSubmitBtnText] = useState("Send Message")
    const [open, setOpen] = useState(false)
    const [alertInfo, setAlertInfo] = useState(successMessage);
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const messageInputRef = useRef(null);

    const handleClose = () => {
        setOpen(false);
    }

    function SlideTransition(props) {
        return <Slide {...props} direction="up" />;
      }

    const validate = () => {
        if(nameInputRef.current.value.length > 3 && messageInputRef.current.value.length > 1) {
            setSubmitEnabled(true)
        } else {
            setSubmitEnabled(false)
        }
    }

    useEffect(() => {
        console.log("open", open)
    }, [open])

    const handleSubmit = async (e) => {
        try {
            setIsSubmitLoading(true)
            setSubmitBtnText("Sending Message")
            setSubmitEnabled(false)
            const docRef = await addDoc(collection(db, "messages"), {
                name: nameInputRef.current.value,
                email: emailInputRef.current.value,
                message: messageInputRef.current.value
              });
              setAlertInfo(successMessage)
              setTimeout(() => {
                    setIsSubmitLoading(false)
                    setSubmitBtnText("Send Message")
                    setSubmitEnabled(true)
                }, 2000);
              
        } catch (err) {
            setAlertInfo({
                message: "Facing some errors :(" + err,
                type: "error"
            })
            console.error('Error sending comment:', err);
        }
      };
  
    return (
        <>
        <div className="card content">
            <p>Leave a Message</p>
            <label htmlFor="name">Your Name<span className="mandatoryStar">*</span></label>
            <input ref={nameInputRef} onChange={validate} type="text" name="name" className="txtInput" placeholder="Name"/>

            <label htmlFor="emailId">Your Email Id</label>
            <input ref={emailInputRef} onChange={validate} type="text" name="emailId" className="txtInput" placeholder="Email Id"/>

            <label htmlFor="message">Message<span className="mandatoryStar">*</span></label>
            <textarea ref={messageInputRef} onChange={validate} name="message" className="txtInput" placeholder="Message"></textarea>

            <button onClick={() => handleSubmit()} className="btnMessage" disabled={!submitEnabled}>
                {isSubmitLoading ? (<div className="spinner"></div>) : (
                <FontAwesomeIcon icon={faPaperPlane} className="btnIcon"></FontAwesomeIcon>)}
                <span className="submitBtnText">{submitBtnText}</span>
            </button>
            <Snackbar
            TransitionComponent={SlideTransition}
            open={open} autoHideDuration={4000} onClose={handleClose}>
  <Alert
    severity={alertInfo.type}
    variant="filled"
    sx={{ width: '100%' }}
  >
    {alertInfo.message}
  </Alert>
</Snackbar>
        </div>
        </>
    )    
}

export default ContactCard;