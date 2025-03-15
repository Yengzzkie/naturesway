"use client";
import React, { useState } from "react";
import DragCloseDrawer from "./DragCloseDrawer";
import { motion } from "framer-motion";

export const BouncyCardsFeatures = ({ content }) => {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="mx-auto max-w-md px-4 py-12 text-slate-800"
      onClick={() => setOpen(!open)}
    >
      <BounceCard className={`col-span-12 md:col-span-8`}>
        <CardTitle>{content.title}</CardTitle>
        <div
          className={`${content.bg} absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]`}
        >
          <span className="block text-center font-semibold text-orange-50">
            FEATURE DEMO HERE
          </span>
        </div>
      </BounceCard>
      <DragCloseDrawer open={open} setOpen={setOpen} content={content}>
        <div>{content.component}</div>
      </DragCloseDrawer>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-gray-300/70 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};
