import { motion } from "framer-motion";

const ContactItem = ({ color, service, delay, img, url }) => {
  return (
    <a href={url} className="link">
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
          boxShadow: `0px 3px 20px 5px ${color}`,
          transition: { duration: 0.3 },
          exit: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.98 }}
        exit={{ opacity: 0, y: 20 }}
        style={{ backgroundColor: color }}
        href={url}
      >
        <div className="name">{service}</div>
        <img src={img} alt={service} className="logo"></img>
      </motion.div>
    </a>
  );
};

export default ContactItem;
