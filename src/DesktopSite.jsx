import { useRef } from "react";
import useSankouScroll from "./hooks/useSankouScroll";

import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Interlude from "./sections/Interlude";
import Concept from "./sections/Concept";
import Room from "./sections/Room";
import Experience from "./sections/Experience";
import Gallery from "./sections/Gallery";
import Location from "./sections/Location";
import Stay from "./sections/Stay";
import GuestNotes from "./sections/GuestNotes";
import Reservation from "./sections/Reservation";
import Footer from "./sections/Footer";

export default function DesktopSite() {
  const scopeRef = useRef(null);

  useSankouScroll(scopeRef);

  return (
    <div ref={scopeRef}>
      <Nav />
      <Hero />
      <Interlude />
      <Concept />
      <Room />
      <Experience />
      <Gallery />
      <Location />
      <Stay />
      <GuestNotes />
      <Reservation />
      <Footer />
    </div>
  );
}