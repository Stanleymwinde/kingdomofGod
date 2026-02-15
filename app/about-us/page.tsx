import Cta from "@/common/Cta";
import { Hero, Mission, WhatSetsUsApart, WhoWeAre } from "@/components/About";
import { Ctact } from "@/components/Contact";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Mission />
      <WhatSetsUsApart />
      <WhoWeAre />
      <Cta />
    </>
  );
};

export default page;
