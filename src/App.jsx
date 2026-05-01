import { useEffect, useState } from "react";

import DesktopSite from "./DesktopSite";
import MobileSite from "./MobileSite";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 767px)").matches;
  });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const onChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(media.matches);
    media.addEventListener("change", onChange);

    return () => {
      media.removeEventListener("change", onChange);
    };
  }, []);

  return isMobile;
}

export default function App() {
  const isMobile = useIsMobile();

  return isMobile ? <MobileSite /> : <DesktopSite />;
}