"use client";

import React from "react";
import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import WhyWeExist from "@/components/home/whyWeExist";
import PillarsOfApproach from "@/components/home/pillarsOfApproach";
import WhoCanBeMentor from "@/components/home/whoCanBeMentor";
import PastEvents from "@/components/home/pastEvents";
import AwardsAndRecognitions from "@/components/home/awardsRecognition";
import JoinMovement from "@/components/home/joinMovement";

export default function Home() {

  return (
    <div className="flex flex-col max-w-screen bg-clay-light-hover gap-8    ">
      <Hero />
      <Stats />
      <WhyWeExist />
      <PillarsOfApproach />
      <WhoCanBeMentor />
      <PastEvents />
      <AwardsAndRecognitions />
      <JoinMovement />
    </div>
  );
}
