"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../src/components/ui/aurora-background";
import cbLogo from "./assets/cnnet.png";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground
  className="bg-black dark:bg-neutral-900 relative overflow-hidden"
  style={{
    background: "linear-gradient(360deg, black, #18eaf1)",
  }}
>
  <motion.div
    initial={{ opacity: 0.0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    }}
    className="relative flex flex-col gap-4 items-center justify-center px-4"
  >
        {/* Add your logo here */}
        <img src={cbLogo} alt="CipherNet Logo" style={{ width: "15%", height: "35%" }} />

        <div className="text-3xl md:text-7xl font-bold text-center" style={{ color: "#17e0e7" }}>
          CipherNet Coming Soon.
        </div>
        <div className="font-extralight text-center md:text-2xl py-4" style={{ color: "white" }}>
          Empowering BSIT students through streamlined management and connected experiences.
        </div>
        <a href="https://www.facebook.com/roberto.prisoris" target="_blank" rel="noopener noreferrer">
  <button className="bg-white dark:bg-black rounded-full w-fit text-black dark:text-white px-4 py-2">
    Visit Me
  </button>
</a>
      </motion.div>
    </AuroraBackground>
  );
}
