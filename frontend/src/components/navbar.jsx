import { NavLink } from 'react-router-dom';
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();

   return (
    <nav >
      <div className="font-bold text-xl">MyLogo</div>
      <div className="navbar-container">
        <div>
          <NavLink href="/road-trippers" className={pathname === "/road-trippers" ? "text-blue-400" : ""}>
            RoadTrippers
          </NavLink>
        </div>
        <div>
          <NavLink href="/road-trips" className={pathname === "/road-trips" ? "text-blue-400" : ""}>
            RoadTrips
          </NavLink>

        </div>
        <div>
          <NavLink href="/road-trip-places" className={pathname === "/road-trip-places" ? "text-blue-400" : ""}>
            RoadTripPlaces
          </NavLink>
        </div>

                <div>
          <NavLink href="/places" className={pathname === "/places" ? "text-blue-400" : ""}>
            Places
          </NavLink>
        </div>
        <div>
          <NavLink href="/road-trip-routes" className={pathname === "/road-trip-routes" ? "text-blue-400" : ""}>
            RoadTripRoutes
          </NavLink>

        </div>
        <div>
          <NavLink href="/attractions" className={pathname === "/attractions" ? "text-blue-400" : ""}>
            Attractions
          </NavLink>
        </div>
      </div>
    </nav>
  );
}