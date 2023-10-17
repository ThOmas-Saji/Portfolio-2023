import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const Contact = () => {
  const formRef = useRef();

  const [state, setState] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleInputChanges = (event) => {
    const { name, value } = event.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSentEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_2o0s0qh",
        "template_vbos18o",
        formRef.current,
        "dfSnWcKLCbIDtVhHA"
      )
      .then(
        (result) => {
          setState({
            user_name: "",
            user_email: "",
            message: "",
          });
          alert("Message sent.");
        },
        (error) => {
          console.log(error);
          alert("Failed to sent message!!.");
        }
      );
  };
  return (
    <div className="contact">
      <motion.div
        className="contacts"
        variants={variants}
        initial="initial"
        whileInView={"animate"}
      >
        <h2>{"Let's work together"}</h2>
        <div className="item">
          <h3>Mail</h3>
          <span>@thomasms213@gmail.com</span>
        </div>
        <div className="item">
          <h3>Address</h3>
          <span>Anakkara, Idukki, Kerala</span>
        </div>
        <div className="item">
          <h3>Phone</h3>
          <span>+91-8943712737</span>
        </div>
      </motion.div>
      <motion.div className="input_wrapper">
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0, x: 400 }}
          transition={{ delay: 2, duration: 1 }}
          className="my_svg"
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M5.13641 12.764L8.15456 9.08664C8.46255 8.69065 8.61655 8.49264 8.69726 8.27058C8.76867 8.07409 8.79821 7.86484 8.784 7.65625C8.76793 7.42053 8.67477 7.18763 8.48846 6.72184L7.77776 4.9451C7.50204 4.25579 7.36417 3.91113 7.12635 3.68522C6.91678 3.48615 6.65417 3.35188 6.37009 3.29854C6.0477 3.238 5.68758 3.32804 4.96733 3.5081L3 4C3 14 9.99969 21 20 21L20.4916 19.0324C20.6717 18.3121 20.7617 17.952 20.7012 17.6296C20.6478 17.3456 20.5136 17.0829 20.3145 16.8734C20.0886 16.6355 19.7439 16.4977 19.0546 16.222L17.4691 15.5877C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4001C15.4877 15.512 15.2854 15.7143 14.8807 16.119L11.8274 19.1733M12.9997 7C13.9765 7.19057 14.8741 7.66826 15.5778 8.37194C16.2815 9.07561 16.7592 9.97326 16.9497 10.95M12.9997 3C15.029 3.22544 16.9213 4.13417 18.366 5.57701C19.8106 7.01984 20.7217 8.91101 20.9497 10.94"
              stroke="orange"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="desktop_res"
          onSubmit={handleSentEmail}
          ref={formRef}
        >
          <input
            required
            name="user_name"
            value={state.user_name}
            onChange={handleInputChanges}
            type="text"
            placeholder="name"
          />
          <input
            name="user_email"
            value={state.user_email}
            required
            onChange={handleInputChanges}
            type="email"
            placeholder="email"
          />
          <textarea
            value={state.message}
            name="message"
            required
            onChange={handleInputChanges}
            rows={8}
            placeholder="message"
          ></textarea>
          <button type="submit">Sent</button>
        </motion.form>
        <form
          className="mobile_res"
          onSubmit={handleSentEmail}
          ref={formRef}
        >
          <input
            required
            name="user_name"
            value={state.user_name}
            onChange={handleInputChanges}
            type="text"
            placeholder="name"
          />
          <input
            name="user_email"
            value={state.user_email}
            required
            onChange={handleInputChanges}
            type="email"
            placeholder="email"
          />
          <textarea
            value={state.message}
            name="message"
            required
            onChange={handleInputChanges}
            rows={5}
            placeholder="message"
          ></textarea>
          <button type="submit">Sent</button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
