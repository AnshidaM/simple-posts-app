import React, { useEffect, useRef, useState } from "react";
import classes from "./contact-form.module.css";

import Notification from "../ui/notification";

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}
const ContactForm = () => {
  const emailInputRef = useRef();
  const msgInputRef = useRef();
  const nameInputRef = useRef();
  const [requestStatus, setRequestStatus] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessageHandler = async (event) => {
    event.preventDefault();
    const reqBody = {
      email: emailInputRef.current.value,
      name: nameInputRef.current.value,
      message: msgInputRef.current.value,
    };
    setRequestStatus("pending");
    // try {
    //   fetch("/api/contact", {
    //     method: "POST",
    //     body: JSON.stringify(reqBody),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((response) => {
    //       console.log(response);
    //       if (!response.ok) {
    //         throw new Error(response.message || "Something went wrong");
    //       }
    //       return response.json();
    //     })
    //     .then((data) => {
    //       setRequestStatus("success");
    //       emailInputRef.current.value = "";
    //       nameInputRef.current.value = "";
    //       msgInputRef.current.value = "";
    //     });
    // } catch (err) {
    //   setRequestStatus("error");
    // }
    try {
      await sendContactData(reqBody);
      setRequestStatus("success");
      emailInputRef.current.value = "";
      nameInputRef.current.value = "";
      msgInputRef.current.value = "";
    } catch (error) {
      setRequestStatus("error");
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success",
      message: "Message sent successfully",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error",
      message: "Somethig went wrong",
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameInputRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows={5} ref={msgInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
