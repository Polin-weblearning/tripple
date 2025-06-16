import React from "react";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-4 items-center">
          <motion.div
            initial={{ x: -90, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
            className="max-w-md mx-auto md:mx-0"
          >
            <h2 className="bayon-regular text-2xl font-semibold text-white sm:text-3xl">
              មិនកាលីបតែទាន់សម័យ
            </h2>
          </motion.div>
          <motion.div
            initial={{ x: 90, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
            className="max-w-md mx-auto md:mx-0"
          >
            <h2 className="bayon-regular text-3xl font-semibold text-white sm:text-3xl">
              មិនពេញនិយមតែCវីល័យ
            </h2>
          </motion.div>
          <motion.div
            initial={{ y: -90, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className=" permanent-marker-regular mt-4 text-white py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              doloremque saepe architecto maiores repudiandae amet perferendis
              repellendus, reprehenderit voluptas sequi.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
            className="max-w-md mx-auto md:mx-0"
          >
            <img
              src="https://i.pinimg.com/736x/b9/82/4d/b9824d7c04a065b1905474c46429a04d.jpg"
              className="rounded"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
