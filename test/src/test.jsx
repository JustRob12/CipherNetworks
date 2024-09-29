"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../src/components/ui/aurora-background";
import { Login } from "./component/Login";

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
        {/* Only the background remains, no logo or text */}
        
      </motion.div>
      <Login />
    </AuroraBackground>
    
  );
}
