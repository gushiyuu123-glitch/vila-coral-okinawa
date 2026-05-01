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
    <div>
      <NavSp />
      <HeroSp />
      <InterludeSp />
      <ConceptSp />
      <RoomSp />
      <ExperienceSp />
      <GallerySp />
      <LocationSp />
      <StaySp />
      <GuestNotesSp />
      <ReservationSp />
      <FooterSp />
    </div>
  );
}