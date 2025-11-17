"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";
import { MdOutlineStart } from "react-icons/md";
import { RiShining2Line } from "react-icons/ri";

import { heroDetails } from "@/data/hero";
import { withBasePath } from "@/lib/util";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
    >
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]"></div>

      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto"
          variants={childVariants}
        >
          {heroDetails.heading}
        </motion.h1>

        <motion.p
          className="mt-4 text-foreground max-w-xl mx-auto"
          variants={childVariants}
        >
          {heroDetails.subheading}
        </motion.p>

        <motion.div
          className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto"
          variants={childVariants}
        >
          <a href="https://haiqv.ai/" target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="flex items-center justify-center min-w-[190px] mt-3 px-6 h-12 rounded-full w-full sm:w-fit text-white bg-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div>Get Started</div>
              <span className="ml-3 flex items-center">
                <RiShining2Line size={15} />
              </span>
            </button>
          </a>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="relative mt-8 md:mt-12 mx-auto z-10 max-w-[880px] w-full"
        >
          <div
            className="
      relative
      w-full
       rounded-t-3xl 
      bg-white/30
      dark:bg-white/10
      backdrop-blur-lg
      border border-white/20
      shadow-[0_8px_30px_rgb(0,0,0,0.06)]
      overflow-hidden
      p-4
    "
          >
            <Image
              src={withBasePath(heroDetails.centerImageSrc)}
              width={850}
              height={800}
              quality={100}
              sizes="(max-width: 768px) 100vw, 850px"
              priority={true}
              unoptimized={true}
              alt="app mockup"
              className="object-contain w-full h-auto rounded-lg"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
