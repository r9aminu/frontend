import { useMediaQuery } from "react-responsive";
import DesktopNavbar from "./desktop";
import MobileNavbar from "./mobile";

export default function Navbar() {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });

  return isMobileOrTablet ? <MobileNavbar /> : <DesktopNavbar />;
}
