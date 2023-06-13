import { Outlet, Link } from "react-router-dom";
import SecondPage from "./SecondPage";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">FirstPage</Link>
          </li>
          <li>
            <Link to="/SecondPage">SecondPage</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;