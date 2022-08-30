import { skills } from "../data";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animation";
const index = () => {
  return (
    <motion.div
      className="flex flex-col pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="m-3 font-medium">
        <p className="py-2">
          Hello! My name is <span className="text-[#01d293]">Martins</span> and
          I enjoy creating things that live on the internet, i am creative,
          design-conscious, meticulous and highly productive. i started
          self-teaching how to code barely a year ago and since then, i have
          tremendously improved my skillsets.
        </p>
        <p className="py-2">
          I am passionate about using technology to create elegant solutions for
          businesses and individuals in form of web application while also
          ensuring that user-experience and functionality are prioritized.
        </p>
        <p className="py-2">
          My goal is to become a senior frontend engineer whose experience would
          be utilized in helping aspiring developers who are looking to build a
          career in tech.
        </p>
      </h5>
      <h6 className="p-4 text-2xl font-bold tracking-wider shadow-xl mt-7 rounded-xl">
        What I Can Do
      </h6>
      <motion.div
        className="grid gap-6 mx-auto lg:grid-cols-4 "
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {skills.map((skill, index) => {
          const { title, image } = skill;
          return (
            <motion.div
              key={index}
              className="w-full gap-8 "
              variants={fadeInUp}
            >
              <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
                <div className="grid items-center justify-center grid-cols-2 gap-4">
                  <div className="m-auto">
                    <Image src={image} alt={title} width="40px" height="40px" />
                  </div>
                  <div className="flex flex-col items-center justify-center lg:flex-row">
                    <h3 className="text-[#01d293] font-bold">{title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default index;
