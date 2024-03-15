import { motion } from "framer-motion";

const ContactItem = ({ color, service, delay, img, url }) => {
  return (
    <motion.div
      className="contact-item"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          type: "Spring",
          duration: 0.2,
          delay: delay,
        },
      }}
      whileHover={{
        transition: { duration: 0.7 },
        boxShadow: "0px 0px 15px 15px" + { color },
      }}
      whileTap={{ scale: 0.97 }}
      exit={{ opacity: 0, y: 20 }}
      style={{ backgroundColor: color }}
      href={url}
    >
      <div className="name">{service}</div>
      <img src={img} alt={service} className="logo"></img>
    </motion.div>
  );
};

export default ContactItem;
