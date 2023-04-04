import React from "react";
import { Slide } from "./Slide";
import Data  from "./Data";
import './Home.css'

export function Hero() {
  return (
    <>
      <Slide slides={Data} />
    </>
  );
}
