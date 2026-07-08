import { Link } from "react-router";

function Navigation () {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/Events">Events</Link>
      <Link to="/Help">Help</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Registration">Registration</Link>
    </nav>
  )
}

export default Navigation;