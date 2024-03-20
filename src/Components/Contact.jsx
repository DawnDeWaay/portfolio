import ContactItem from "./ContactItem";
import { motion } from "framer-motion";
import iglogo from "/logos/instagram.svg";
import li from "/logos/linkedin.svg";
import twitter from "/logos/twitter.svg";
import github from "/logos/github.png";
import email from "/logos/email.svg";

const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="top">
        <h1>Let's work together!</h1>
      </div>
      <div className="grid">
        <ContactItem
          service="Email"
          color="lightblue"
          img={email}
          url="mailto:dondewaay@gmail.com"
          delay="0"
        />
        <ContactItem
          service="LinkedIn"
          color="#0077b5"
          img={li}
          url="https://linkedin.com/in/don-dewaay-iii"
          delay="0.1"
        />
        <ContactItem
          service="GitHub"
          color="#2b3137"
          img={github}
          url="https://github.com/dondewaay"
          delay="0.2"
        />

        <ContactItem
          service="Twitter"
          color="#1DA1F2"
          img={twitter}
          url="https://twitter.com/DonaldDeWaay"
          delay="0.3"
        />
        <ContactItem
          service="Instagram"
          color="#dd2a7b"
          img={iglogo}
          url="https://www.instagram.com/dondewaay/"
          delay="0.4"
        />
      </div>
    </motion.div>
  );
};

export default Contact;
