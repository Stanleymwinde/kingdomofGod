import Image from "next/image";
import styles from "./page.module.css";
import {
  Consititution,
  HomeageDeclaration,
  NewHero,
  OurIdentity,
  WhatWeRenounce,
} from "@/components/Home";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <NewHero /> */}
      <HomeageDeclaration />
      <Consititution /> {/* The Foundation */}
      <WhatWeRenounce /> {/* What We Renounce / Sacred Commitment */}
      <OurIdentity />
    </>
  );
}
