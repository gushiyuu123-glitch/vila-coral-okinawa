import NavSp from "./components/sp/NavSp";
import HeroSp from "./sections/sp/HeroSp";
import InterludeSp from "./sections/sp/InterludeSp";
import ConceptSp from "./sections/sp/ConceptSp";
import RoomSp from "./sections/sp/RoomSp";
import ExperienceSp from "./sections/sp/ExperienceSp";
import GallerySp from "./sections/sp/GallerySp";
import LocationSp from "./sections/sp/LocationSp";
import StaySp from "./sections/sp/StaySp";
import GuestNotesSp from "./sections/sp/GuestNotesSp";
import ReservationSp from "./sections/sp/ReservationSp";
import FooterSp from "./sections/sp/FooterSp";

export default function MobileSite() {
  return (
    <div id="top">
      <NavSp />

      <HeroSp />

      <div id="scene">
        <InterludeSp />
        <ConceptSp />
        <RoomSp />
        <ExperienceSp />
        <GallerySp />
      </div>

      <div id="access">
        <LocationSp />
      </div>

      <div id="stay">
        <StaySp />
      </div>

      <GuestNotesSp />

      <div id="plans">
        <ReservationSp />
      </div>

      <FooterSp />
    </div>
  );
}