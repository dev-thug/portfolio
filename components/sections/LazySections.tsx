"use client";

import dynamic from "next/dynamic";

const Skills = dynamic(() => import("./Skills"), { ssr: false });
const Experience = dynamic(() => import("./Experience"), { ssr: false });
const Contact = dynamic(() => import("./Contact"), { ssr: false });

export default function LazySections() {
  return (
    <>
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
