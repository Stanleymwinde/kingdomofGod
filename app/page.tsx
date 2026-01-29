import Image from "next/image";
import styles from "./page.module.css";
import {
  Consititution,
  HomeageDeclaration,
  NewHero,
  OurIdentity,
  WhatWeRenounce,
} from "@/components/Home";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <NewHero />
      <HomeageDeclaration />
      <Consititution /> {/* The Foundation */}
      <WhatWeRenounce />
      <OurIdentity />
    </>
  );
}
