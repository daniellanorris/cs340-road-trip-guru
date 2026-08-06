import { NavLink, useLocation } from 'react-router-dom';
import '../App.css';

export default function NavBar() {

    const { pathname } = useLocation();

    return (
        <nav>
            <div className="header"> <a href="/">Road Trip Guru </a> </div>
            <div className="navbar-container">


                <div>
                    <NavLink
                        to="/road-trippers"
                        className={pathname === "/road-trippers" ? "text-blue-400" : ""}
                    >
                        RoadTrippers
                    </NavLink>
                </div>

                <div>
                    <NavLink
                        to="/trip-budgets"
                        className={pathname === "/trip-budgets" ? "text-blue-400" : ""}
                    >
                        TripBudgets
                    </NavLink>
                </div>

                <div>
                    <NavLink
                        to="/road-trip-places"
                        className={pathname === "/road-trip-places" ? "text-blue-400" : ""}
                    >
                        RoadTripPlaces
                    </NavLink>
                </div>

                <div>
                    <NavLink
                        to="/places"
                        className={pathname === "/places" ? "text-blue-400" : ""}
                    >
                        Places
                    </NavLink>
                </div>

                <div>
                    <NavLink
                        to="/road-trip-routes"
                        className={pathname === "/road-trip-routes" ? "text-blue-400" : ""}
                    >
                        RoadTripRoutes
                    </NavLink>
                </div>

                <div>
                    <NavLink
                        to="/attractions"
                        className={pathname === "/attractions" ? "text-blue-400" : ""}
                    >
                        Attractions
                    </NavLink>
                </div>

            </div>
        </nav>
    );
}