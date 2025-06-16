import React from "react";
import { motion } from "framer-motion";
import p01 from '../assets/p1.png';
import p02 from '../assets/p2.png';
import p03 from '../assets/p3.png';
import p04 from '../assets/p4.png';

const About = () => {
  const images = [p01, p02, p03, p04];

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-screen-xl bg-black px-4 py-2 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-white sm:text-3xl">
            Product Collection
          </h2>
          <p className="mx-auto mt-4 max-w-md text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </header>

        <ul className="mt-8 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {images.map((imgSrc, i) => (
            <motion.li
              key={i}
                 initial={{ y: -90, opacity: 0 }}
            whileInView={{ y: 0, opacity: 0.2 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
            >
              <a href="#">
                <img
                  src={imgSrc}
                  alt={`Product ${i + 1}`}
                  className="h-[300px] w-full object-cover rounded-t-lg"
                />
                <div className="relative bg-black  rounded-b-lg">
                  <h3 className="text-xs text-white text-center group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>
                  <p className="mt-2 text-center text-white">£24.00 GBP</p>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
